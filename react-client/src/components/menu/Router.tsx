import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../../pages/Layout.tsx";
import {JobOffersPage} from "../../pages/JobOffersPage.tsx";
import {CreateOfferPage} from "../../pages/CreateOfferPage.tsx";
import JobOfferDetail from "../../pages/JobOfferDetail.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <JobOffersPage />,
            },
            {
                path: "nabidky",
                element: <JobOffersPage />,
            },
            {
                path: "pridat-nabidku",
                element: <CreateOfferPage />,
            },
            {
                path: "detail-nabidky",
                element: <JobOfferDetail />,
            }

        ],
    },
]);