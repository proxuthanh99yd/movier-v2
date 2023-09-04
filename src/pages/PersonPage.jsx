import { useEffect } from "react";
import { Loading } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { fetchPerson } from "../features/personSlice";
import { useParams } from "react-router-dom";
import { images as imageConfig } from "../imageConfig";
export default function PersonPage() {
    const { id } = useParams();
    const {
        status,
        biography,
        birthday,
        deathday,
        gender,
        known_for_department,
        movie_credits,
        place_of_birth,
        name,
        profile_path,
        also_known_as,
    } = useSelector((state) => state.person);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPerson({ personId: id }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (status === "loading") {
        return <Loading />;
    }
    return (
        <>
            <Backdrop>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"></div>
                    </div>
                </div>
            </Backdrop>
            <PersonWrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="person-img">
                                <img
                                    src={
                                        imageConfig.secure_base_url +
                                        imageConfig.profile_sizes[3] +
                                        profile_path
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="main-content">
                                        <h1 className="bd-hd">{name}</h1>
                                        <p className="ceb-single">
                                            {known_for_department}
                                        </p>
                                        <div className="social-link cebsingle-socail">
                                            <a href="#">
                                                <i className="fa-brands fa-square-facebook"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa-brands fa-square-twitter"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa-brands fa-square-google-plus"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </div>
                                        <div className="biography">
                                            <p className="title">Biography</p>
                                            <p className="content">
                                                {biography}
                                            </p>
                                        </div>
                                        <div className="known-for">
                                            <p className="title">Known For</p>
                                            <div className="flex-item">
                                                {movie_credits.cast
                                                    .slice(0, 5)
                                                    .map((movie) => (
                                                        <div
                                                            key={movie.id}
                                                            className="image-item"
                                                        >
                                                            <img
                                                                src={
                                                                    imageConfig.secure_base_url +
                                                                    imageConfig
                                                                        .poster_sizes[2] +
                                                                    movie.poster_path
                                                                }
                                                                alt=""
                                                            />
                                                            <p className="image-title">
                                                                {movie.title}
                                                            </p>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="info">
                                        <div className="title">
                                            Personal Info
                                        </div>
                                        <div className="info-item">
                                            <h6>Known For</h6>
                                            <p>{known_for_department}</p>
                                        </div>
                                        <div className="info-item">
                                            <h6>Gender</h6>
                                            {gender === 1 && <p>Female</p>}
                                            {gender === 2 && <p>Male</p>}
                                        </div>
                                        <div className="info-item">
                                            <h6>Birthday</h6>
                                            <p>{birthday}</p>
                                        </div>
                                        {deathday && (
                                            <div className="info-item">
                                                <h6>Deathday</h6>
                                                <p>{deathday}</p>
                                            </div>
                                        )}
                                        <div className="info-item">
                                            <h6>Place of Birth</h6>
                                            <p>{place_of_birth}</p>
                                        </div>
                                        <div className="info-item">
                                            <h6>Also Known As</h6>
                                            <p className="tags">
                                                {also_known_as.map(
                                                    (item, index) => (
                                                        <span
                                                            key={index}
                                                            className="time"
                                                        >
                                                            <a href="#">
                                                                {item}
                                                            </a>
                                                        </span>
                                                    )
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PersonWrapper>
        </>
    );
}

const Backdrop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 598px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: #020d18;
    }
`;
const PersonWrapper = styled.div`
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
            margin-bottom: 15px;
            margin-top: 0;
            span {
                font-family: "Dosis", sans-serif;
                font-size: 24px;
                color: #4f5b68;
                font-weight: 300;
                text-transform: uppercase;
            }
        }
        .ceb-single {
            font-size: 18px;
            font-family: "Nunito", sans-serif;
            font-size: 14px;
            color: #abb7c4;
            font-weight: 300;
            text-transform: none;
            line-height: 24px !important;
            margin-bottom: 15px;
        }
        .cebsingle-socail {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 35px;
            a {
                transition: all 0.3s ease-out;
                color: #666;
                border-bottom: 1px solid dotted;
                i {
                    font-size: 22px;
                    margin-right: 15px;
                    color: #abb7c4;
                }
            }
        }
        .biography {
            .title {
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 18px;
            }
            .content {
                margin-top: 15px;
                font-family: "Nunito", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: 300;
                text-transform: none;
                line-height: 24px !important;
            }
        }
        .known-for {
            margin-top: 35px;
            .title {
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 18px;
            }
            .flex-item {
                display: flex;
                gap: 15px;
                .image-item {
                    margin-top: 15px;
                    width: 135px;
                    img {
                        border-radius: 5px;
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                    }
                    .image-title {
                        text-align: center;
                        font-family: "Nunito", sans-serif;
                        font-size: 14px;
                        color: #abb7c4;
                        font-weight: 300;
                        text-transform: none;
                        line-height: 24px !important;
                    }
                }
            }
        }
    }
    .info {
        margin-top: 20px;
        position: relative;
        .title {
            margin-left: 30px;
            font-family: "Dosis", sans-serif;
            color: #abb7c4;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 18px;
        }
        .info-item {
            margin-top: 20px;
            margin-left: 30px;
            h6 {
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: bold;
                text-transform: capitalize;
                margin-bottom: 5px;
            }
            p {
                font-family: "Nunito", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: 300;
                text-transform: none;
                line-height: 24px !important;
                a {
                    color: #4280bf;
                }
            }
            .tags {
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                .time {
                    font-family: "Nunito", sans-serif;
                    font-size: 12px;
                    color: #abb7c4;
                    font-weight: 300;
                    text-transform: none;
                    a {
                        background-color: #233a50;
                        color: #abb7c4;
                        padding: 2px 5px;
                        border-radius: 2px;
                    }
                }
            }
        }
    }
    .person-img {
        position: relative;
        top: 0px;
        margin-right: 30px;
        margin-bottom: 60px;
        img {
            width: 100%;
            border-radius: 5px 5px 0 0;
        }
        .movie-btn {
            margin-top: -2px;
            text-align: center;
            padding: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #07101a;
            border: 3px solid #0c1c2c;
            border-top: transparent;
        }
        .btn-transform {
            a {
                display: block;
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: bold;
                text-transform: uppercase;
                background-color: #dd003f;
                color: #ffffff;
                padding: 13px 25px;
                border-radius: 5px;
            }
        }
    }
`;
