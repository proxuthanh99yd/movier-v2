import { styled } from "styled-components";
import { HeroSlider, HomeMovieItems, Loading, SocialLink } from "../components";
import { linkTo } from "../routes";
import Sidebar from "../components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { images } from "../imageConfig";
import { fetchTrendingMovies } from "../features/trendingMoviesSlice";
import { fetchMovieGenres } from "../features/movieGenresSlice";
import { fetchMoviesFavorite } from "../features/moviesFavoriteSlice";
import { fetchMovies } from "../features/moviesSlice";
import { fetchTvShows } from "../features/tvShowsSlice";
import { fetchPeople } from "../features/peopleSlice";

export default function HomePage() {
    const { results: trendingMovies, status: trendingMoviesLoading } =
        useSelector((state) => state.trendingMovies);
    const { genres, status: movieGenresLoading } = useSelector(
        (state) => state.movieGenres
    );
    const { results: movies, status: moviesLoading } = useSelector(
        (state) => state.movies
    );
    const { results: tvShows, status: tvShowsLoading } = useSelector(
        (state) => state.tvShows
    );
    const { results: person, status: personLoading } = useSelector(
        (state) => state.people
    );
    const { results: moviesFavorite } = useSelector(
        (state) => state.moviesFavorite
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTrendingMovies());
        dispatch(fetchMovieGenres());
        dispatch(fetchMovies({}));
        dispatch(fetchTvShows({}));
        dispatch(fetchPeople({}));
        dispatch(fetchMoviesFavorite());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (
        trendingMoviesLoading === "loading" ||
        movieGenresLoading === "loading" ||
        moviesLoading === "loading" ||
        tvShowsLoading === "loading" ||
        personLoading === "loading"
    ) {
        return <Loading />;
    }
    return (
        <>
            <HeroWrapper
                style={{
                    backgroundImage: `url(${
                        images.secure_base_url +
                        images.backdrop_sizes[3] +
                        trendingMovies[0].backdrop_path
                    })`,
                }}
            >
                <div className="container">
                    <div className="row">
                        <SocialLink />
                        <HeroSlider
                            trending={trendingMovies.slice(0, 9)}
                            genres={genres}
                        />
                    </div>
                </div>
            </HeroWrapper>
            <MainWrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <HomeMovieItems
                                cateName={"Movies"}
                                data={movies.slice(0, 9)}
                                linkViewAll={linkTo.movies}
                                linkView={linkTo.movie}
                            />
                            <HomeMovieItems
                                cateName={"TV Shows"}
                                data={tvShows.slice(0, 9)}
                                linkViewAll={linkTo.tvShows}
                                linkView={linkTo.tvShow}
                            />
                        </div>
                        <div
                            style={{ paddingLeft: "30px" }}
                            className="col-lg-4 col-md-6 col-sm-8"
                        >
                            <Sidebar
                                moviesFavorite={moviesFavorite.slice(0, 4)}
                                person={person.slice(0, 9)}
                            />
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </>
    );
}
const HeroWrapper = styled.section`
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    background-size: cover;
    position: relative;
    padding-top: 200px;
    padding-bottom: 50px;
    display: flex;
    align-items: center;
    color: #fff;
    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
        padding-top: 115px;
    }

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) {
    }
`;
const MainWrapper = styled.section`
    padding: 70px 0;
    background-color: #020d18;
`;
