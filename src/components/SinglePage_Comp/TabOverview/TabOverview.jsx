import { styled } from "styled-components";
import VideoPhoto from "./VideoPhoto";
import UserReviews from "./UserReviews";
import MovieCast from "./MovieCast";
import MovieInfo from "./MovieInfo";
import PropTypes from "prop-types";

TabOverview.propTypes = {
    movie: PropTypes.object,
};
export default function TabOverview({ movie }) {
    return (
        <Wrapper>
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <p>{movie.overview}</p>
                    <VideoPhoto />
                    <MovieCast />
                    <UserReviews />
                </div>
                <div className="col-lg-4 col-md-12 col-xs-12 col-sm-12">
                    <MovieInfo movie={movie} />
                    {/* <div className="ads">
                        <img src="/images/uploads/ads1.png" alt="ads" />
                    </div> */}
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    p {
        font-family: "Nunito", sans-serif;
        font-size: 14px;
        color: #abb7c4;
        font-weight: 300;
        text-transform: none;
        line-height: 24px !important;
    }
    .title-hd-sm {
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
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
        }

        a {
            color: #4280bf;
        }
    }
    .time {
        font-family: "Nunito", sans-serif;
        font-size: 12px;
        color: #abb7c4;
        font-weight: 300;
        text-transform: none;
        display: flex;
        align-items: center;
        gap: 3px;
    }
`;
