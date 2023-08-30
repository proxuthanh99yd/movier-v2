import { styled } from "styled-components";
import { images } from "../../imageConfig";

export default function SidebarBottom({ person }) {
    return (
        <Wrapper>
            <div className="section-title">
                <h2>CELEBRITIES</h2>
            </div>
            {person.map(
                ({
                    id,
                    name,
                    original_name: originalName,
                    profile_path: image,
                    known_for_department: department,
                }) => (
                    <div key={id} className="celeb-item">
                        <a href="#">
                            <img
                                src={
                                    images.secure_base_url +
                                    images.profile_sizes[1] +
                                    image
                                }
                                alt=""
                                width="70"
                                height="70"
                            />
                        </a>
                        <div className="celeb-author">
                            <h6>
                                <a href="#">{name || originalName}</a>
                            </h6>
                            <span>{department}</span>
                        </div>
                    </div>
                )
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .section-title {
        margin-bottom: 30px;
        color: #ffffff;
        font-weight: 600;
        line-height: 21px;
        text-transform: uppercase;
        padding-left: 20px;
        position: relative;

        &::after {
            position: absolute;
            left: 0;
            top: -6px;
            height: 32px;
            width: 4px;
            background: #dcf836;
            content: "";
        }

        h2 {
            font-family: "Dosis", sans-serif;
            font-size: 24px;
            color: #ffffff;
            font-weight: bold;
            text-transform: uppercase;
        }
    }

    .celeb-item {
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
            margin-right: 20px;
            border-radius: 3px;
            object-fit: cover;
        }

        .celeb-author {
            h6 {
                font-size: 16px;
            }

            span {
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: bold;
                text-transform: uppercase;
                font-weight: 400;
            }

            a {
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #ffffff;
                font-weight: bold;
                text-transform: none;
                transition: color 0.3s ease;

                &:hover {
                    color: #dcf836;
                }
            }
        }
    }
`;
