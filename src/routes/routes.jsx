import { createBrowserRouter } from "react-router";
import Layout from "../layouts/layout";
import HomePage from "../pages/homePage";
import Stream from "../pages/stream";
import ReviewPage from "../pages/reviewPage";
import Preload from "../components/content/load/loadPage";
import LoginPage from "../pages/auth/loginPage";

let routes =  createBrowserRouter([
   {
    path:'/',
    Component:Layout,
    children:[
        {
            path:"",
            Component:HomePage
        },
        {
            path:"/stream",
            Component:Stream
        },

        {
            path:"/review",
            Component:ReviewPage
        },

        {
            path:"/connexion",
            Component:LoginPage
        }
    ]

   }
]);



export default routes