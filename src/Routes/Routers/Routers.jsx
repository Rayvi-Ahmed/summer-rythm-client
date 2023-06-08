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
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'selectedClass',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>

            },
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            }
        ]
    }
]);

export default router;