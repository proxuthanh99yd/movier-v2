import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { linkTo } from "../../routes";
import PropTypes from "prop-types";
import { images } from "../../imageConfig";

Breadcrumb.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
};
export default function Breadcrumb({ title, image }) {
    return (
        <Wrapper
            style={{
                backgroundImage: `url(${
                    image
                        ? images.secure_base_url +
                          images.backdrop_sizes[3] +
                          image
                        : "../images/uploads/ft-bg.jpg"
                })`,
            }}
        >
            <div className="hero common-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct">
                                <h1> {title} </h1>
                                <ul className="breadcrumb">
                                    <li className="active">
                                        <Link to={linkTo.home}>Home</Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="fa-solid fa-caret-right"></i>{" "}
                                        {title}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 445px;
    height: 385px;

    .hero-ct {
        padding-top: 170px;
        h1 {
            font-family: "Dosis", sans-serif;
            font-size: 36px;
            color: #ffffff;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
        .breadcrumb {
            li.active a {
                color: #4280bf;
            }
            a,
            li {
                display: inline-block;
                font-family: "Nunito", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: 300;
                text-transform: uppercase;
            }
            i {
                margin-left: 15px;
                margin-right: 15px;
            }
        }
    }
`;
