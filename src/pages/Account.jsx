import { useSelector } from "react-redux";
import { styled } from "styled-components";

export default function Account() {
    const { user } = useSelector((state) => state.account);
    return (
        <Wrapper>
            <form action="" className="user">
                <h4>01. Profile details</h4>
                <div className="row">
                    <div className="col-md-6 form-it">
                        <label>Username</label>
                        <input type="text" placeholder={user.username} />
                    </div>
                    <div className="col-md-6 form-it">
                        <label>Email Address</label>
                        <input type="text" placeholder="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 form-it">
                        <label>First Name</label>
                        <input type="text" placeholder={user.name} />
                    </div>
                    <div className="col-md-6 form-it">
                        <label>Last Name</label>
                        <input type="text" placeholder={user.name} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 form-it">
                        <label>Country</label>
                        <select>
                            <option value="united">United States</option>
                            <option value="saab">Others</option>
                        </select>
                    </div>
                    <div className="col-md-6 form-it">
                        <label>State</label>
                        <select>
                            <option value="united">New York</option>
                            <option value="saab">Others</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <input className="submit" type="submit" value="save" />
                    </div>
                </div>
            </form>
            <form action="" className="password">
                <h4>02. Change password</h4>
                <div className="row">
                    <div className="col-md-6 form-it">
                        <label>Old Password</label>
                        <input type="text" placeholder="**********" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 form-it">
                        <label>New Password</label>
                        <input type="text" placeholder="***************" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 form-it">
                        <label>Confirm New Password</label>
                        <input type="text" placeholder="*************** " />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <input
                            className="submit"
                            type="submit"
                            value="change"
                        />
                    </div>
                </div>
            </form>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-bottom: 60px;
    background-color: #0b1a2a;
    border: 3px solid #0f2133;
    padding: 15px;
    h4 {
        font-family: "Dosis", sans-serif;
        font-size: 14px;
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 30px;
    }
    label {
        display: block;
        font-family: "Dosis", sans-serif;
        font-size: 14px;
        color: #abb7c4;
        font-weight: bold;
        text-transform: none;
        margin-bottom: 10px;
    }
    input,
    select {
        font-family: "Nunito", sans-serif;
        font-size: 12px;
        color: #abb7c4;
        font-weight: 300;
        text-transform: none;
        background-color: #233a50;
        border: none;
        border-radius: 3px !important;
        height: 40px;
    }
    input.submit {
        font-family: "Dosis", sans-serif;
        font-size: 14px;
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        background: #dd003f;
        width: 100%;
        border-radius: 50px !important;
    }
    .form-it {
        margin-bottom: 15px;
    }
    .user {
        padding-bottom: 30px;
        border-bottom: 1px solid #0f2133;
    }
    .password {
        padding-top: 30px;
    }
`;
