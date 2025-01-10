import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Header from "./Header/Header";
import ReactDOM from "react-dom/client";
import Home from "./Home/Home";
import Toprated from "./Toprated/Toprated";
import Upcoming from "./Upcoming/Upcoming";


const AppComponent = () => (
   
    <div className="Approot">
    
        
        <Header/>
        <Outlet/>
        
    </div>
);

const appRouter =createBrowserRouter([
    {
        path: '/',
        element:<AppComponent/>,
        children: [
            {path:'home',element:<Home/>},
            {path:'toprated', element:<Toprated/>},
            {path:'upcoming',element:<Upcoming/>},
        ],
    },
]);

const rootReact = ReactDOM.createRoot(document.getElementById('root'));
rootReact.render(
  <RouterProvider router={appRouter} />
);