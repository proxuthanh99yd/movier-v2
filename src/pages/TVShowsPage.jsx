import { styled } from "styled-components";
import {
    Breadcrumb,
    Loading,
    MovieList,
    SidebarFilter,
    TopbarFilter,
} from "../components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { linkTo } from "../routes";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAiringToday,
    fetchOnTheAir,
    fetchTopRated,
    fetchTvPopular,
} from "../features/tvShowsSlice";

export default function TVShowsPage() {
    const [grid, setGrid] = useState(true);
    const [title, setTitle] = useState("");
    const { pathname } = useLocation();
    const { tvShows, status } = useSelector((state) => state.tvShows);
    const dispatch = useDispatch();
    useEffect(() => {
        switch (pathname) {
            case linkTo.tvShows:
                setTitle("TV Shows");
                dispatch(fetchTvPopular());
                break;
            case linkTo.tvPopular:
                setTitle("tv Popular");
                dispatch(fetchTvPopular());
                break;
            case linkTo.tvAiringToday:
                setTitle("tv Airing Today");
                dispatch(fetchAiringToday());
                break;
            case linkTo.tvOnTv:
                setTitle("On TV");
                dispatch(fetchOnTheAir());
                break;
            case linkTo.tvTopRated:
                setTitle("tv Top Rated");
                dispatch(fetchTopRated());
                break;
            default:
                throw new Error("unknown path name");
        }
    }, [pathname]);
    if (status === "loading") {
        return <Loading />;
    }
    return (
        <>
            <Breadcrumb title={title} image={tvShows[0].backdrop_path} />
            <Wrapper>
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <TopbarFilter grid={grid} setGrid={setGrid} />
                            <MovieList
                                path={"tvShows"}
                                movies={tvShows}
                                grid={grid}
                            />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <SidebarFilter />
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
