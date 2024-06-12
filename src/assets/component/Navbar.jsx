import { useContext } from "react";
import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { getAuth, signOut } from "firebase/auth";
import UseAdmin from "../Hooks/UseAdmin";


const Navbar = () => {

    const { user } = UseAuth()
    const [isAdmin] = UseAdmin()
    console.log(isAdmin)

    const handlelogout = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('logout successful')
        }).catch((error) => {
            console.log(error.message)
        });

    }

    const links = <>
        <Link className="mr-5 text-xl text-green-500" to="/calender"><button>Calender</button></Link>
        <Link className="mr-5 text-xl text-green-500" to="/app"><button>App </button></Link>
        <Link className="mr-5 text-xl text-green-500" to="/"><button>Home</button></Link>
        <Link className="mr-5 text-xl text-green-500" to="/dashboard"><button>Dashboard</button></Link>
        <Link className="mr-5 text-xl text-green-500" to="/sort"><button>Sort</button></Link>


    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handlelogout} className="btn text-green-600">Logout</button> : <> <Link className="mr-5 text-xl text-green-500" to="/login"><button>Login</button></Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;