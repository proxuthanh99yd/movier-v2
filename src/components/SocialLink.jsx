import { styled } from "styled-components";

export default function SocialLink() {
    return (
        <Wrapper>
            <div className="social-link">
                <p>Follow us: </p>
                <a href="#">
                    <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                </a>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .social-link {
        display: flex;
        gap: 6px;
        a {
            color: #fff;
            transition: color 0.2s ease;
            &:hover {
                color: #dcf836;
            }
        }
    }
`;
