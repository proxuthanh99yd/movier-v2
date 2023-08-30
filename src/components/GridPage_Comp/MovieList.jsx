import { styled } from "styled-components";
import PropTypes from "prop-types";
import { images } from "../../imageConfig";
import { Link } from "react-router-dom";
import { linkTo } from "../../routes";
MovieList.propTypes = {
    grid: PropTypes.bool,
    movies: PropTypes.array,
    path: PropTypes.string,
};
export default function MovieList({ path, grid, movies }) {
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
                                <p className="rate">
                                    <i className="fa-solid fa-star"></i>
                                    <span>{vote}</span> /10
                                </p>
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
`;
