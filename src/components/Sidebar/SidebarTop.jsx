import { styled } from "styled-components";
import { images } from "../../imageConfig";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { linkTo } from "../../routes";

SidebarTop.propTypes = { moviesFavorite: PropTypes.array };

export default function SidebarTop({ moviesFavorite }) {
    return (
        <Wrapper>
            <div className="section-title">
                <h2>Movies Favorite</h2>
            </div>
            <div className="gallery">
                {moviesFavorite.map((item) => (
                    <div key={item.id} className="gallery-item">
                        <img
                            src={
                                images.secure_base_url +
                                images.backdrop_sizes[1] +
                                item.backdrop_path
                            }
                            alt=""
                        />
                        <span className="star">
                            <i className="fa-solid fa-star"></i>
                            <span>{item.vote_average.toFixed(1)}</span> /10
                        </span>
                        <h5>
                            <Link to={linkTo.movie + item.id}>
                                {item.title || item.original_title}
                            </Link>
                        </h5>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    margin-bottom: 80px;

    .section-title {
        margin-bottom: 30px;
        color: #ffffff;
        font-weight: 600;
        line-height: 21px;
        text-transform: uppercase;
        padding-left: 20px;
        position: relative;

        h2 {
            font-family: "Dosis", sans-serif;
            font-size: 24px;
            color: #ffffff;
            font-weight: bold;
            text-transform: uppercase;
        }

        &:after {
            position: absolute;
            left: 0;
            top: -6px;
            height: 32px;
            width: 4px;
            background: #dcf836;
            content: "";
        }
    }

    .gallery {
        .gallery-item {
            margin-bottom: 20px;
            height: 190px;
            position: relative;

            img {
                border-radius: 5px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .star {
                left: 10px;
                top: 10px;
                position: absolute;
                display: flex;
                align-items: center;
                color: #fff;

                span {
                    margin-left: 5px;
                    font-size: 12px;
                }

                i {
                    color: #f5b50a;
                }
            }

            h5 {
                position: absolute;
                bottom: 10px;
                left: 20px;

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
            }
        }
    }
`;
