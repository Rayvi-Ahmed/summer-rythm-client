import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Instructors from "../../Pages/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes";
import ErrorPage from "../../Errorpage/ErrorPage";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import SelectedClasses from "../../Layout/Dashboard/DashboardPages/SelectedClases/SelectedClasses";
import AddClass from "../../Layout/Dashboard/DashboardPages/addClasss/AddClass";
import MyClass from "../../Layout/Dashboard/DashboardPages/MyClass/MyClass";
import AllStudent from "../../Layout/Dashboard/AllStudent/AllStudent";
import Payment from "../../Layout/Dashboard/DashboardPages/Payment/Payment";
import ManageClass from "../../Layout/Dashboard/ManageClass/ManageClass";
import InstructorClasses from "../../Layout/Dashboard/DashboardPages/InstructorClasses/InstructorClasses";
import TopInstructor from "../../Pages/TopInstructor/TopInstructor";
import EnrollClasses from "../../Layout/Dashboard/DashboardPages/EnrollClasses/EnrollClasses";
import PaymentHistory from "../../Layout/Dashboard/DashboardPages/PaymentHistory/PaymentHistory";
import TopClasses from "../../Pages/TopClasses/TopClasses";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import InstructorRoute from "./InstructorRoute/InstructorRoute";
import Feedback from "../../Layout/Dashboard/ManageClass/Feedback/Feedback";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },

            {
                path: '/classes',
                element: <Classes></Classes>

            }, {
                path: '/instructor',
                element: <Instructors></Instructors>
            },
            {
                path: '/topInstructor',
                element: <TopInstructor></TopInstructor>
            },
            {
                path: '/topClasses',
                element: <TopClasses></TopClasses>
            },

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'selectedClass',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>

            },
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            },
            {
                path: 'allStudent',
                element: <AdminRoute><AllStudent></AllStudent></AdminRoute>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://y-alpha-two.vercel.app/booked/${params.id}`)
            },
            {
                path: 'manageClass',
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
            },
            {
                path: 'instructorClass',
                element: <InstructorRoute> <InstructorClasses></InstructorClasses></InstructorRoute>
            },
            {
                path: 'enrollClass',
                element: <EnrollClasses></EnrollClasses>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'feedback',
                element: <Feedback></Feedback>
            }
        ]
    }
]);

export default router;