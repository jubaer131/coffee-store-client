import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { authContest } from "./assets/provider/Authprovider";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { creatUser, googleSignin, githubSignin } = useContext(authContest);
    const navigate = useNavigate();

    const handlelogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        creatUser(email, password)
            .then((result) => {
                // Signed in 
                console.log(result.user);
                e.target.reset()
                navigate("/");

            })
            .catch((error) => {
                console.log(error);
                toast.error("Invalid email or password");

            });
    }
    const handlegoogle = (e) => {
        e.preventDefault();
        googleSignin()

            .then((result) => {
                console.log(result.user)

                navigate("/");
            }).catch((error) => {
                console.log(error)
            });

    }

    const handlegithub = e => {
        e.preventDefault();
        githubSignin()
            .then((result) => {
                console.log(result.user)

                navigate("/");
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200 bg-[url('https://i.ibb.co/ZHPfK4T/modern-business-center.jpg')] bg-cover">

                <div className="hero-content flex-col lg:w-[800px]">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-white font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0  lg:w-[600px] shadow-2xl bg-base-100 md:px-20 ">
                        <form onSubmit={handlelogin} className="card-body  ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered "
                                    required

                                />
                                <span className="absolute right-5 bottom-5" onClick={() => setShowPassword(!showPassword)}>
                                    {/* You can use eye icons here to toggle password visibility */}
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Login</button>
                            </div>
                            <ToastContainer />
                        </form>


                        <p className="px-3 text-[16px] text-center dark:text-gray-600">Login with social accounts</p>
                        <div className="flex justify-between my-5 px-8">
                            <button onClick={handlegoogle} className="btn btn-accent"><FaGoogle></FaGoogle> Google  </button>
                            <button onClick={handlegithub} className="btn btn-accent"><FaGithub></FaGithub> github  </button>
                        </div>
                        <p className='text-center pb-4 mb-6 px-5'>Don't have an account please  <Link className='text-green-500' to="/registation">Register now</Link></p>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Login;
