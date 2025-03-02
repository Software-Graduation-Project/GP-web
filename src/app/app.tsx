import { ThemeProvider } from "styled-components";
import { Theme } from "./utils/Theme";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { SweetContextProvider } from "./context/SweetContext";
import routerConfig from "./routes/routerConfig";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SweetContextProvider>
            <RouterProvider router={routerConfig} />
          </SweetContextProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
