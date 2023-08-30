import { styled } from "styled-components";
import { images as imageConfig } from "../../../imageConfig";
import { useSelector } from "react-redux";

export default function TabMedia() {
    const { images, videos, imageLoading } = useSelector(
        (state) => state.movie
    );
    if (imageLoading === "loading") {
        return <p>loading...</p>;
    }
    return (
        <Media>
            <div className="row">
                <div className="rv-hd">
                    <div>
                        <h3>Videos &amp; Photos of</h3>
                        <h2>Skyfall: Quantum of Spectre</h2>
                    </div>
                </div>
                <div className="title-hd-sm">
                    <h4>
                        Videos <span>{videos.length}</span>
                    </h4>
                </div>
                <div className="mvsingle-item media-item">
                    {videos.map((video) => (
                        <div key={video.key} className="vd-item">
                            <div className="vd-it">
                                <img
                                    className="vd-img"
                                    src={
                                        imageConfig.secure_base_url +
                                        imageConfig.backdrop_sizes[1] +
                                        images[0].file_path
                                    }
                                    alt=""
                                />
                                <a
                                    className="fancybox-media hvr-grow"
                                    href={`https://www.youtube.com/embed/${video.key}`}
                                    rel="playlist"
                                >
                                    <img
                                        src="/images/uploads/play-vd.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="vd-infor">
                                <h6>
                                    {" "}
                                    <a href="#">Trailer: {video.name}</a>
                                </h6>
                                <p className="time">
                                    {" "}
                                    {video.site + " " + video.type}
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className="vd-item">
                            <div className="vd-it">
                                <img
                                    className="vd-img"
                                    src="/images/uploads/vd-item1.jpg"
                                    alt=""
                                />
                                <a
                                    className="fancybox-media hvr-grow"
                                    href="https://www.youtube.com/embed/o-0hcF97wy0"
                                    rel="playlist"
                                >
                                    <img
                                        src="/images/uploads/play-vd.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="vd-infor">
                                <h6>
                                    {" "}
                                    <a href="#">Trailer: Watch New Scenes</a>
                                </h6>
                                <p className="time"> 1: 31</p>
                            </div>
                        </div>
                    ))} */}
                </div>
                <div className="title-hd-sm">
                    <h4>
                        Photos <span> ({images.length})</span>
                    </h4>
                </div>
                <div className="mvsingle-item">
                    {images.map((image) => (
                        <a
                            key={image.file_path}
                            className="img-lightbox"
                            data-fancybox-group="gallery"
                            href="#!"
                        >
                            <img
                                src={
                                    imageConfig.secure_base_url +
                                    imageConfig.backdrop_sizes[1] +
                                    image.file_path
                                }
                                alt=""
                            />
                        </a>
                    ))}
                </div>
            </div>
        </Media>
    );
}

const Media = styled.div`
    .rv-hd {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
            margin-bottom: 20px;
        }
    }
    .title-hd-sm {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
        border-bottom: 1px solid #233a50;
        padding-bottom: 8px;
        margin-top: 30px;
        h4 {
            font-family: "Dosis", sans-serif;
            font-size: 14px;
            color: #ffffff;
            font-weight: bold;
            text-transform: uppercase;
            span {
                color: #abb7c4;
            }
        }
    }
    .mvsingle-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-items: inherit;
        flex-wrap: wrap;
        .vd-item {
            margin-bottom: 30px;
            width: 170px;
            .vd-it {
                position: relative;
                .hvr-grow {
                    vertical-align: middle;
                    box-shadow: 0 0 1px transparent;
                    transition-duration: 0.3s;
                    transition-property: transform;
                }
                img.vd-img {
                    width: 170px;
                    height: 111px;
                    object-fit: cover;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all 0.5s ease-out;
                    margin-bottom: 15px;
                    position: relative;
                }
                a {
                    margin: auto;
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        border: 0;
                        height: auto;
                        max-width: 100%;
                        vertical-align: middle;
                    }
                }
            }
            .vd-infor {
                margin-top: 15px;
                h6 {
                    font-size: 16px;
                    a {
                        font-family: "Dosis", sans-serif;
                        font-size: 14px;
                        color: #ffffff;
                        font-weight: bold;
                        text-transform: none;
                    }
                }
                p.time {
                    margin-top: 5px;
                    font-family: "Dosis", sans-serif;
                    font-size: 12px;
                    color: #abb7c4;
                    font-weight: 400;
                    text-transform: none;
                }
            }
        }
        .img-lightbox img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.5s ease-out;
            margin-bottom: 15px;
            position: relative;
        }
    }
`;
