import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Dashboard/Common/Profile";
import MainLayout from "../layouts/MainLayout";
import ManageMembers from "../pages/Dashboard/Admin/ManageMembers";
import AgreementRequests from "../pages/Dashboard/Admin/AgreementRequests";
import ManageCoupons from "../pages/Dashboard/Admin/ManageCoupons";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import Apartments from "../pages/Apartment/Apartments";
import Announcement from "../pages/Dashboard/Common/Announcement";
import MakeAnnouncement from "../pages/Dashboard/Admin/MakeAnnouncement";
import AdminRoute from "./AdminRoute";
import MemberRoute from "./MemberRoute";
import MyProfile from "../pages/Dashboard/Member/MyProfile";
import MakePayment from "../pages/Dashboard/Member/MakePayment";
import PaymentHistory from "../pages/Dashboard/Member/PaymentHistory";
import CheckoutForm from "../components/Form/CheckoutForm";
import About from "../pages/About/About";
import Faq from "../pages/Resources/Faq";
import Privacy from "../pages/Resources/Privacy";
import Terms from "../pages/Resources/Terms";
import Contact from "../pages/Resources/Contact";
import Overview from "../pages/Dashboard/Common/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apertments",
        element: <Apartments />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/apertments`),
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "faq", element: <Faq /> },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Overview/>
          </PrivateRoute>
        ),
      },
       {
        path: "announcements",
        element: (
          <PrivateRoute>
            <Announcement />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-members",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageMembers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "make-announcement",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <MakeAnnouncement />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "agreement-requests",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AgreementRequests />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-coupons",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageCoupons />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "admin-profile",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminProfile />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MemberRoute>
              <MyProfile />
            </MemberRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "make-payment",
        element: (
          <PrivateRoute>
            <MemberRoute>
              <MakePayment />
            </MemberRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <MemberRoute>
              <PaymentHistory />
            </MemberRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-checkout",
        element: (
          <PrivateRoute>
            <MemberRoute>
              <CheckoutForm />
            </MemberRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
