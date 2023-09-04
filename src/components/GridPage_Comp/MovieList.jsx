import { styled } from "styled-components";
import PropTypes from "prop-types";
import { images } from "../../imageConfig";
import { Link } from "react-router-dom";
import { linkTo } from "../../routes";
MovieList.propTypes = {
    grid: PropTypes.bool,
    movies: PropTypes.array,
    path: PropTypes.string,
    itemsLoading: PropTypes.string,
};
export default function MovieList({
    itemsLoading = "loading",
    path,
    grid,
    movies,
}) {
    if (itemsLoading === "loading") {
        return (
            <Wrapper>
                {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="cards">
                        <div className="card-loading">
                            <div className="bars-common bar-one"></div>
                            <div className="bars-common bar-two"></div>
                            <div className="bars-common bar-three"></div>
                            <div className="squares-common square-one"></div>
                            <div className="squares-common square-two"></div>
                        </div>
                    </div>
                ))}
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            {grid &&
                movies.map(
                    ({
                        id,
                        poster_path: image,
                        name,
                        original_name: originalName,
                        title,
                        original_title: originalTitle,
                        vote_average: vote,
                        rating,
                    }) => (
                        <div
                            key={id}
                            className="movie-item-style-2 movie-item-style-1"
                        >
                            <img
                                src={
                                    images.secure_base_url +
                                    images.poster_sizes[3] +
                                    image
                                }
                                alt={name}
                            />
                            <div className="hvr-inner">
                                <Link
                                    to={
                                        (path === "tvShows" &&
                                            linkTo.tvShow + id) ||
                                        (path === "movies" && linkTo.movie + id)
                                    }
                                >
                                    {" "}
                                    Read more{" "}
                                    <i className="ion-android-arrow-dropright" />{" "}
                                </Link>
                            </div>
                            <div className="mv-item-infor">
                                <h6>
                                    <a href="#">
                                        {name ||
                                            title ||
                                            originalName ||
                                            originalTitle}
                                    </a>
                                </h6>
                                {!rating && (
                                    <p className="rate">
                                        <i className="fa-solid fa-star"></i>
                                        <span>{vote.toFixed(0)}</span> /10
                                    </p>
                                )}
                                {rating && (
                                    <p className="rate">
                                        <i className="fa-solid fa-star"></i>
                                        <span>{rating.toFixed(0)}</span> /10
                                        Your rating
                                    </p>
                                )}
                            </div>
                        </div>
                    )
                )}
            {!grid &&
                movies.map(
                    ({
                        id,
                        poster_path: image,
                        name,
                        original_name: originalName,
                        title,
                        original_title: originalTitle,
                        vote_average: vote,
                        overview,
                        release_date: date,
                    }) => (
                        <div key={id} className="movie-item-style-2">
                            <img
                                src={
                                    images.secure_base_url +
                                    images.poster_sizes[1] +
                                    image
                                }
                                alt={name}
                            />
                            <div className="mv-item-infor">
                                <h6>
                                    <Link
                                        to={
                                            (path === "tvShows" &&
                                                linkTo.tvShow + id) ||
                                            (path === "movies" &&
                                                linkTo.movie + id)
                                        }
                                    >
                                        {name ||
                                            title ||
                                            originalName ||
                                            originalTitle}
                                        <span> ({date})</span>
                                    </Link>
                                </h6>
                                <p className="rate">
                                    <i className="fa-solid fa-star"></i>
                                    <span>{vote}</span> /10
                                </p>
                                <p className="describe">{overview}</p>
                                <p className="run-time">
                                    {" "}
                                    Run Time: 2h21’ . <span>
                                        MMPA: PG-13{" "}
                                    </span>{" "}
                                    . <span>Release: 1 May 2015</span>
                                </p>
                                <p>
                                    Director: <a href="#">Joss Whedon</a>
                                </p>
                                <p>
                                    Stars: <a href="#">Robert Downey Jr.,</a>{" "}
                                    <a href="#">Chris Evans,</a>{" "}
                                    <a href="#"> Chris Hemsworth</a>
                                </p>
                            </div>
                        </div>
                    )
                )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: inherit;
    margin-right: -30px;
    p {
        font-family: "Nunito", sans-serif;
        font-size: 14px;
        color: #abb7c4;
        font-weight: 300;
        text-transform: none;
        line-height: 24px !important;
    }
    .movie-item-style-2 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        margin-bottom: 30px;
        img {
            border-radius: 5px;
            margin-right: 30px;
            transition: all 0.5s ease-out;
        }
        .mv-item-infor {
            .rate {
                color: #ffffff;
                font-size: 12px;
                i {
                    color: #f5b50a;
                    font-size: 22px;
                    margin-right: 5px;
                }
                span {
                    font-size: 16px;
                    font-weight: 400;
                }
            }
            h6 {
                margin-bottom: 10px;
                a {
                    font-family: "Dosis", sans-serif;
                    font-size: 14px;
                    color: #ffffff;
                    font-weight: bold;
                    text-transform: uppercase;
                    transition: color 0.3s ease;
                    &:hover {
                        color: #dcf836;
                    }
                }
                span {
                    color: #abb7c4;
                }
            }
            p {
                margin-bottom: 0;
                a {
                    color: #4280bf;
                }
            }
            .describe {
                padding-bottom: 25px;
                border-bottom: 1px solid #405266;
                margin-bottom: 25px;
            }
            .run-time span {
                margin-left: 15px;
                margin-right: 15px;
            }
        }
    }
    .movie-item-style-1 {
        display: flex;
        flex-direction: column;
        align-items: inherit;
        width: 170px;
        position: relative;
        margin-right: 23px;
        img {
            margin-right: 0;
            margin-bottom: 15px;
        }
        .hvr-inner {
            position: absolute;
            top: 0;
            background-color: #dd003f;
            padding: 8px 15px;
            text-align: center;
            margin-left: 30px;
            margin-top: 110px;
            border-radius: 30px;
            cursor: pointer;
            opacity: 0;
            filter: alpha(opacity=0);
            transition: all 0.5s ease-out;
            a {
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: bold;
                text-transform: uppercase;
                color: #ffffff;
            }
        }
        &:hover {
            img {
                opacity: 0.5;
                filter: alpha(opacity=50);
            }
            .hvr-inner {
                opacity: 1;
                filter: alpha(opacity=100);
            }
            h6 a {
                color: #dcf836;
            }
        }
    }
    @media (max-width: 991px) {
        .movie-item-style-2 {
            margin-right: 10px;
        }
        .movie-item-style-1 {
            .hvr-inner {
                margin-left: 0;
            }
        }
    }
    @media (max-width: 767px) {
        max-width: 200px;
        margin: 0 auto;
        .movie-item-style-1 {
            margin-left: 15px;
            max-width: 170px;
        }
        .movie-item-style-2 {
            display: flex;
            flex-direction: column;
            img {
                margin-right: 0;
                margin-bottom: 15px;
            }
            .mv-item-infor {
                max-width: 180px;
                margin: 0 auto;
            }
        }
    }

    .cards {
        margin-right: 23px;
        margin-bottom: 30px;
        border-radius: 5px;
        position: relative;
        height: 323px;
        width: 170px;
        overflow: hidden;
        background: #0b1a2a;
        /* background: linear-gradient(135deg, #0d1019 0%, #161b29 100%); */
        .card-loading {
            width: 20vw;
            height: 20vw;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            margin: auto;
            overflow: hidden;
            .bars-common {
                height: 4vw;
                max-height: 100%;
                width: 1vw;
                margin: auto;
                position: absolute;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            }

            .bar-one {
                left: 0;
                right: 4vw;
                top: 0;
                bottom: 0;
                box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                    inset 0 0 0.5vw 0 cyan;
            }

            .bar-two {
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                    inset 0 0 0.5vw 0 cyan;
            }

            .bar-three {
                left: 4vw;
                right: 0;
                top: 0;
                bottom: 0;
                box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                    inset 0 0 0.5vw 0 cyan;
            }

            /* Rotating squares style */

            .squares-common {
                height: 8vw;
                max-height: 100%;
                width: 8vw;
                margin: auto;
                position: absolute;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                border-radius: 0%;
            }

            .square-one {
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                    inset 0 0 0.5vw 0 cyan;
            }

            .square-two {
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                    inset 0 0 0.5vw 0 cyan;
            }

            /* Animation */
            /* Compressing bars animation */

            .bar-one {
                animation: barOne 1s 0.33s ease infinite;
                -moz-animation: barOne 1s 0.33s ease infinite;
                /* Firefox */
                -webkit-animation: barOne 1s 0.33s ease infinite;
                /* Safari and Chrome */
                -o-animation: barOne 1s 0.33s ease infinite;
                /* Opera */
            }

            @keyframes barOne {
                0%,
                100% {
                    box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                        inset 0 0 0.5vw 0 cyan;
                }
                50% {
                    height: 2.5vw;
                    box-shadow: 0 0 0 0.1vw magenta, 0 0 1vw 0 magenta,
                        inset 0 0 0.5vw 0 magenta;
                }
            }

            .bar-two {
                animation: barTwo 1s 0.66s ease infinite;
                -moz-animation: barTwo 1s 0.66s ease infinite;
                /* Firefox */
                -webkit-animation: barTwo 1s 0.66s ease infinite;
                /* Safari and Chrome */
                -o-animation: barTwo 1s 0.66s ease infinite;
                /* Opera */
            }

            @keyframes barTwo {
                0%,
                100% {
                    box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                        inset 0 0 0.5vw 0 cyan;
                }
                50% {
                    height: 2.5vw;
                    box-shadow: 0 0 0 0.1vw magenta, 0 0 1vw 0 magenta,
                        inset 0 0 0.5vw 0 magenta;
                }
            }

            .bar-three {
                animation: barThree 1s 0.99s ease infinite;
                -moz-animation: barThree 1s 0.99s ease infinite;
                /* Firefox */
                -webkit-animation: barThree 1s 0.99s ease infinite;
                /* Safari and Chrome */
                -o-animation: barThree 1s 0.99s ease infinite;
                /* Opera */
            }

            @keyframes barThree {
                0%,
                100% {
                    box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                        inset 0 0 0.5vw 0 cyan;
                }
                50% {
                    height: 2.5vw;
                    box-shadow: 0 0 0 0.1vw magenta, 0 0 1vw 0 magenta,
                        inset 0 0 0.5vw 0 magenta;
                }
            }

            /* Rotating squares animation */

            .square-one {
                animation: squareOne 4s 0.99s ease infinite;
                -moz-animation: squareOne 4s 0.99s ease infinite;
                /* Firefox */
                -webkit-animation: squareOne 4s 0.99s ease infinite;
                /* Safari and Chrome */
                -o-animation: squareOne 4s 0.99s ease infinite;
                /* Opera */
            }

            @keyframes squareOne {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(-180deg);
                }
            }

            .square-two {
                animation: squareTwo 4s 0.99s ease infinite;
                -moz-animation: squareTwo 4s 0.99s ease infinite;
                /* Firefox */
                -webkit-animation: squareTwo 4s 0.99s ease infinite;
                /* Safari and Chrome */
                -o-animation: squareTwo 4s 0.99s ease infinite;
                /* Opera */
            }

            @keyframes squareTwo {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(180deg);
                }
            }
        }
    }
`;
