
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import GoogleLogin from "../Login/GoogleLogin/GoogleLogin";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateStudentProfile } = useContext(AuthContext)
    const navigate = useNavigate()


    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                updateStudentProfile(data.name, data.photoURL)
                    .then(() => {
                        const studentInfo = { name: data.name, image: data.PhotoURL, email: data.email }
                        fetch('https://y-alpha-two.vercel.app/student', {
                            method: "POST",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(studentInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Student is created',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })

                    })

                    .catch(error => console.log(error))
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            < Helmet >
                <title>Summer Rythm | Sign Up</title>
            </Helmet >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">Please create an account the Summer rythm classes to perchase your dream music platform.Go invest your Quality time with our most expertise music based courses</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="your name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("PhotoURL", { required: true })} type="text" placeholder="photo URL.." className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-500">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {/* TODO: Confirm Pass & Hide Button */}
                            <input {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && <span className="text-red-500">Password must required</span>}
                            {errors.password?.type === "minLength" && <span className="text-red-500">Password must be 6 charecter</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-500">Password must have one uppercase,one lower case & one special charecter to secured mostly</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p><small>Already have an account ? <Link to="/login">please login</Link> </small></p>
                    <GoogleLogin></GoogleLogin>

                </div>
            </div>
        </div>
    );
};

export default SignUp;