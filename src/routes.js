import ErrorPage from "./compoennts/error-page";
import Login from "./compoennts/login";
import { ContactUs } from "./compoennts/ContactUs";
import Muicomponents from "./api/pages/Muicomponents";

const routes = [{
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />,
},
{
    path: '/contact-us',
    element: <ContactUs />,
    errorElement: <ErrorPage />,
},
{
    path: '/mui',
    element: <Muicomponents />,
    errorElement: <ErrorPage />,
}
]

export default routes;