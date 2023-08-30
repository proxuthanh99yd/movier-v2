import { styled } from "styled-components";

export default function MovieRate({ rate }) {
    return (
        <Wrapper>
            <div className="rate">
                <i className="fa-solid fa-star"></i>
                <p>
                    <span>{rate ? rate.toFixed(1) : "???"}</span> /10
                    <br />
                    <span className="rv">56 Reviews</span>
                </p>
            </div>
            <div className="rate-star">
                <p>Rate This Movie: </p>
                {Array.from({ length: 10 }, (_, i) => {
                    if (rate >= i + 1) {
                        return <i key={i} className="fa-solid fa-star"></i>;
                    } else {
                        return <i key={i} className="fa-regular fa-star"></i>;
                    }
                })}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid #405266;
    border-bottom: 1px solid #405266;
    margin-bottom: 70px;
    .rate {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #abb7c4;
        i {
            font-size: 32px;
            color: #f5b50a;
        }
        p {
            margin-bottom: 0;
            margin-left: 10px;
            font-size: 11px;
            span {
                color: #ffffff;
                font-size: 15px;
                font-weight: 400;
            }
            span.rv {
                display: block;
                margin-top: 10px;
                font-size: 12px;
                color: #4280bf;
            }
        }
    }
    .rate-star {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 30px;
        border-left: 1px solid #405266;
        padding-left: 30px;
        height: 54px;
        p {
            font-size: 18px;
            color: #abb7c4;
            margin-right: 15px;
            margin-bottom: 0;
        }
        i {
            font-size: 24px;
            color: #f5b50a;
        }
    }
`;
