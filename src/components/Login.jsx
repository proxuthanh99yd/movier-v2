import { styled } from "styled-components";

export default function Login({ closeForm, handleSubmit }) {
    return (
        <Wrapper>
            <div
                className="overlay"
                onClick={() => closeForm((curr) => !curr)}
            ></div>
            <div className="login-wrapper" id="login-content">
                <div className="login-content">
                    <button
                        onClick={() => closeForm((curr) => !curr)}
                        href="#"
                        className="close"
                    >
                        x
                    </button>
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label className="form-label" htmlFor="username">
                                Username:
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter username..."
                            />
                        </div>

                        <div className="form-group row">
                            <label className="form-label" htmlFor="password">
                                Password:
                            </label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password..."
                            />
                        </div>
                        <div className="form-btn row">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    .overlay {
        position: fixed;
        width: 100vw;
        height: 100vh;
        opacity: 1;
        filter: alpha(opacity=100);
        transition: all 0.35s ease-out;
        pointer-events: inherit;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 999;
        transition: all 0.35s ease-out;
    }
    .login-content {
        position: relative;
        z-index: 1000;
        width: 430px;
        padding: 50px;
        border: 1px solid #e1e1e1;
        height: auto;
        background-color: #ffffff;
        .close {
            cursor: pointer;
            border: transparent;
            float: right;
            font-size: 21px;
            font-weight: bold;
            text-shadow: 0 1px 0 #fff;
            background-color: #dd003f;
            color: #ffffff;
            padding: 4px 10px 6px 10px;
        }
        h3 {
            font-family: "Dosis", sans-serif;
            font-size: 36px;
            color: #222222;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 45px;
            text-align: center;
        }
        .form-group {
            display: flex;
            gap: 10px;
            label {
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #222222;
                font-weight: bold;
                text-transform: uppercase;
                width: 100%;
            }
            input {
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #222222;
                font-weight: bold;
                text-transform: capitalize;
                margin-top: 10px;
                height: 42px;
                border: 1px solid #e1e1e1;
                margin-bottom: 25px;
            }
        }
        .form-btn {
            button {
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #ffffff;
                font-weight: bold;
                text-transform: uppercase;
                border: none;
                background-color: #dd003f;
                height: 42px;
                width: 100%;
                cursor: pointer;
            }
        }
    }
`;
