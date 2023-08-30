import { NavLink, Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { Breadcrumb } from "../components";
import { linkTo } from "../routes";

export default function AccountLayout() {
    return (
        <>
            <Breadcrumb title={"EDWARD KENNEDY’S PROFILE"} />
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="user-information">
                                <div className="user-img">
                                    <a href="#">
                                        <img
                                            src="../images/uploads/user-img.png"
                                            alt=""
                                        />
                                        <br />
                                    </a>
                                    <a href="#" className="redbtn">
                                        Change avatar
                                    </a>
                                </div>
                                <div className="user-fav">
                                    <p>Account Details</p>
                                    <ul>
                                        <li>
                                            <NavLink
                                                className="profile"
                                                to={linkTo.account}
                                            >
                                                Profile
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={linkTo.moviesFavorite}>
                                                Favorite movies
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={linkTo.moviesRated}>
                                                Rated movies
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="user-fav">
                                    <p>Others</p>
                                    <ul>
                                        <li>
                                            <a href="#">Change password</a>
                                        </li>
                                        <li>
                                            <a href="#">Log out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
const Layout = styled.div`
    background-color: #020d18;
    padding: 75px 0;
    a {
        transition: all 0.3s ease-out;
        color: #666;
        border-bottom: 1px solid dotted;
    }
    p {
        margin-bottom: 10px;
        font-family: "Nunito", sans-serif;
        font-size: 14px;
        color: #abb7c4;
        font-weight: 300;
        text-transform: none;
        line-height: 24px !important;
    }
    .user-information {
        position: relative;
        z-index: 10;
        border: 3px solid #0f2133;
        margin-right: 30px;
        margin-top: -200px;
        background-color: #020d18;
        border-radius: 5px;
        .user-img {
            text-align: center;
            margin-bottom: 30px;
            padding: 30px 0 20px 0;
            .redbtn {
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: bold;
                text-transform: uppercase;
                background-color: #dd003f;
                color: #ffffff;
                padding: 13px 25px;
                border-radius: 5px;
            }
            img {
                margin-bottom: 30px;
            }
        }
        .user-fav {
            border-top: 1px solid #0f2133;
            padding: 25px 0;
            p {
                padding-left: 25px;
            }
            ul {
                padding: 0 25px;
                li {
                    margin-bottom: 15px;
                    a {
                        font-family: "Dosis", sans-serif;
                        font-size: 14px;
                        color: #ffffff;
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                    a.active {
                        color: #dcf836;
                    }
                    .profile.active {
                        color: #ff9900;
                    }
                }
            }
        }
    }
`;
