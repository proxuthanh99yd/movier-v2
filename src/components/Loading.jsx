import { styled } from "styled-components";

export default function Loading() {
    return (
        <Preloader>
            <img
                className="logo"
                src="/images/logo1.png"
                alt=""
                width="119"
                height="58"
            />
            <div id="status">
                <span></span>
                <span></span>
            </div>
        </Preloader>
    );
}

const Preloader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #020d18;
    z-index: 99999;
    text-align: center;
    img {
        margin-top: 100px;
        border: 0;
        height: auto;
        max-width: 100%;
        vertical-align: middle;
    }
    #status {
        position: relative;
        width: 70px;
        height: 70px;
        top: 35%;
        margin: 0 auto;
        right: 35px;
        span {
            position: absolute;
            border-radius: 999px;
        }
    }
    #status span:nth-child(1) {
        border: 5px solid #dcf836;
        border-top: 5px solid transparent;
        width: 70px;
        height: 70px;
        animation: spin1 2s infinite linear;
    }
    #status span:nth-child(2) {
        border: 5px solid #dd003f;
        border-top: 5px solid transparent;
        top: 20px;
        left: 20px;
        width: 30px;
        height: 30px;
        animation: spin2 1s infinite linear;
        margin-left: 35px;
    }
    @keyframes spin1 {
        0% {
            transform: rotate(360deg);
            opacity: 1;
        }
        50% {
            transform: rotate(180deg);
            opacity: 0.75;
        }
        100% {
            transform: rotate(0deg);
            opacity: 1;
        }
    }
    @keyframes spin2 {
        0% {
            transform: rotate(0deg);
            opacity: 0.75;
        }
        50% {
            transform: rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: rotate(360deg);
            opacity: 0.75;
        }
    }
`;
