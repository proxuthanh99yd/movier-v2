import { styled } from "styled-components";
import { images as imageConfig } from "../../../imageConfig";
import PropTypes from "prop-types";

VideoPhoto.propTypes = { images: PropTypes.array };

export default function VideoPhoto({ images }) {
    return (
        <>
            <div className="title-hd-sm">
                <h4>Photos</h4>
                <a href="#" className="time">
                    {images.length} Photos{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                </a>
            </div>
            <Wrapper>
                {images.slice(0, 4).map((image) => (
                    <a
                        key={image.file_path}
                        className="img-lightbox"
                        data-fancybox-group="gallery"
                        href="#!"
                    >
                        <img
                            src={
                                imageConfig.secure_base_url +
                                imageConfig.backdrop_sizes[0] +
                                image.file_path
                            }
                            alt=""
                        />
                    </a>
                ))}
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: inherit;
    flex-wrap: wrap;
    a {
        transition: all 0.3s ease-out;
        color: #666;
        border-bottom: 1px solid dotted;
    }
    img {
        width: 100px;
        height: auto;
        object-fit: cover;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.5s ease-out;
        margin-bottom: 15px;
        position: relative;
    }
`;
