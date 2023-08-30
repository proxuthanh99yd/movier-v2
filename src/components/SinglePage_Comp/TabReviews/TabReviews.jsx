import { styled } from "styled-components";
import PropTypes from "prop-types";
import { images } from "../../../imageConfig";
import { useSelector } from "react-redux";
TabReviews.propTypes = {
    name: PropTypes.string,
};
Star.propTypes = {
    number: PropTypes.number,
};
function Star({ number }) {
    return (
        <div className="no-star">
            {Array.from({ length: 10 }, (_, i) => {
                if (number <= i) {
                    return <i key={i} className="fa-regular fa-star"></i>;
                } else {
                    return <i key={i} className="fa-solid fa-star"></i>;
                }
            })}
        </div>
    );
}
export default function TabReviews({ name }) {
    const { reviews } = useSelector((state) => state.movie);
    return (
        <Reviews>
            <div className="row">
                <div className="rv-hd">
                    <div className="div">
                        <h3>Related Movies To</h3>
                        <h2>{name}</h2>
                    </div>
                    <a href="#" className="redbtn">
                        Write Review
                    </a>
                </div>
                <div className="topbar-filter">
                    <p>
                        Found <span>{reviews.results.length} reviews</span> in
                        total
                    </p>
                    <label>Filter by:</label>
                    <select>
                        <option value="popularity">
                            Popularity Descending
                        </option>
                        <option value="popularity">Popularity Ascending</option>
                        <option value="rating">Rating Descending</option>
                        <option value="rating">Rating Ascending</option>
                        <option value="date">Release date Descending</option>
                        <option value="date">Release date Ascending</option>
                    </select>
                </div>
                {reviews.results.map((review) => (
                    <div key={review.id} className="mv-user-review-item">
                        <div className="user-infor">
                            <img
                                src={
                                    images.secure_base_url +
                                    images.profile_sizes[1] +
                                    review.author_details.avatar_path
                                }
                                alt={
                                    review.author ||
                                    review.author_details.username
                                }
                            />
                            <div>
                                <h3>Best Marvel movie in my opinion</h3>
                                <Star number={review.author_details.rating} />
                                <p className="time">
                                    {review.created_at} by{" "}
                                    <a href="#">
                                        {review.author ||
                                            review.author_details.username}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <p>{review.content}</p>
                    </div>
                ))}
                <div className="topbar-filter">
                    <label>Reviews per page:</label>
                    <select>
                        <option value="range">5 Reviews</option>
                        <option value="saab">10 Reviews</option>
                    </select>
                    <div className="pagination2">
                        <span>Page 1 of 6:</span>
                        <a className="active" href="#">
                            1
                        </a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">
                            <i className="ion-arrow-right-b" />
                        </a>
                    </div>
                </div>
            </div>
        </Reviews>
    );
}

const Reviews = styled.div`
    p {
        font-family: "Nunito", sans-serif;
        font-size: 14px;
        color: #abb7c4;
        font-weight: 300;
        text-transform: none;
        line-height: 24px !important;
    }
    .rv-hd {
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h3 {
        font-family: "Dosis", sans-serif;
        font-size: 18px;
        color: #abb7c4;
        font-weight: bold;
        text-transform: none;
        margin-bottom: 15px;
    }
    h2 {
        font-family: "Dosis", sans-serif;
        font-size: 18px;
        color: #4280bf;
        font-weight: bold;
        text-transform: none;
        font-size: 24px;
        margin-bottom: 30px;
    }
    .redbtn {
        font-family: "Dosis", sans-serif;
        font-size: 14px;
        color: #abb7c4;
        font-weight: bold;
        text-transform: uppercase;
        background-color: #dd003f;
        color: #ffffff;
        padding: 13px 25px;
        border-radius: 30px;
    }
    .topbar-filter {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        border-top: 1px solid #405266;
        border-bottom: 1px solid #405266;
        p {
            padding-right: 200px;
            margin-bottom: 0;
            span {
                color: #4280bf;
            }
        }
        label,
        select {
            font-family: "Nunito", sans-serif;
            font-size: 14px;
            color: #abb7c4;
            font-weight: 300;
            text-transform: none;
        }
        select {
            width: 215px;
            background: no-repeat right 20px center;
            border-left: 1px solid #405266;
            border-right: 1px solid #405266;
            border-top: none;
            border-bottom: none;
            color: #ffffff;
            font-weight: 400;
            option {
                background-color: #020d18;
            }
        }
    }
    .mv-user-review-item {
        border-bottom: 1px solid #233a50;
        padding: 20px 20px 20px 0;

        .user-infor {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            align-items: inherit;
            img {
                margin-right: 30px;
                border-radius: 3px;
                width: 42px;
                height: 42px;
                object-fit: cover;
            }
            .no-star {
                color: #f5b50a;
            }
            .time {
                font-family: "Nunito", sans-serif;
                font-size: 12px;
                color: #abb7c4;
                font-weight: 300;
                text-transform: none;
                a {
                    color: #4280bf;
                }
            }
        }
    }
`;
