import { useState } from "react";
import { Loading, MovieList, TopbarFilter } from "../components";
import PagePaginate from "./PagePaginate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    fetchMoviesFavorite,
    fetchSortMoviesFavorite,
    setPage,
    setSort,
} from "../features/moviesFavoriteSlice";

export default function MoviesFavorite() {
    const [grid, setGrid] = useState(true);
    const dispatch = useDispatch();
    const {
        results: moviesFavorite,
        status,
        sort,
        totalResults,
        page,
        totalPages,
    } = useSelector((state) => state.moviesFavorite);
    useEffect(() => {
        dispatch(fetchMoviesFavorite());
    }, []);
    useEffect(() => {
        dispatch(fetchSortMoviesFavorite(sort));
    }, [sort]);
    const handleSort = (e) => {
        dispatch(setSort(e.target.value));
    };
    const handlePageClick = ({ selected }) => {
        dispatch(setPage(selected + 1));
    };
    if (status === "loading") {
        return <Loading />;
    }
    return (
        <>
            <TopbarFilter
                handleSort={handleSort}
                sort={sort}
                total={totalResults}
                grid={grid}
                setGrid={setGrid}
                isAccountLayout
            />
            {moviesFavorite.length > 0 ? (
                <MovieList
                    path={"movies"}
                    grid={grid}
                    movies={moviesFavorite}
                />
            ) : (
                <p style={{ color: "#fff" }}>no results</p>
            )}
            <PagePaginate
                handlePageClick={handlePageClick}
                page={page}
                totalPages={totalPages}
            />
        </>
    );
}
