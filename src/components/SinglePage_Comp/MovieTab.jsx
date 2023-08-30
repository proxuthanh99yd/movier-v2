import TabOverview from "./TabOverview/TabOverview";
import TabReviews from "./TabReviews/TabReviews";
import TabCast from "./TabCast/TabCast";
import TabMedia from "./TabMedia/TabMedia";
import { useState } from "react";
import { styled } from "styled-components";
import PropTypes from "prop-types";
MovieTab.propTypes = {
    movie: PropTypes.object,
};
export default function MovieTab({ movie }) {
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
                    {tab === "overview" && <TabOverview movie={movie} />}
                    {tab === "reviews" && (
                        <TabReviews
                            name={
                                movie?.belongs_to_collection?.name ||
                                movie.name ||
                                movie.original_name ||
                                movie.title ||
                                movie.original_title
                            }
                        />
                    )}
                    {tab === "cast" && (
                        <TabCast
                            name={
                                movie.name ||
                                movie.original_name ||
                                movie.title ||
                                movie.original_title
                            }
                        />
                    )}
                    {tab === "media" && <TabMedia />}
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
