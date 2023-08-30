import { styled } from "styled-components";
import { images } from "../../imageConfig";

export default function MovieImg({ image }) {
    return (
        <Wrapper>
            <img
                src={images.secure_base_url + images.poster_sizes[5] + image}
                alt=""
            />
            <div className="movie-btn">
                <div className="btn-transform">
                    <div>
                        <a href="#" className="item">
                            {" "}
                            <i className="ion-play" /> Watch Trailer
                        </a>
                    </div>
                </div>
            </div>
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
`;
