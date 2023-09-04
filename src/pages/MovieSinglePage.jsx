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
    addMovieFavorite,
    addMovieRated,
    fetchMovieSingle,
    fetchMovieSingleImage,
    removeMovieFavorite,
} from "../features/movieSingleSlice";

export default function MovieSinglePage() {
    const { id } = useParams();
    const {
        vote,
        status,
        backdropPath,
        posterPath,
        name,
        releaseDate,
        overview,
        runTime,
        favorite,
        rated,
    } = useSelector((state) => state.movie.movie);

    const cast = useSelector((state) => state.movie.cast);
    const crew = useSelector((state) => state.movie.crew);
    const images = useSelector((state) => state.movie.images);
    const videos = useSelector((state) => state.movie.videos);
    const keywords = useSelector((state) => state.movie.keywords);
    const genres = useSelector((state) => state.movie.cast);
    const reviews = useSelector((state) => state.movie.reviews);
    const { id: accountId } = useSelector((state) => state.account.user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovieSingle(id));
        dispatch(fetchMovieSingleImage(id));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    const handleAddFavorite = (e) => {
        e.preventDefault();
        dispatch(addMovieFavorite({ accountId, movieId: id }));
    };
    const handleRemoveFavorite = (e) => {
        e.preventDefault();
        dispatch(removeMovieFavorite({ accountId, movieId: id }));
    };
    const handleRated = (i) => {
        dispatch(addMovieRated({ movieId: id, value: i }));
    };
    if (status === "loading") {
        return <Loading />;
    }
    if (status === "failed") {
        return <p>please F5 to refresh page</p>;
    }
    return (
        <>
            <HeroSinglePage image={backdropPath} />
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <MovieImg
                                video={videos[0]?.key}
                                image={posterPath}
                            />
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="main-content">
                                <h1 className="bd-hd">
                                    {name}
                                    <span>{releaseDate?.slice(0, 4)}</span>
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
                                    keywords={keywords}
                                    genres={genres}
                                    releaseDate={releaseDate}
                                    runTime={runTime}
                                    vote={vote}
                                    images={images}
                                    videos={videos}
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
