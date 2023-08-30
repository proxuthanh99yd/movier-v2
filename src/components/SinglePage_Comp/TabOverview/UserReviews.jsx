import { styled } from "styled-components";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

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
export default function UserReviews() {
    const { reviews } = useSelector((state) => state.movie);
    return (
        <>
            <div className="title-hd-sm">
                <h4>User reviews</h4>
                <a href="#" className="time">
                    See All {reviews.results.length} Reviews{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                </a>
            </div>
            {reviews.results.slice(0, 1).map((review) => (
                <ReviewItem key={review.id}>
                    {/* <h3>{review.author|| review.author_details.username}</h3> */}

                    <Star number={review.author_details.rating} />
                    <p className="time">
                        {review.created_at} by{" "}
                        <a href="#">
                            {" "}
                            {review.author || review.author_details.username}
                        </a>
                    </p>
                    <p>{review.content}</p>
                </ReviewItem>
            ))}
        </>
    );
}

const ReviewItem = styled.div`
    h3 {
        font-family: "Dosis", sans-serif;
        font-size: 18px;
        color: #abb7c4;
        font-weight: bold;
        text-transform: none;
        margin-bottom: 15px;
    }
    .no-star {
        color: #f5b50a;
        margin-bottom: 10px;
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
`;
