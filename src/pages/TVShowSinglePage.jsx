import { styled } from "styled-components";
import {
    HeroSinglePage,
    Loading,
    MovieImg,
    MovieRate,
    MovieTab,
    SocialBtn,
} from "../components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    addTvShowFavorite,
    addTvShowRated,
    fetchTVShowSingle,
    fetchTVShowSingleImage,
    removeTvShowFavorite,
} from "../features/tvShowSingleSlice";

export default function TVShowSinglePage() {
    const { id } = useParams();
    const { movie, status } = useSelector((state) => state.tvShow);
    const images = useSelector((state) => state.tvShow.images);
    const { id: accountId } = useSelector((state) => state.account.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTVShowSingle(id));
        dispatch(fetchTVShowSingleImage(id));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    const handleAddFavorite = (e) => {
        e.preventDefault();
        dispatch(addTvShowFavorite({ accountId, tvShowId: id }));
    };
    const handleRemoveFavorite = (e) => {
        e.preventDefault();
        dispatch(removeTvShowFavorite({ accountId, tvShowId: id }));
    };
    const handleRated = (i) => {
        dispatch(addTvShowRated({ tvShowId: id, value: i }));
    };
    if (status === "loading") {
        return <Loading />;
    }
    if (status === "failed") {
        return <p>please F5 to refresh page</p>;
    }
    const {
        vote_average: vote,
        backdrop_path: backdropPath,
        poster_path: posterPath,
        name,
        original_name: originalName,
        first_air_date: firstAirDate,
        last_air_date: lastAirDate,
        overview,
        episode_run_time: runTime,
        favorite,
        rated,
        keywords,
        genres,
        reviews,
        videos,
        aggregate_credits: credits,
    } = movie;
    const { cast, crew } = credits;
    return (
        <>
            <HeroSinglePage image={backdropPath} />
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <MovieImg image={posterPath} />
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="main-content">
                                <h1 className="bd-hd">
                                    {name || originalName}
                                </h1>
                                <SocialBtn
                                    favorite={favorite}
                                    handleAddFavorite={handleAddFavorite}
                                    handleRemoveFavorite={handleRemoveFavorite}
                                />
                                <MovieRate
                                    rated={rated?.value}
                                    vote={vote}
                                    handleRated={handleRated}
                                />
                                <MovieTab
                                    reviews={reviews}
                                    overview={overview}
                                    crew={crew}
                                    cast={cast}
                                    keywords={keywords.results}
                                    genres={genres}
                                    firstAirDate={firstAirDate}
                                    lastAirDate={lastAirDate}
                                    runTime={runTime[0]}
                                    vote={vote}
                                    images={images}
                                    videos={videos.results}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.div`
    background-color: #020d18;
    padding: 75px 0;
    margin-top: -415px;
    .main-content {
        position: relative;
        .bd-hd {
            font-family: "Dosis", sans-serif;
            font-size: 36px;
            color: #ffffff;
            font-weight: 700;
            text-transform: none;
            margin-bottom: 25px;
            margin-top: 0;
            span {
                font-family: "Dosis", sans-serif;
                font-size: 24px;
                color: #4f5b68;
                font-weight: 300;
                text-transform: uppercase;
            }
        }
    }
`;
