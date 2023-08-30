import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { useEffect } from "react";
import {
    checkIsFavorite,
    fetchAddMovieFavorite,
    fetchRemoveMovieFavorite,
} from "../../features/moviesFavoriteSlice";

export default function SocialBtn() {
    const { isFavorite } = useSelector((state) => state.moviesFavorite);
    const { id } = useSelector((state) => state.movie.movie);
    const dispatch = useDispatch();
    const handleAddFavorite = (e) => {
        e.preventDefault();
        dispatch(fetchAddMovieFavorite(id));
    };
    const handleRemoveFavorite = (e) => {
        e.preventDefault();
        dispatch(fetchRemoveMovieFavorite(id));
    };
    useEffect(() => {
        dispatch(checkIsFavorite(id));
    }, []);
    return (
        <Wrapper>
            {isFavorite ? (
                <a
                    href="#"
                    onClick={handleRemoveFavorite}
                    className="parent-btn active"
                >
                    <span>
                        <i className="fa-solid fa-circle-xmark"></i>
                    </span>{" "}
                    Favored
                </a>
            ) : (
                <a href="#" onClick={handleAddFavorite} className="parent-btn">
                    <span>
                        <i className="fa-solid fa-heart"></i>
                    </span>{" "}
                    Add to Favorite
                </a>
            )}
            <div className="hover-btn">
                <a href="#" className="parent-btn">
                    <span>
                        <i className="fa-solid fa-share-nodes"></i>
                    </span>
                    share
                </a>
                <div className="hvr-item">
                    <a href="#" className="hvr-grow">
                        <i className="fa-brands fa-square-facebook"></i>
                    </a>
                    <a href="#" className="hvr-grow">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="hvr-grow">
                        <i className="fa-brands fa-square-google-plus"></i>
                    </a>
                    <a href="#" className="hvr-grow">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    a.parent-btn {
        font-family: "Dosis", sans-serif;
        font-size: 14px;
        color: #dd003f;
        font-weight: bold;
        text-transform: uppercase;
        margin-right: 35px;
        &:hover span {
            background: #dd003f;
            i {
                color: #fff;
            }
        }
        i {
            font-size: 16px;
        }
        span {
            display: inline-flex;
            width: 40px;
            height: 40px;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid #dd003f;
            margin-right: 10px;
            transition: 0.3s ease;
        }
    }
    a.parent-btn.active {
        span {
            background: #dd003f;
            i {
                color: #fff;
            }
        }
    }
    .hover-btn {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .hvr-item {
            position: relative;
            opacity: 0;
            filter: alpha(opacity=0);
            transition: all 0.5s ease-out;
            padding: 12px;
            background-color: #dd003f;
            border-radius: 3px;
            &:before {
                position: absolute;
                content: "";
                width: 0px;
                height: 0px;
                left: -10px;
                border-bottom: 10px solid transparent;
                border-top: 10px solid transparent;
                border-right: 10px solid #dd003f;
            }
            a {
                color: #fff;
                margin-right: 10px;
                cursor: pointer;
            }
            .hvr-grow {
                display: inline-block;
                vertical-align: middle;
                transform: perspective(1px) translateZ(0);
                box-shadow: 0 0 1px transparent;
                transition-duration: 0.3s;
                transition-property: transform;
            }
        }
        &:hover .hvr-item {
            opacity: 1;
            filter: alpha(opacity=100);
            transition: all 0.5s ease-out;
        }
    }
`;
