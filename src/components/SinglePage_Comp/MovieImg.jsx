import { styled } from "styled-components";
import { images } from "../../imageConfig";
import PropTypes from "prop-types";
import { useState } from "react";
import ReactPlayer from "react-player";

MovieImg.propTypes = {
    image: PropTypes.string,
    video: PropTypes.string,
};

export default function MovieImg({ image, video }) {
    const [popup, setPopup] = useState(false);
    const handlePopup = (e) => {
        e.preventDefault();
        setPopup((curr) => !curr);
    };
    return (
        <Wrapper>
            <img
                src={images.secure_base_url + images.poster_sizes[5] + image}
                alt=""
            />
            <div className="movie-btn">
                <div className="btn-transform">
                    <div>
                        <a href="#" onClick={handlePopup} className="item">
                            {" "}
                            <i className="ion-play" /> Watch Trailer
                        </a>
                    </div>
                </div>
            </div>
            {popup && (
                <>
                    <div
                        onClick={() => setPopup(false)}
                        className="overlay"
                    ></div>
                    <div className="popup">
                        <button
                            onClick={() => setPopup(false)}
                            className="close-btn"
                        >
                            <i className="fa-regular fa-circle-xmark"></i>
                        </button>
                        <ReactPlayer
                            className="popup-video"
                            playing
                            controls={true}
                            width="100%"
                            height="100%"
                            url={`https://www.youtube.com/watch?v=${video}`}
                        />
                    </div>
                </>
            )}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    position: relative;
    top: 0px;
    margin-right: 30px;
    margin-bottom: 60px;
    img {
        width: 100%;
        border-radius: 5px 5px 0 0;
    }
    .movie-btn {
        margin-top: -2px;
        text-align: center;
        padding: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #07101a;
        border: 3px solid #0c1c2c;
        border-top: transparent;
    }
    .btn-transform {
        a {
            display: block;
            font-family: "Dosis", sans-serif;
            font-size: 14px;
            color: #abb7c4;
            font-weight: bold;
            text-transform: uppercase;
            background-color: #dd003f;
            color: #ffffff;
            padding: 13px 25px;
            border-radius: 5px;
        }
    }
    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80vw;
        height: 80vh;
        background: #555;
        z-index: 10000;
        border-radius: 5px;
        overflow: hidden;
        .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            border: transparent;
            background: transparent;
            i {
                border-radius: 50%;
                background-color: #fff;
                color: red;
                font-size: 50px;
                transition: 0.3s ease;
            }
            &:hover i {
                background-color: red;
                color: #fff;
            }
        }
    }
    .overlay {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        background: #cccccc58;
        z-index: 10000;
    }
`;
