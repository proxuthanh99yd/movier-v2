import TabOverview from "./TabOverview/TabOverview";
import TabReviews from "./TabReviews/TabReviews";
import TabCast from "./TabCast/TabCast";
import TabMedia from "./TabMedia/TabMedia";
import { useState } from "react";
import { styled } from "styled-components";
import PropTypes from "prop-types";
MovieTab.propTypes = {
    overview: PropTypes.string,
    crew: PropTypes.array,
    cast: PropTypes.array,
    keywords: PropTypes.array,
    genres: PropTypes.array,
    releaseDate: PropTypes.string,
    runTime: PropTypes.number,
    vote: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.array,
    videos: PropTypes.array,
    reviews: PropTypes.object,
    firstAirDate: PropTypes.string,
    lastAirDate: PropTypes.string,
};
export default function MovieTab({
    overview,
    crew,
    cast,
    keywords,
    genres,
    releaseDate,
    runTime,
    vote,
    name,
    images,
    videos,
    reviews,
    firstAirDate,
    lastAirDate,
}) {
    const [tab, setTab] = useState("overview");
    return (
        <Wrapper>
            <div className="tabs">
                <ul className="tab-links">
                    <li className={tab === "overview" ? "active" : ""}>
                        <button onClick={() => setTab("overview")}>
                            Overview
                        </button>
                    </li>
                    <li className={tab === "reviews" ? "active" : ""}>
                        <button onClick={() => setTab("reviews")}>
                            Reviews
                        </button>
                    </li>
                    <li className={tab === "cast" ? "active" : ""}>
                        <button onClick={() => setTab("cast")}>
                            Cast &amp; Crew
                        </button>
                    </li>
                    <li className={tab === "media" ? "active" : ""}>
                        <button onClick={() => setTab("media")}> Media</button>
                    </li>
                </ul>
                <div className="tab-content">
                    {tab === "overview" && (
                        <TabOverview
                            overview={overview}
                            crew={crew}
                            cast={cast}
                            keywords={keywords}
                            genres={genres}
                            firstAirDate={firstAirDate}
                            lastAirDate={lastAirDate}
                            releaseDate={releaseDate}
                            runTime={runTime}
                            vote={vote}
                            reviews={reviews}
                            images={images}
                        />
                    )}
                    {tab === "reviews" && (
                        <TabReviews reviews={reviews} name={name} />
                    )}
                    {tab === "cast" && (
                        <TabCast crew={crew} cast={cast} name={name} />
                    )}
                    {tab === "media" && (
                        <TabMedia name={name} images={images} videos={videos} />
                    )}
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding-top: 10px;
    .tabs {
        margin-bottom: 60px;
        overflow: hidden;
        .tab-links {
            display: flex;
            padding: 20px 0;
            margin-bottom: 12px;
            li {
                margin-right: 50px;
                button {
                    padding: 0;
                    font-family: "Dosis", sans-serif;
                    color: #abb7c4;
                    font-weight: bold;
                    text-transform: uppercase;
                    background: transparent;
                    border: transparent;
                    font-size: 18px;
                    padding-bottom: 15px;
                    border-bottom: 3px solid transparent;
                    transition: 0.2s ease;
                }
                &.active button {
                    color: #dcf836;
                }
                &.active,
                &:hover {
                    button {
                        color: #dcf836;
                        border-bottom: 3px solid #dcf836;
                    }
                }
            }
        }
        .tab-content {
            padding-left: 15px;
        }
    }
`;
