import { Outlet } from "react-router-dom";
import App from "../../App";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <App></App>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Root;