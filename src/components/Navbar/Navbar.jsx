import { Link, NavLink } from "react-router-dom";
import { linkTo } from "../../routes";
import { HeaderWrapper } from "./style";
import { useEffect, useState } from "react";
import Login from "../Login";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "../../features/userSlice";
import { logoutApi } from "../../features/accountSlice";
import { toast } from "react-toastify";

export default function Navbar() {
    const [scrollTop, setScrollTop] = useState(false);
    const [menuMobile, setMenuMobile] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    const { status: isLogin } = useSelector((state) => state.account);
    const dispatch = useDispatch();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY.toFixed() > 400) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // useEffect(() => {
    //     if (isLogin === "succeeded") {
    //         toast(isLogin);
    //     }
    // }, [isLogin]);
    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newForm = Object.fromEntries(formData);
        if (!newForm.username || !newForm.password) {
            return;
        }
        dispatch(fetchAuth(newForm));
        setFormOpen(false);
    };
    const handleLogout = (e) => {
        e.preventDefault();
        const { sessionId } = JSON.parse(localStorage.getItem("auth"));
        dispatch(logoutApi(sessionId));
    };

    return (
        <>
            {/* BEGIN | Header */}
            <HeaderWrapper className={scrollTop ? "sticky" : ""}>
                <div className="container">
                    <nav className="navbar">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <Link to={linkTo.home}>
                                <img
                                    className="logo"
                                    src="/images/logo1.png"
                                    alt=""
                                    width={119}
                                    height={58}
                                />
                            </Link>
                        </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div
                            className={`navbar-collapse ${
                                !menuMobile && "hidden"
                            }`}
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to={linkTo.home}>Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#">
                                        Movies
                                        <i
                                            className="fa fa-angle-down"
                                            aria-hidden="true"
                                        />
                                    </a>
                                    <ul className="sub-nav">
                                        <li className="sub-nav-item">
                                            <Link to={linkTo.moviesPopular}>
                                                Popular
                                            </Link>
                                        </li>
                                        <li className="sub-nav-item">
                                            <Link to={linkTo.moviesNowPlaying}>
                                                Now Playing
                                            </Link>
                                        </li>
                                        <li className="sub-nav-item">
                                            <Link to={linkTo.moviesUpcoming}>
                                                Upcoming
                                            </Link>
                                        </li>
                                        <li className="sub-nav-item">
                                            <Link to={linkTo.moviesTopRated}>
                                                Top Rated
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink to={linkTo.tvShows}>
                                        TV Shows
                                        <i
                                            className="fa fa-angle-down"
                                            aria-hidden="true"
                                        />
                                    </NavLink>
                                    <ul className="sub-nav">
                                        <li className="sub-nav-item">
                                            <Link to={linkTo.tvPopular}>
                                                Popular
                                            </Link>
                                        </li>
                                        <li className="sub-nav-item">
                                            <Link to={linkTo.tvAiringToday}>
                                                Airing Today
                                            </Link>
                                        </li>
                                        <li className="sub-nav-item">
                                            <Link to={linkTo.tvOnTv}>
                                                On TV
                                            </Link>
                                        </li>
                                        <li className="sub-nav-item">
                                            <Link to={linkTo.tvTopRated}>
                                                Top Rated
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink to={linkTo.people}>
                                        People
                                        <i
                                            className="fa fa-angle-down"
                                            aria-hidden="true"
                                        />
                                    </NavLink>
                                    <ul className="sub-nav">
                                        <li className="sub-nav-item">
                                            <Link to={linkTo.peoplePopular}>
                                                Popular People
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav menu-right">
                                {isLogin === "succeeded" ? (
                                    <>
                                        <li className="account">
                                            <Link
                                                to={linkTo.account}
                                                className="user-link"
                                            >
                                                <i className="fa-solid fa-user"></i>
                                            </Link>
                                            <ul className="account-menu">
                                                <li className="account-item">
                                                    <Link
                                                        to={
                                                            linkTo.moviesFavorite
                                                        }
                                                    >
                                                        Favorite
                                                    </Link>
                                                </li>
                                                <li className="account-item">
                                                    <Link
                                                        to={
                                                            linkTo.moviesWatchList
                                                        }
                                                    >
                                                        Watch List
                                                    </Link>
                                                </li>
                                                <li className="account-item">
                                                    <Link
                                                        to={linkTo.moviesRated}
                                                    >
                                                        Watch List
                                                    </Link>
                                                </li>
                                                <li className="account-item">
                                                    <a
                                                        onClick={handleLogout}
                                                        href="#!"
                                                    >
                                                        logout
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="loginLink">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setFormOpen(
                                                        (curr) => !curr
                                                    );
                                                }}
                                                href="#"
                                            >
                                                LOG In
                                            </a>
                                        </li>
                                        <li className="btn sign-upLink">
                                            <a href="#">sign up</a>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                        <div
                            onClick={() => setMenuMobile((curr) => !curr)}
                            className="menu-btn"
                        >
                            {menuMobile ? (
                                <i className="fa-regular fa-rectangle-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-bars"></i>
                            )}
                        </div>
                    </nav>
                    {/* top search form */}
                    {!scrollTop && (
                        <div className="top-search">
                            <select>
                                <option value="united">TV show</option>
                                <option value="saab">Others</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Search for a movie, TV Show or celebrity that you are looking for"
                            />
                        </div>
                    )}
                </div>
                {formOpen && (
                    <Login closeForm={setFormOpen} handleSubmit={handleLogin} />
                )}
            </HeaderWrapper>
            {/* END | Header */}
        </>
    );
}
