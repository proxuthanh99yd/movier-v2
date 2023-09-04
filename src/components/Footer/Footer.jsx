import { styled } from "styled-components";

export default function Footer() {
    return (
        <Wrapper>
            <div className="container">
                <div className="flex-parent-ft">
                    <div className="flex-child-ft item1">
                        <a href="index.html">
                            <img
                                className="logo"
                                src="/images/logo1.png"
                                alt=""
                            />
                        </a>
                        <p>
                            5th Avenue st, manhattan
                            <br />
                            New York, NY 10001
                        </p>
                        <p>
                            Call us: <a href="#">(+01) 202 342 6789</a>
                        </p>
                    </div>
                    <div className="flex-child-ft item2">
                        <h4>Resources</h4>
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Blockbuster</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Forums</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Help Center</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-child-ft item3">
                        <h4>Legal</h4>
                        <ul>
                            <li>
                                <a href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Security</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-child-ft item4">
                        <h4>Account</h4>
                        <ul>
                            <li>
                                <a href="#">My Account</a>
                            </li>
                            <li>
                                <a href="#">Watchlist</a>
                            </li>
                            <li>
                                <a href="#">Collections</a>
                            </li>
                            <li>
                                <a href="#">User Guide</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-child-ft item5">
                        <h4>Newsletter</h4>
                        <p>
                            Subscribe to our newsletter system now <br /> to get
                            latest news from us.
                        </p>
                        <form action="#">
                            <input
                                type="text"
                                placeholder="Enter your email..."
                            />
                        </form>
                        <a href="#" className="btn">
                            Subscribe now{" "}
                            <i className="ion-ios-arrow-forward"></i>
                        </a>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.footer`
    background: url(../images/uploads/ft-bg.jpg) no-repeat;
    background-position: center;
    background-size: cover;
    a {
        color: #fff;
        font-size: 18px;
    }
    .flex-parent-ft {
        padding: 80px 0 60px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-items: flex-start;
        .flex-child-ft p {
            margin-bottom: 15px;
            font-family: "Nunito", sans-serif;
            font-size: 14px;
            color: #abb7c4;
            font-weight: 300;
            text-transform: none;
            line-height: 24px !important;
        }
        .flex-child-ft ul li {
            margin-top: 10px;

            a {
                font-family: "Nunito", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: regular;
                text-transform: none;
            }
        }
        .flex-child-ft h4 {
            margin: 20px 0;
            font-family: "Dosis", sans-serif;
            font-size: 18px;
            color: #ffffff;
            font-weight: bold;
            text-transform: capitalize;
            margin-bottom: 30px px;
        }
        .flex-child-ft a.btn {
            font-family: "Dosis", sans-serif;
            font-size: 14px;
            color: #dd003f;
            font-weight: bold;
            text-transform: uppercase;
        }
        .flex-child-ft form {
            margin-bottom: 20px;
            input {
                display: block;
                width: 100%;
                font-family: "Nunito", sans-serif;
                font-size: 12px;
                color: #abb7c4;
                font-weight: 300;
                text-transform: none;
                background-color: #020d18;
                border-color: #405266;
                border-radius: 3px;
                background: url(../images/uploads/search-bg.png) no-repeat right
                    20px center;
                display: block;
                width: 100%;
                height: 34px;
                padding: 6px 12px;
                font-size: 14px;
                line-height: 1.42857143;
                border: 1px solid #aaa;
            }
        }
    }
    .ft-copyright {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #405266;
        padding-top: 20px;
        padding-bottom: 10px;
        background-color: #020d18;
        opacity: 0.7;
        filter: alpha(opacity=70);
        padding-left: 380px;
        padding-right: 380px;
    }

    @media (max-width: 1200px) {
        .ft-copyright {
            padding-left: 125px;
            padding-right: 125px;
        }
    }
    @media (max-width: 991px) {
        .flex-parent-ft {
            display: flex;
            flex-direction: column;
            max-width: 550px;
            margin: 0 auto;
            .flex-child-ft {
                width: 100%;
            }
        }
    }
`;
