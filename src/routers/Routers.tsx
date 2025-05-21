import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CommingSoon from "../pages/CommingSoon";

export const routers = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <CommingSoon />
            },
            {
                path: 'service',
                element: <CommingSoon />
            },
            {
                path: 'newProperty',
                element: <CommingSoon />
            },
            {
                path: 'contact',
                element: <CommingSoon />
            },
            {
                path: 'login',
                element: <CommingSoon />
            }
        ]
    }
]);