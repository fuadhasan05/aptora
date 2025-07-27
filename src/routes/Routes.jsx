import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import Profile from '../pages/Dashboard/Common/Profile'
import MainLayout from '../layouts/MainLayout'
import MyOrders from '../pages/Dashboard/Customer/MyOrders'
import ManageMembers from '../pages/Dashboard/Admin/ManageMembers'
import Announcement from '../pages/Dashboard/Admin/Announcement'
import AgreementRequests from '../pages/Dashboard/Admin/AgreementRequests'
import ManageCoupons from '../pages/Dashboard/Admin/ManageCoupons'
import AdminProfile from '../pages/Dashboard/Admin/AdminProfile'
import ApartmentDetails from '../pages/ApartmentDetails/ApartmentDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/apartment/:id',
        element: <ApartmentDetails></ApartmentDetails>,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
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
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-members',
        element: (
          <PrivateRoute>
            <ManageMembers />
          </PrivateRoute>
        ),
      },
      {
        path: 'make-announcement',
        element: (
          <PrivateRoute>
            <Announcement/>
          </PrivateRoute>
        ),
      },
      {
        path: 'agreement-requests',
        element: (
          <PrivateRoute>
            <AgreementRequests></AgreementRequests>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-coupons',
        element: (
          <PrivateRoute>
            <ManageCoupons></ManageCoupons>
          </PrivateRoute>
        ),
      },
      {
        path: 'admin-profile',
        element: (
          <PrivateRoute>
            <AdminProfile></AdminProfile>
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-orders',
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
    ],
  },
])
