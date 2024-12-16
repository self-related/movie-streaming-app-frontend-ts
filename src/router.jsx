import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/favorites",
                element: <div>Temp Favorites Page</div>,
            },
            {
                path: "/trending",
                element: <div>Temp Trending Page</div>,
            },
            {
                path: "/welcome",
                element: <div>Temp Welcome Page</div>,
            },
        ]
    }
]);