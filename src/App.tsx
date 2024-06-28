
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"
import Home from "./pages/home/home";
import Users from "./pages/users/users";
import Products from "./pages/products/products";
import NavarApp from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import MenuApp from "./components/menu/menu";
import Login from "./pages/login/login";
import './styles/global.scss'
import User from "./pages/user/user";
import Product from "./pages/product/product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

  const queryClient = new QueryClient();

function App() {
const Layout = () => {
  return (
    <div className="main">
      <NavarApp/>
      <div className="container">
        <div className="menuContainer">
          <MenuApp/>
        </div>
        <div className="contentContainer">
          <QueryClientProvider client={queryClient}>

          <Outlet/>
          </QueryClientProvider>
        </div>
      </div>

      <Footer/>
    </div>
  )
  
}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:
      [
        {
          path:"/",
          element:<Home/>
        }
        ,{
          path:"/users",
          element:<Users/>
        }
        ,{
          path:"/products",
          element:<Products/>
        }
        ,{
          path:"/users/:id",
          element:<User/>
        }
        ,{
          path:"/products/:id",
          element:<Product/>
        }
    ]}
    ,{
       path:"/login",
      element:<Login/>  
    }
  
  ]);

return(
    <RouterProvider router={router}/>
)  
}

export default App

