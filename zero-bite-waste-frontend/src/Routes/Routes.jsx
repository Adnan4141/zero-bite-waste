import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import Policy from "../pages/Policy/Policy";
import FAQPage from "../pages/FAQ/FAQPage";
import CharityActivities from "../pages/CharityActivities/CharityActivities";
import Donate from "../pages/donate/Donate";
import VolunteerFamily from "../pages/VolFamily/VolunteerFamily";
import TopContributorPage from "../pages/TopContributor/TopContributorPage";
import Volunteer from "../pages/volunteer/Volunteer";
import SignIn from "../pages/SignIn/SignIn";
import ForgetPass from "../pages/SignIn/ForgetPass";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from './PrivateRoute';  

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/policy",
        element: <Policy></Policy>,
      },
      {
        path: "/faq",
        element: <FAQPage></FAQPage>,
      },
      {
        path: "/charity-activities",
        element: <CharityActivities></CharityActivities>,
      },
      {
        path: "/donate",
        element: (
          <PrivateRoute element={<Donate />} />  
        ),
      },
      {
        path: "/vol-family",
        element: <VolunteerFamily></VolunteerFamily>,
      },
      {
        path: "/top-contributor",
        element: <TopContributorPage></TopContributorPage>,
      },
      {
        path: "/volunteer",
        element: <Volunteer></Volunteer>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPass></ForgetPass>,
      },
    ],
  },
]);


