import { styled } from "styled-components";
import PropTypes from "prop-types";

MovieInfo.propTypes = {
    crew: PropTypes.array,
    cast: PropTypes.array,
    keywords: PropTypes.array,
    genres: PropTypes.array,
    releaseDate: PropTypes.string,
    runTime: PropTypes.number,
    vote: PropTypes.number,
    firstAirDate: PropTypes.string,
    lastAirDate: PropTypes.string,
};

export default function MovieInfo({
    crew,
    cast,
    keywords,
    genres,
    releaseDate,
    runTime,
    vote,
    firstAirDate,
    lastAirDate,
}) {
    const directors = crew.filter((director) => {
        if (director?.jobs && director?.jobs[0].job === "Director") {
            return { ...director };
        } else if (director?.job === "Director") {
            return { ...director };
        }
    });
    const writers = crew.filter((writer) => {
        if (writer?.jobs && writer?.jobs[0].job === "Writer") {
            return writer;
        } else if (writer?.job === "Writer") {
            return writer;
        }
    });
    return (
        <>
            <SbIt>
                <h6>Director: </h6>
                <p>
                    {directors?.slice(0, 3).map((director) => (
                        <a key={director.id} href="#">
                            {director.name}
                        </a>
                    ))}
                </p>
            </SbIt>
            <SbIt>
                <h6>Writer: </h6>
                <p>
                    {writers?.slice(0, 3).map((writer) => (
                        <a key={writer.id} href="#">
                            {writer.name}
                        </a>
                    ))}
                </p>
            </SbIt>
            <SbIt>
                <h6>Stars: </h6>
                <p>
                    {cast?.slice(0, 5).map((cast) => (
                        <a key={cast.id} href="#">
                            {cast.name},{" "}
                        </a>
                    ))}
                </p>
            </SbIt>
            <SbIt>
                <h6>Genres:</h6>
                <p>
                    {genres?.map((genre, index) => {
                        if (index === genres.length - 1) {
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
            {releaseDate && (
                <SbIt>
                    <h6>Release Date:</h6>
                    <p>{releaseDate}</p>
                </SbIt>
            )}
            {firstAirDate && (
                <SbIt>
                    <h6>First Air Date:</h6>
                    <p>{firstAirDate}</p>
                </SbIt>
            )}
            {lastAirDate && (
                <SbIt>
                    <h6>Last Air Date:</h6>
                    <p>{lastAirDate}</p>
                </SbIt>
            )}
            <SbIt>
                <h6>Run Time:</h6>
                <p>{runTime} min</p>
            </SbIt>
            <SbIt>
                <h6>MMPA Rating:</h6>
                <p>{vote}</p>
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
