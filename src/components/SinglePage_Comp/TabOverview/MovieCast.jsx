import { styled } from "styled-components";
import { images as imageConfig } from "../../../imageConfig";
import PropTypes from "prop-types";

MovieCast.propTypes = { cast: PropTypes.array };

export default function MovieCast({ cast }) {
    return (
        <>
            <div className="title-hd-sm">
                <h4>cast</h4>
                <a href="#" className="time">
                    Full Cast &amp; Crew{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                </a>
            </div>
            <CastItem>
                {cast
                    .slice(0, 5)
                    .map(
                        ({
                            id,
                            character,
                            name,
                            profile_path,
                            profilePath,
                            knownForDepartment,
                            known_for_department,
                            original_name,
                        }) => (
                            <div key={id} className="cast-it">
                                <div className="cast-left">
                                    <img
                                        src={`${imageConfig.secure_base_url}${
                                            imageConfig.profile_sizes[1]
                                        }${profilePath || profile_path}`}
                                        alt=""
                                    />
                                    <a href="#">{name || original_name}</a>
                                </div>
                                <p>
                                    ...{" "}
                                    {character ||
                                        knownForDepartment ||
                                        known_for_department}
                                    .
                                </p>
                            </div>
                        )
                    )}
            </CastItem>
        </>
    );
}

const CastItem = styled.div`
    .cast-it {
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 30px;
        .cast-left {
            width: 60%;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            img {
                width: 40px;
                height: auto;
                object-fit: cover;
                border-radius: 5px;
                margin-right: 15px;
            }
            a {
                color: #4280bf;
                margin-right: 100px;
            }
        }
        p {
            width: 40%;
            text-align: left;
            margin-bottom: 0;
        }
    }
`;
