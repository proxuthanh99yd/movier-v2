import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { ToastContainer } from "react-toastify";

export default function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </>
    );
}
