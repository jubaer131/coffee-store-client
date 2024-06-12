
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { getAuth, updateProfile } from "firebase/auth";
import { authContest } from "./provider/Authprovider";


const Registation = () => {

    const navigate = useNavigate()
    const { creatregistation, updateProfilePicture, setreload } = useContext(authContest)

    const [showPassword, setShowPassword] = useState(false);

    const handleregistation = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return
        }


        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
            return
        }


        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter.");
            return
        }


        if (!/\d/.test(password)) {
            toast.error("Password must contain at least one digit.");
            return
        }


        if (!/[^a-zA-Z0-9]/.test(password)) {
            toast.error("Password must contain at least one special character.");
            return
        }




        const name = e.target.name.value;
        const photo = e.target.photo.value;


        creatregistation(email, password)
            .then((result) => {
                // Signed up 
                console.log(result.user)
                toast.success('successfully registation') // Call notify function here
                e.target.reset()
                // navigate('/login')

                updateProfilePicture(name, photo)
                    .then((result) => {
                        setreload(true)
                        // e.target.reset()
                    })
                    .catch((error) => {
                        console.log(error)
                    })


                // e.target.reset()

            })
            .catch((error) => {
                console.log(error)
            });

    }

    return (
        <div className=" mx-auto bg-[url('https://i.ibb.co/wSwsGFQ/juho-luomala-j-Pkv8ta-RWM8-unsplash.jpg')] bg-cover min-h-screen">

            <div className="hero  ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-4xl shadow-2xl bg-base-100">
                        <form onSubmit={handleregistation} className="card-body lg:w-[600px] ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="url" name="photo" placeholder="photo" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-accent">Register</button>
                            </div>
                            <ToastContainer />
                        </form>

                        <p className='text-center pb-4'>You have an account please  <Link className='text-green-500' to="/login"> Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registation;
