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
    fetchMovieSingle,
    fetchMovieSingleImage,
} from "../features/movieSingleSlice";

export default function MovieSinglePage() {
    const { id } = useParams();
    const { movie, status } = useSelector((state) => state.movie);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovieSingle(id));
        dispatch(fetchMovieSingleImage(id));
    }, [id]);
    if (status === "loading") {
        return <Loading />;
    }
    if (status === "failed") {
        return <p>please F5 to refresh page</p>;
    }
    return (
        <>
            <HeroSinglePage image={movie.backdrop_path} />
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <MovieImg image={movie.poster_path} />
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="main-content">
                                <h1 className="bd-hd">
                                    {movie.name ||
                                        movie.original_name ||
                                        movie.title ||
                                        movie.original_title}{" "}
                                    <span>
                                        {movie.release_date?.slice(0, 4)}
                                    </span>
                                </h1>
                                <SocialBtn />
                                <MovieRate rate={movie.vote_average} />
                                <MovieTab movie={movie} />
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
