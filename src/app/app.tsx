import { MainBody, Button } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { Theme } from "./utils/Theme";
import CakeScene from "./components/Cake3D/CakeComponent";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Cart from "./Shops/Cart/Cart";
import ShopNavbar from "./Shops/component/ShopNavbar";
import { ShopContextProvider } from "./context/ShopContext";
import RegisterPage from "./pages/RegisterPage";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { HomePage } from "./pages";
import ProfilePage from "./pages/ProfilePage";
import Hero from "./SweetTouches/component/Hero";
import SweetCart from "./SweetTouches/Cart/SweetCart";
import { SweetContextProvider } from "./context/SweetContext";
import SweetNavbar from "./SweetTouches/component/SweetNavbar";
import ShopHero from "./Shops/component/ShopHero";
import Navbar from "./Shops/component/ShopNavbar";
import { Showcase } from "./pages";
import ProductPage from "./pages/ProductPage";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/shops",
    element: (
      <MainBody>
        <Navbar />
        <ShopHero />
      </MainBody>
    ),
  },
  {
    path: "/product",
    element: <Showcase />,
  },
  {
    path: "/cart",
    element: (
      <MainBody>
        <Navbar />
        <ShopNavbar />
        <Cart />
      </MainBody>
    ),
  },
  {
    path: "/cake",
    element: (
      <div>
        <Navbar />
        <SweetNavbar />
        <CakeScene></CakeScene>
      </div>
    ),
  },
  {
    path: "/sweettouches",
    element: (
      <MainBody>
        <Navbar />
        <Hero />
      </MainBody>
    ),
  },
  {
    path: "/profile",
    Component: ProfilePage,
  },
  {
    path: "/sweetcart",
    element: (
      <MainBody>
        <Navbar />
        <SweetNavbar />
        <SweetCart />
      </MainBody>
    ),
  },
  {
    path: "/product/:id",
    Component: ProductPage,
  },
  {
    path: "*",
    element: (
      <MainBody>
        <h1>404 Not Found</h1>
        <Button>
          <Link to="/">Go Home</Link>
        </Button>
      </MainBody>
    ),
  },
]);

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SweetContextProvider>
            <ShopContextProvider>
              <RouterProvider router={router} />
            </ShopContextProvider>
          </SweetContextProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
