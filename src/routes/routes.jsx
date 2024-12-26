import { createBrowserRouter } from "react-router";
import Layout from "../layouts/layout";
import HomePage from "../pages/homePage";
import Stream from "../pages/stream";
import ReviewPage from "../pages/reviewPage";
import Preload from "../components/content/load/loadPage";

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
            path:"/preload",
            Component:Preload
        }
    ]

   }
]);



export default routes