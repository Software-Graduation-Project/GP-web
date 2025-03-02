import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useMutation } from "react-query";
import { getCurrentUser, loginApi, registerApi } from "../api";
import { User, RegistrationFields } from "../types";

interface AuthContextProps {
  user: User | null;
  registerUserContext: (
    registrationFormFields: RegistrationFields
  ) => Promise<void>;
  loginUserContext: (userData: {
    email: string;
    password: string;
  }) => Promise<void>;
  logoutContext: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { mutateAsync: mutateLoginAsync } = useMutation(loginApi);
  const { mutateAsync: mutateRegisterAsync } = useMutation(registerApi);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      setIsLoggedIn(false);
      return;
    }

    getCurrentUser()
      .then((response) => {
        setUser(response.data);
        setIsLoggedIn(true);
      })
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
        setIsLoggedIn(false);
      });
  }, []);

  const loginUserContext = async (userData: {
    email: string;
    password: string;
  }) => {
    const response = await mutateLoginAsync(userData);
    const user = response.data;
    const headers = response.headers as any;
    const token = headers.getAuthorization?.();
    localStorage.setItem("token", token);
    setUser(user);
    setIsLoggedIn(true);
  };

  const registerUserContext = async (registrationFormFields: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  }) => {
    const response = await mutateRegisterAsync(registrationFormFields);
    if (response.status !== 201) {
      throw new Error(response.data.errors[0] || "Registration failed");
    } else {
      const user = response.data;
      const headers = response.headers as any;
      const token = headers.getAuthorization?.();
      localStorage.setItem("token", token);
      setUser(user);
      setIsLoggedIn(true);
    }
  };

  const logoutContext = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUserContext,
        loginUserContext,
        logoutContext,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
