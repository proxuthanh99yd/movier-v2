import { Link, NavLink } from "react-router-dom";
import { linkTo } from "../../routes";
import { HeaderWrapper } from "./style";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchUser,
    logoutApi,
    requestToken,
} from "../../features/accountSlice";
import SearchResults from "../SearchResults";
import { fetchSearch } from "../../features/searchSlice";
import { clearMoviesFavorite } from "../../features/moviesFavoriteSlice";

export default function Navbar() {
    const [scrollTop, setScrollTop] = useState(false);
    const [menuMobile, setMenuMobile] = useState(false);
    const { isLogin } = useSelector((state) => state.account);
    const searchResult = useSelector((state) => state.search);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(requestToken());
    };
    const handleLogout = (e) => {
        e.preventDefault();
        const { sessionId } = JSON.parse(localStorage.getItem("auth"));
        dispatch(logoutApi(sessionId));
        dispatch(clearMoviesFavorite());
    };
    const handleSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newForm = Object.fromEntries(formData);
        if (newForm.query) {
            dispatch(fetchSearch({ ...newForm, page: 1 }));
        }
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
                                    <NavLink to={linkTo.movies}>Movies</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink to={linkTo.tvShows}>
                                        TV Shows
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink to={linkTo.people}>
                                        celebrities
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav menu-right">
                                {isLogin ? (
                                    <>
                                        <li className="account">
                                            <NavLink
                                                to={linkTo.account}
                                                className="user-link"
                                            >
                                                <i className="fa-solid fa-user"></i>
                                            </NavLink>
                                            <ul className="account-menu">
                                                <li className="account-item">
                                                    <NavLink
                                                        to={
                                                            linkTo.moviesFavorite
                                                        }
                                                    >
                                                        Favorite Movies
                                                    </NavLink>
                                                </li>

                                                <li className="account-item">
                                                    <NavLink
                                                        to={linkTo.moviesRated}
                                                    >
                                                        Rated Movies
                                                    </NavLink>
                                                </li>

                                                <li className="account-item">
                                                    <NavLink
                                                        to={
                                                            linkTo.tvShowsFavorite
                                                        }
                                                    >
                                                        Favorite TV Shows
                                                    </NavLink>
                                                </li>

                                                <li className="account-item">
                                                    <NavLink
                                                        to={linkTo.tvShowsRated}
                                                    >
                                                        Rated TV Shows
                                                    </NavLink>
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
                                        <li className="btn sign-upLink">
                                            <a onClick={handleLogin} href="#">
                                                LOG In
                                            </a>
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
                        <form onSubmit={handleSearch} className="top-search">
                            <select name="type">
                                <option value="movies">Movie</option>
                                <option value="tvShows">TV show</option>
                            </select>
                            <input
                                name="query"
                                type="text"
                                placeholder="Search for a movie, TV Show or celebrity that you are looking for"
                            />
                            <button type="submit">Search</button>
                        </form>
                    )}
                </div>
            </HeaderWrapper>
            {/* END | Header */}
            {searchResult.searchPopup && <SearchResults {...searchResult} />}
        </>
    );
}
