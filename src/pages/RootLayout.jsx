import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/accountSlice";
import { ToastContainer } from "react-toastify";

export default function RootLayout() {
    const dispatch = useDispatch();
    const { sessionId: hasSessionId } = useSelector((state) => state.auth);
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem("auth"));
        auth && dispatch(fetchUser(auth.sessionId));
    }, [hasSessionId]);
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </>
    );
}
