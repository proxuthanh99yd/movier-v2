import PropTypes from "prop-types";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { closePopup } from "../features/searchSlice";
import { images } from "../imageConfig";
SearchResults.propTypes = {
    page: PropTypes.number,
    results: PropTypes.array,
    totalPages: PropTypes.number,
    totalResults: PropTypes.number,
    status: PropTypes.string,
};

export default function SearchResults({
    page,
    results,
    totalPages,
    totalResults,
    status,
}) {
    const dispatch = useDispatch();
    if (status === "loading") {
        return <p>Loading</p>;
    }
    const handleClosePopup = () => {
        dispatch(closePopup());
    };
    return (
        <Wrapper>
            <div className="top-bar">
                <p>
                    Found <span>{totalResults} movies</span> in total
                </p>
                <button onClick={handleClosePopup}>Close</button>
            </div>
            {results.map((movie) => (
                <div key={movie.id} className="movie-item-style-2">
                    <img
                        src={
                            images.secure_base_url +
                            images.poster_sizes[3] +
                            movie.poster_path
                        }
                        alt=""
                    />
                    <div className="mv-item-infor">
                        <h6>
                            <a href="moviesingle.html">
                                {movie.name ||
                                    movie.original_name ||
                                    movie.title ||
                                    movie.original_title}{" "}
                                <span>{movie.first_air_date}</span>
                            </a>
                        </h6>
                        <p className="rate">
                            <i className="ion-android-star"></i>
                            <span>{movie.vote_average}</span> /10
                        </p>
                        <p className="describe">{movie.overview}</p>
                        <p className="run-time">
                            {" "}
                            Run Time: 2h21’ . <span>MMPA: PG-13 </span> .{" "}
                            <span>Release: 1 May 2015</span>
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
            ))}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    color: #fff;
    position: absolute;
    width: 90%;
    top: 190px;
    left: 50%;
    background: #020d18f9;
    transform: translateX(-50%);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    z-index: 9999;
    .top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px;
        padding: 10px;
        border-top: 1px solid #405266;
        border-bottom: 1px solid #405266;
        button {
            color: #fff;
            background: red;
            padding: 6px 18px;
            border-radius: 4px;
            border: transparent;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
        }
    }
    .movie-item-style-2 {
        margin: 20px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        margin-bottom: 30px;
        p {
            font-family: "Nunito", sans-serif;
            font-size: 14px;
            color: #abb7c4;
            font-weight: 300;
            text-transform: none;
            line-height: 24px !important;
            a {
                color: #4280bf;
            }
        }
        img {
            width: 20%;
            border-radius: 5px;
            margin-right: 30px;
            transition: all 0.5s ease-out;
        }
        h6 {
            margin-bottom: 10px;
            font-size: 16px;
            a {
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #ffffff;
                font-weight: bold;
                text-transform: uppercase;
            }
        }
        .rate {
            font-size: 12px;
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
    @media (max-width: 991.98px) {
        top: 180px;
    }
    @media (max-width: 767.98px) {
        top: 120px;
        img {
            display: none;
        }
    }
`;
