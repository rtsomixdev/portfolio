import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Layout from "../layout";
import ContactPage from "../pages/ContactPage";
import ProfilePage from "../pages/ProfilePage";
import CertificatePage from "../pages/CertificatePage";
import RepositoryPage from "../pages/RepositoryPage";

const router = createBrowserRouter([
    {path : "/",
     element : <Layout/>,
     children : [
        {
            index : true,
            element : <MainPage/>,
        },
        {
            path : "profile",
            element : <ProfilePage/>
        },
        {
            path : "certificate",
            element : <CertificatePage/>
        },
        {
            path : "repository",
            element : <RepositoryPage/>
        },
        {
            path : "contact",
            element : <ContactPage/>
        }
     ]
    }
])

export default router;