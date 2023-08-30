import { styled } from "styled-components";
import PropTypes from "prop-types";
import { images } from "../../imageConfig";
import { Link } from "react-router-dom";
Item.propTypes = {
    id: PropTypes.number,
    poster_path: PropTypes.string,
    original_name: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    genre_ids: PropTypes.array,
    genres: PropTypes.array,
    linkView: PropTypes.string,
};
export default function Item({
    id,
    poster_path: image,
    name,
    original_name: originalName,
    title,
    original_title: originalTitle,
    vote_average: vote,
    linkView,
}) {
    return (
        <Wrapper className="col-lg-4 col-md-6 col-sm-6">
            <div className="movie-item">
                <div className="mv-img">
                    <img
                        src={
                            images.secure_base_url +
                            images.poster_sizes[3] +
                            image
                        }
                        alt=""
                        width="185"
                        height="284"
                    />
                </div>
                <div className="hvr-inner">
                    <Link to={linkView + id}>
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                    </Link>
                </div>
                <div className="title-in">
                    <h6>
                        <Link to={linkView + id}>
                            {name || originalName || title || originalTitle}
                        </Link>
                    </h6>
                    <p>
                        <i className="fa-solid fa-star"></i>
                        <span>{vote}</span> /10
                    </p>
                </div>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    position: relative;
    border-radius: 5px;
    margin-bottom: 15px;
    &:hover {
        img {
            transition: all 0.5s ease-out;
            opacity: 0.25;
            filter: alpha(opacity=25);
        }

        .hvr-inner {
            opacity: 1;
            filter: alpha(opacity=100);
            transition: all 0.5s ease-out;
        }
    }
    .mv-img {
        position: relative;
        img {
            border-radius: 5px;
            width: 100%;
            object-fit: cover;
            transition: all 0.5s ease-out;
        }
        &:after {
            box-shadow: inset -5px -50px 100px -15px #000000;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            content: "";
        }
    }
    .hvr-inner {
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #dd003f;
        padding: 8px 15px;
        max-width: 150px;
        height: 38px;
        text-align: center;
        border-radius: 30px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.5s ease-out;
        a {
            font-family: "Dosis", sans-serif;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            color: #ffffff;
        }
    }
    .title-in {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 30px;
        margin-bottom: 20px;
        bottom: 0;
        left: 0;
        position: absolute;
        p {
            margin-top: 10px;
            color: #fff;
            font-size: 12px;
            margin-bottom: 10px;
            i {
                color: #f5b50a;
                font-size: 22px;
            }
        }
        h6 a {
            font-family: "Dosis", sans-serif;
            font-size: 14px;
            color: #ffffff;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
`;
