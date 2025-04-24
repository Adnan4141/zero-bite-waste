import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";
import { ToastContainer } from "react-toastify";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        </div>
    );
};

export default Main;