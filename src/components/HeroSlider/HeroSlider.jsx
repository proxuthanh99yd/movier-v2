import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";
import SliderItem from "./SliderItem";

import PropTypes from "prop-types";

HeroSlider.propTypes = { trending: PropTypes.array, genres: PropTypes.array };

export default function HeroSlider({ trending, genres }) {
    return (
        <Wrapper>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                scrollbar={{
                    hide: true,
                }}
                modules={[Autoplay, Scrollbar]}
                className="mySwiper"
            >
                {trending &&
                    trending.map((data) => (
                        <SwiperSlide key={data.id}>
                            <SliderItem {...data} genres={genres} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    margin-top: 30px;
`;
