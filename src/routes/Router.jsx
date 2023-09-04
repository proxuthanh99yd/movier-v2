import { createBrowserRouter } from "react-router-dom";
import {
    Account,
    AccountLayout,
    ErrorPage,
    HomePage,
    MovieSinglePage,
    MoviesFavoritePage,
    MoviesPage,
    MoviesRatedPage,
    PeoplePage,
    PersonPage,
    RootLayout,
    TVShowSinglePage,
    TVShowsFavoritePage,
    TVShowsPage,
    TVShowsRatedPage,
} from "../pages";
import { linkTo } from "./linkTo";
import Approved from "../pages/Approved";

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
                path: linkTo.movies,
                element: <MoviesPage />,
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
                path: `${linkTo.person}:id`,
                element: <PersonPage />,
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
                        element: <MoviesFavoritePage />,
                    },
                    {
                        path: linkTo.moviesRated,
                        element: <MoviesRatedPage />,
                    },
                    {
                        path: linkTo.tvShowsFavorite,
                        element: <TVShowsFavoritePage />,
                    },
                    {
                        path: linkTo.tvShowsRated,
                        element: <TVShowsRatedPage />,
                    },
                ],
            },
        ],
    },
]);
