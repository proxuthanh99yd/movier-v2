import { styled } from "styled-components";
import { Breadcrumb, Loading } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../imageConfig";
import { useEffect } from "react";
import { fetchPeople, setPage } from "../features/peopleSlice";
import PagePaginate from "./PagePaginate";
import { Link } from "react-router-dom";
import { linkTo } from "../routes";

export default function PeoplePage() {
    const { results, status, page, totalPages, itemsLoading } = useSelector(
        (state) => state.people
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeople({ currentPage: page }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    const handlePageClick = ({ selected }) => {
        dispatch(setPage(selected + 1));
    };
    if (status === "loading") {
        return <Loading />;
    }
    if (itemsLoading === "loading") {
        return (
            <>
                <Breadcrumb title="CELEBRITY LISTING" />
                <Wrapper>
                    <div className="container">
                        <div className="row">
                            {Array.from({ length: 20 }, (_, i) => (
                                <div
                                    key={i}
                                    className="col-lg-3 col-md-4 col-sm-6"
                                >
                                    <div className="cards">
                                        <div className="card-loading">
                                            <div className="bars-common bar-one"></div>
                                            <div className="bars-common bar-two"></div>
                                            <div className="bars-common bar-three"></div>
                                            <div className="squares-common square-one"></div>
                                            <div className="squares-common square-two"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Wrapper>
            </>
        );
    }
    return (
        <>
            <Breadcrumb title="CELEBRITY LISTING" />
            <Wrapper>
                <div className="container">
                    <div className="row">
                        {results.map((person) => (
                            <div
                                key={person.id}
                                className="col-lg-3 col-md-4 col-sm-6"
                            >
                                <div className="ceb-item-style-2">
                                    {person.profile_path ? (
                                        <Link to={linkTo.person + person.id}>
                                            <img
                                                src={
                                                    images.secure_base_url +
                                                    images.profile_sizes[2] +
                                                    person.profile_path
                                                }
                                                alt=""
                                            />
                                        </Link>
                                    ) : (
                                        <img
                                            src="./images/uploads/default-avatar.jpg"
                                            alt=""
                                        />
                                    )}

                                    <div className="ceb-infor">
                                        <h2>
                                            <Link
                                                to={linkTo.person + person.id}
                                            >
                                                {person.name ||
                                                    person.original_name}
                                            </Link>
                                        </h2>
                                        <span>
                                            {person.known_for[0].title},{" "}
                                            {person.known_for[1].title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <PagePaginate
                        handlePageClick={handlePageClick}
                        page={page}
                        totalPages={totalPages}
                    />
                </div>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    background-color: #020d18;
    padding: 25px 0;
    .ceb-item-style-2 {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 30px;
        a {
            overflow: hidden;
            img {
                transition: 0.3s ease;
                border: 0;
                height: auto;
                width: 100%;
                object-fit: cover;
                &:hover {
                    scale: 1.1;
                }
            }
        }
        .ceb-infor {
            background-color: #091a2c;
            padding: 10px 20px;
            width: 100%;
            h2 {
                font-family: "OpenSans", sans-serif;
                font-weight: 700;
                clear: both;
                line-height: 1;
            }
            span {
                margin-top: 10px;
                display: block;
                width: 100%;
                font-family: "Nunito", sans-serif;
                font-size: 12px;
                color: #abb7c4;
                font-weight: 300;
                text-transform: uppercase;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            a {
                font-family: "Dosis", sans-serif;
                font-size: 18px;
                color: #ffffff;
                font-weight: 700;
                text-transform: none;
                &:hover {
                    color: #dcf836;
                }
            }
        }
    }
    .cards {
        margin-right: 23px;
        margin-bottom: 30px;
        border-radius: 5px;
        position: relative;
        height: 323px;
        overflow: hidden;
        background: #0b1a2a;
        /* background: linear-gradient(135deg, #0d1019 0%, #161b29 100%); */
        .card-loading {
            width: 20vw;
            height: 20vw;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            margin: auto;
            overflow: hidden;
            .bars-common {
                height: 4vw;
                max-height: 100%;
                width: 1vw;
                margin: auto;
                position: absolute;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            }

            .bar-one {
                left: 0;
                right: 4vw;
                top: 0;
                bottom: 0;
                box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                    inset 0 0 0.5vw 0 cyan;
            }

            .bar-two {
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                    inset 0 0 0.5vw 0 cyan;
            }

            .bar-three {
                left: 4vw;
                right: 0;
                top: 0;
                bottom: 0;
                box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                    inset 0 0 0.5vw 0 cyan;
            }

            /* Rotating squares style */

            .squares-common {
                height: 8vw;
                max-height: 100%;
                width: 8vw;
                margin: auto;
                position: absolute;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                border-radius: 0%;
            }

            .square-one {
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                    inset 0 0 0.5vw 0 cyan;
            }

            .square-two {
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                    inset 0 0 0.5vw 0 cyan;
            }

            /* Animation */
            /* Compressing bars animation */

            .bar-one {
                animation: barOne 1s 0.33s ease infinite;
                -moz-animation: barOne 1s 0.33s ease infinite;
                /* Firefox */
                -webkit-animation: barOne 1s 0.33s ease infinite;
                /* Safari and Chrome */
                -o-animation: barOne 1s 0.33s ease infinite;
                /* Opera */
            }

            @keyframes barOne {
                0%,
                100% {
                    box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                        inset 0 0 0.5vw 0 cyan;
                }
                50% {
                    height: 2.5vw;
                    box-shadow: 0 0 0 0.1vw magenta, 0 0 1vw 0 magenta,
                        inset 0 0 0.5vw 0 magenta;
                }
            }

            .bar-two {
                animation: barTwo 1s 0.66s ease infinite;
                -moz-animation: barTwo 1s 0.66s ease infinite;
                /* Firefox */
                -webkit-animation: barTwo 1s 0.66s ease infinite;
                /* Safari and Chrome */
                -o-animation: barTwo 1s 0.66s ease infinite;
                /* Opera */
            }

            @keyframes barTwo {
                0%,
                100% {
                    box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                        inset 0 0 0.5vw 0 cyan;
                }
                50% {
                    height: 2.5vw;
                    box-shadow: 0 0 0 0.1vw magenta, 0 0 1vw 0 magenta,
                        inset 0 0 0.5vw 0 magenta;
                }
            }

            .bar-three {
                animation: barThree 1s 0.99s ease infinite;
                -moz-animation: barThree 1s 0.99s ease infinite;
                /* Firefox */
                -webkit-animation: barThree 1s 0.99s ease infinite;
                /* Safari and Chrome */
                -o-animation: barThree 1s 0.99s ease infinite;
                /* Opera */
            }

            @keyframes barThree {
                0%,
                100% {
                    box-shadow: 0 0 0 0.1vw cyan, 0 0 1vw 0 cyan,
                        inset 0 0 0.5vw 0 cyan;
                }
                50% {
                    height: 2.5vw;
                    box-shadow: 0 0 0 0.1vw magenta, 0 0 1vw 0 magenta,
                        inset 0 0 0.5vw 0 magenta;
                }
            }

            /* Rotating squares animation */

            .square-one {
                animation: squareOne 4s 0.99s ease infinite;
                -moz-animation: squareOne 4s 0.99s ease infinite;
                /* Firefox */
                -webkit-animation: squareOne 4s 0.99s ease infinite;
                /* Safari and Chrome */
                -o-animation: squareOne 4s 0.99s ease infinite;
                /* Opera */
            }

            @keyframes squareOne {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(-180deg);
                }
            }

            .square-two {
                animation: squareTwo 4s 0.99s ease infinite;
                -moz-animation: squareTwo 4s 0.99s ease infinite;
                /* Firefox */
                -webkit-animation: squareTwo 4s 0.99s ease infinite;
                /* Safari and Chrome */
                -o-animation: squareTwo 4s 0.99s ease infinite;
                /* Opera */
            }

            @keyframes squareTwo {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(180deg);
                }
            }
        }
    }
`;
