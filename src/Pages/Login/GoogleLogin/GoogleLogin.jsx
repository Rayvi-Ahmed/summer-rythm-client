import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";


const GoogleLogin = () => {
    const { GoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        GoogleLogin()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const studentInfo = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/student', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(studentInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;