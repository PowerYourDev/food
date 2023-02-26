import React from "react";
import Header from "./components/Header";
import Praticse from "./components/Body";
import Footer from "./components/Footer";
import "./index.css"
import { createBrowserRouter,Outlet } from "react-router-dom";
import DetailCart from "./components/DetailCart";
import Error from "./ErrorPage";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./redux/store"


const AppLayout = () => {
  return (
    <>
    <Provider store={store}>
      <Header />
      <Outlet/>
      <Footer />
      </Provider>
      </>
    
  );
};

const router=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      
      {
        path:'/',
        element:<Praticse/>
      },
      
      {
        path:'/detailcart/:id',
        element:<DetailCart/>,
        
      },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:'/home',
          element:<Footer/>
        },
        {
          path:'/about',
          element:<Header/>
        }
      ]


}])

export default AppLayout;

export {router}
