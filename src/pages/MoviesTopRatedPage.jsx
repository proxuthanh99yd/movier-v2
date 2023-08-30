import { styled } from "styled-components";
import {
    Breadcrumb,
    Loading,
    MovieList,
    SidebarFilter,
    TopbarFilter,
} from "../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PagePaginate from "./PagePaginate";
import {
    fetchMoviesTopRated,
    fetchMoviesTopRatedFilter,
    setPage,
    clearSearch,
    setDateFrom,
    setDateTo,
    setGenres,
    setKeywords,
    setMinMaxStar,
    setSort,
} from "../features/moviesTopRatedSlice";
import { dateFormat } from "../helper";
import { get } from "../Services/initialService";
import { fetchMovieGenres } from "../features/movieGenresSlice";

export default function MoviesTopRatedPage() {
    const [grid, setGrid] = useState(true);
    const dispatch = useDispatch();
    const {
        results: moviesTopRated,
        status,
        totalResults,
        totalPages,
        page,
        filterField,
        sort,
        filterStatus,
    } = useSelector((state) => state.moviesTopRated);
    const { genres } = useSelector((state) => state.movieGenres);

    const {
        withDateGte,
        withDateLte,
        withKeywords,
        withGenres,
        withVoteGte,
        withVoteLte,
    } = filterField;

    useEffect(() => {
        if (filterStatus) {
            const filter = {
                keywords:
                    withKeywords.length > 0
                        ? withKeywords.map((select) => select.value).join()
                        : "",
                genres:
                    withGenres.length > 0
                        ? withGenres.map((select) => select.value).join()
                        : "",
                yearFrom: withDateGte ? dateFormat(new Date(withDateGte)) : "",
                yearTo: dateFormat(new Date(withDateLte)),
                minStar: withVoteGte,
                maxStar: withVoteLte,
            };
            dispatch(fetchMoviesTopRatedFilter({ ...filter, sort }));
        } else {
            dispatch(fetchMoviesTopRated(page));
        }
        dispatch(fetchMovieGenres());
    }, [page, sort]);

    const handleDateFrom = (date) => {
        if (date) {
            dispatch(setDateFrom(date.getTime()));
        } else {
            dispatch(setDateFrom(null));
        }
    };
    const handleDateTo = (date) => {
        if (date) {
            dispatch(setDateTo(date.getTime()));
        } else {
            dispatch(setDateTo(null));
        }
    };
    const handleKeywords = (keyword) => {
        dispatch(setKeywords(keyword));
    };
    const handleGenres = (genre) => {
        dispatch(setGenres(genre));
    };
    const handleVote = (e) => {
        dispatch(setMinMaxStar({ min: e.minValue, max: e.maxValue }));
    };
    const promiseOptions = async (value) => {
        if (!value) return;
        const res = await get(`/search/keyword?query=${value}&page=1`);
        return res.data.results.map((option) => ({
            value: option.id,
            label: option.name,
        }));
    };
    const handleFilter = (e) => {
        e.preventDefault();

        const filter = {
            keywords:
                withKeywords.length > 0
                    ? withKeywords.map((select) => select.value).join()
                    : "",
            genres:
                withGenres.length > 0
                    ? withGenres.map((select) => select.value).join()
                    : "",
            yearFrom: withDateGte ? dateFormat(new Date(withDateGte)) : "",
            yearTo: dateFormat(new Date(withDateLte)),
            minStar: withVoteGte,
            maxStar: withVoteLte,
        };
        dispatch(fetchMoviesTopRatedFilter({ ...filter, sort }));
    };
    const handleClearSearch = () => {
        dispatch(clearSearch());
        dispatch(fetchMoviesTopRated(page));
    };
    const options = genres.map((genre) => ({
        value: genre.id,
        label: genre.name,
    }));
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
            <Breadcrumb
                title="Movies Top Rated"
                image={moviesTopRated[0]?.backdrop_path}
            />
            <Wrapper>
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <TopbarFilter
                                handleSort={handleSort}
                                sort={sort}
                                total={totalResults}
                                grid={grid}
                                setGrid={setGrid}
                            />
                            {moviesTopRated.length > 0 ? (
                                <MovieList
                                    path={"movies"}
                                    grid={grid}
                                    movies={moviesTopRated}
                                />
                            ) : (
                                <p style={{ color: "#fff" }}>no results</p>
                            )}
                            <PagePaginate
                                handlePageClick={handlePageClick}
                                page={page}
                                totalPages={totalPages}
                            />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <SidebarFilter
                                handleFilter={handleFilter}
                                withKeywords={withKeywords}
                                promiseOptions={promiseOptions}
                                handleKeywords={handleKeywords}
                                withGenres={withGenres}
                                handleGenres={handleGenres}
                                options={options}
                                withVoteGte={withVoteGte}
                                withVoteLte={withVoteLte}
                                handleVote={handleVote}
                                withDateGte={withDateGte}
                                handleDateFrom={handleDateFrom}
                                withDateLte={withDateLte}
                                handleDateTo={handleDateTo}
                                handleClearSearch={handleClearSearch}
                            />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.section`
    background-color: #020d18;
    padding: 75px 0;
    /* @media (max-width: 991px) {
        .ipad-width {
            max-width: 550px;
            margin: 0 auto;
        }
    } */
`;
