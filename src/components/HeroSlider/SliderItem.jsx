import PropTypes from "prop-types";
import { styled } from "styled-components";
import { images } from "../../imageConfig";
import { Link } from "react-router-dom";
import { linkTo } from "../../routes";
const hexCode = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];
const randomColor = () => {
    let randomColor = "#";
    for (let x = 0; x < 6; x++) {
        let index = Math.floor(Math.random() * 16);
        let value = hexCode[index];
        randomColor += value;
    }
    return randomColor;
};

SliderItem.propTypes = {
    id: PropTypes.number,
    poster_path: PropTypes.string,
    original_name: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    genre_ids: PropTypes.array,
    genres: PropTypes.array,
};

export default function SliderItem({
    id,
    poster_path: image,
    name,
    original_name: originalName,
    title,
    original_title: originalTitle,
    vote_average: vote,
    genre_ids: genreIds,
    genres,
}) {
    return (
        <Wrapper>
            <div className="mv-img">
                <img
                    src={
                        images.secure_base_url + images.poster_sizes[3] + image
                    }
                    alt=""
                />
            </div>
            <div className="title-in">
                <div className="cate">
                    {genres.map(({ id, name }) => {
                        if (id === genreIds[0] || id === genreIds[1]) {
                            return (
                                <span
                                    key={id}
                                    style={{ backgroundColor: randomColor() }}
                                >
                                    {name}
                                </span>
                            );
                        }
                    })}
                </div>
                <h6>
                    <Link to={linkTo.movie + id}>
                        {name || originalName || title || originalTitle}
                    </Link>
                </h6>
                <p className="star">
                    <i className="fa-solid fa-star"></i>
                    <span>{vote.toFixed(1)}</span> /10
                </p>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    /* min-width: 285px;
    min-height: 437px; */
    position: relative;
    .title-in {
        left: 10%;
        bottom: 10px;
        position: absolute;
        text-align: left;
        .cate {
            margin-bottom: 15px;
            span {
                margin-right: 10px;
                padding: 3px 5px;
                border-radius: 3px;
                font-family: "Dosis", sans-serif;
                font-size: 12px;
                color: #ffffff;
                font-weight: 700;
                text-transform: uppercase;
            }
        }
        h6 a {
            font-size: 18px;
            font-family: "Dosis", sans-serif;
            color: #ffffff;
            font-weight: bold;
            text-transform: uppercase;
            transition: color 0.3s ease;
            &:hover {
                color: #dcf836;
            }
        }
        .star {
            margin-top: 10px;
            color: #fff;
            font-size: 12px;
            margin-bottom: 10px;
            i {
                color: #f5b50a;
                font-size: 22px;
            }
            span {
                font-weight: 400;
                font-size: 18px;
            }
        }
    }
    .mv-img {
        img {
            border-radius: 5px;
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
    @media (max-width: 575.98px) {
        .mv-img {
            img {
                border-radius: 5px;
                max-width: 285px;
                max-height: 437px;
                object-fit: cover;
            }
        }
    }
`;
