import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSessionId } from "../features/accountSlice";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function Approved() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [time, setTime] = useState(5);
    useEffect(() => {
        const params = new URL(document.location).searchParams;
        const approved = params.get("approved");
        if (approved) {
            dispatch(getSessionId());
        }
        const countTime = setInterval(() => {
            setTime((curr) => --curr);
        }, 1000);
        const setTimeoutId = setTimeout(() => {
            navigate("/");
        }, 5000);
        return () => {
            clearTimeout(setTimeoutId);
            clearInterval(countTime);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <div className="hero common-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct">
                                <h1>
                                    Login successfully! redirect Home {time}s
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    background-image: url(./images/uploads/ft-bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 445px;
    height: 385px;

    .hero-ct {
        padding-top: 170px;
        h1 {
            font-family: "Dosis", sans-serif;
            font-size: 36px;
            color: #ffffff;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
        .breadcrumb {
            li.active a {
                color: #4280bf;
            }
            a,
            li {
                display: inline-block;
                font-family: "Nunito", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: 300;
                text-transform: uppercase;
            }
            i {
                margin-left: 15px;
                margin-right: 15px;
            }
        }
    }
`;
