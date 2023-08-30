import { createBrowserRouter } from "react-router-dom";
import {
    Account,
    AccountLayout,
    ErrorPage,
    HomePage,
    MovieSinglePage,
    Movies,
    MoviesFavorite,
    MoviesNowPlayingPage,
    MoviesPopularPage,
    MoviesRated,
    MoviesTopRatedPage,
    MoviesUpcomingPage,
    MoviesWatchList,
    PeoplePage,
    RootLayout,
    TVShowSinglePage,
    TVShowsPage,
} from "../pages";
import { linkTo } from "./linkTo";
import Approved from "../pages/Approved";
import {
    fetchMoviesPopular,
    fetchMoviesPopularFilter,
    setPage as setPageMoviesPopular,
    clearSearch as clearSearchMoviesPopular,
    setDateFrom as setDateFromMoviesPopular,
    setDateTo as setDateToMoviesPopular,
    setGenres as setGenresMoviesPopular,
    setKeywords as setKeywordsMoviesPopular,
    setMinMaxStar as setMinMaxStarMoviesPopular,
    setSort as setSortMoviesPopular,
} from "../features/moviesPopularSlice";
import {
    fetchMoviesNowPlaying,
    fetchMoviesNowPlayingFilter,
    setPage as setPageMoviesNowPlaying,
    clearSearch as clearSearchMoviesNowPlaying,
    setDateFrom as setDateFromMoviesNowPlaying,
    setDateTo as setDateToMoviesNowPlaying,
    setGenres as setGenresMoviesNowPlaying,
    setKeywords as setKeywordsMoviesNowPlaying,
    setMinMaxStar as setMinMaxStarMoviesNowPlaying,
    setSort as setSortMoviesNowPlaying,
} from "../features/moviesNowPlayingSlice";

export const router = createBrowserRouter([
    {
        path: linkTo.home,
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "approved",
                element: <Approved />,
            },
            {
                path: `${linkTo.movie}:id`,
                element: <MovieSinglePage />,
            },
            {
                path: linkTo.moviesPopular,
                element: <MoviesPopularPage />,
                // element: (
                //     <Movies
                //         moviesState={(state) => state.moviesPopular}
                //         moviesFilter={fetchMoviesPopularFilter}
                //         movies={fetchMoviesPopular}
                //         setPage={setPageMoviesPopular}
                //         clearSearch={clearSearchMoviesPopular}
                //         setDateFrom={setDateFromMoviesPopular}
                //         setDateTo={setDateToMoviesPopular}
                //         setGenres={setGenresMoviesPopular}
                //         setKeywords={setKeywordsMoviesPopular}
                //         setMinMaxStar={setMinMaxStarMoviesPopular}
                //         setSort={setSortMoviesPopular}
                //     />
                // ),
            },
            {
                path: linkTo.moviesNowPlaying,
                element: <MoviesNowPlayingPage />,
                // element: (
                //     <Movies
                //         moviesState={(state) => state.moviesNowPlaying}
                //         moviesFilter={fetchMoviesNowPlayingFilter}
                //         movies={fetchMoviesNowPlaying}
                //         setPage={setPageMoviesNowPlaying}
                //         clearSearch={clearSearchMoviesNowPlaying}
                //         setDateFrom={setDateFromMoviesNowPlaying}
                //         setDateTo={setDateToMoviesNowPlaying}
                //         setGenres={setGenresMoviesNowPlaying}
                //         setKeywords={setKeywordsMoviesNowPlaying}
                //         setMinMaxStar={setMinMaxStarMoviesNowPlaying}
                //         setSort={setSortMoviesNowPlaying}
                //     />
                // ),
            },
            {
                path: linkTo.moviesUpcoming,
                element: <MoviesUpcomingPage />,
            },
            {
                path: linkTo.moviesTopRated,
                element: <MoviesTopRatedPage />,
            },
            {
                path: linkTo.tvShows,
                element: <TVShowsPage />,
            },
            {
                path: `${linkTo.tvShow}:id`,
                element: <TVShowSinglePage />,
            },
            {
                path: linkTo.tvPopular,
                element: <TVShowsPage />,
            },
            {
                path: linkTo.tvAiringToday,
                element: <TVShowsPage />,
            },
            {
                path: linkTo.tvOnTv,
                element: <TVShowsPage />,
            },
            {
                path: linkTo.tvTopRated,
                element: <TVShowsPage />,
            },
            {
                path: linkTo.people,
                element: <PeoplePage />,
            },
            {
                path: linkTo.peoplePopular,
                element: <PeoplePage />,
            },
            {
                path: linkTo.account,
                element: <AccountLayout />,
                children: [
                    {
                        index: true,
                        element: <Account />,
                    },
                    {
                        path: linkTo.moviesFavorite,
                        element: <MoviesFavorite />,
                    },
                    {
                        path: linkTo.moviesRated,
                        element: <MoviesRated />,
                    },
                    {
                        path: linkTo.moviesWatchList,
                        element: <MoviesWatchList />,
                    },
                ],
            },
        ],
    },
]);
