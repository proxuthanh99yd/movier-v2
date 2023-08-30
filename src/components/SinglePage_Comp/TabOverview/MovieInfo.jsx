import { styled } from "styled-components";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";

MovieInfo.propTypes = {
    movie: PropTypes.object,
};

export default function MovieInfo({ movie }) {
    const { crew, cast, keywords } = useSelector((state) => state.movie);
    return (
        <>
            <SbIt>
                <h6>Director: </h6>
                <p>
                    {crew.map((director) => {
                        if (
                            director?.jobs &&
                            director?.jobs[0].job === "Director"
                        ) {
                            return (
                                <a key={director.id} href="#">
                                    {director.name || director.original_name}
                                </a>
                            );
                        } else if (director.job === "Director") {
                            return (
                                <a key={director.id} href="#">
                                    {director.name || director.original_name}
                                </a>
                            );
                        }
                    })}
                </p>
            </SbIt>
            <SbIt>
                <h6>Writer: </h6>
                <p>
                    {crew.map((director) => {
                        if (
                            director?.jobs &&
                            director?.jobs[0].job === "Writer"
                        ) {
                            return (
                                <a key={director.id} href="#">
                                    {director.name || director.original_name}
                                </a>
                            );
                        } else if (director.job === "Writer") {
                            return (
                                <a key={director.id} href="#">
                                    {director.name || director.original_name}
                                </a>
                            );
                        }
                    })}
                </p>
            </SbIt>
            <SbIt>
                <h6>Stars: </h6>
                <p>
                    {cast.slice(0, 5).map((cast) => (
                        <a key={cast.id} href="#">
                            {cast.name || cast.original_name},{" "}
                        </a>
                    ))}
                </p>
            </SbIt>
            <SbIt>
                <h6>Genres:</h6>
                <p>
                    {movie.genres.map((genre, index) => {
                        if (index === movie.genres.length - 1) {
                            return (
                                <a key={genre.id} href="#">
                                    {genre.name}
                                </a>
                            );
                        }
                        return (
                            <a key={genre.id} href="#">
                                {genre.name},
                            </a>
                        );
                    })}
                </p>
            </SbIt>
            {movie.first_air_date && (
                <SbIt>
                    <h6>First Air Date</h6>
                    <p>{movie.first_air_date}</p>
                </SbIt>
            )}
            <SbIt>
                <h6>
                    {movie.release_date ? "Release Date:" : "Last Air Date"}
                </h6>
                <p>{movie.release_date || movie.last_air_date}</p>
            </SbIt>
            <SbIt>
                <h6>Run Time:</h6>
                <p>{movie.runtime} min</p>
            </SbIt>
            <SbIt>
                <h6>MMPA Rating:</h6>
                <p>{movie.vote_count}</p>
            </SbIt>
            <SbIt>
                <h6>Plot Keywords:</h6>
                <p className="tags">
                    {keywords.map((keyword) => (
                        <span key={keyword.id} className="time">
                            <a href="#">
                                {keyword.name || keyword.original_name}
                            </a>
                        </span>
                    ))}
                </p>
            </SbIt>
        </>
    );
}

const SbIt = styled.div`
    margin-bottom: 30px;
    margin-left: 30px;
    h6 {
        font-family: "Dosis", sans-serif;
        font-size: 14px;
        color: #abb7c4;
        font-weight: bold;
        text-transform: capitalize;
        margin-bottom: 10px;
    }
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
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        .time {
            font-family: "Nunito", sans-serif;
            font-size: 12px;
            color: #abb7c4;
            font-weight: 300;
            text-transform: none;
            a {
                background-color: #233a50;
                color: #abb7c4;
                padding: 2px 5px;
                border-radius: 2px;
            }
        }
    }
`;
