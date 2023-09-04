import { styled } from "styled-components";
import { images } from "../../imageConfig";
import PropTypes from "prop-types";

HeroSinglePage.propTypes = { image: PropTypes.string };

export default function HeroSinglePage({ image }) {
    return (
        <Wrapper
            style={{
                backgroundImage: `url(${
                    images.secure_base_url + images.backdrop_sizes[3] + image
                })`,
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* <h1> movie listing - list</h1>
				<ul class="breadcumb">
					<li class="active"><a href="#">Home</a></li>
					<li> <span class="ion-ios-arrow-right"></span> movie listing</li>
				</ul> */}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 598px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
    }
`;
