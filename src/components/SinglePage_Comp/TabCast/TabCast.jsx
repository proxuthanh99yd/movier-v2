import { styled } from "styled-components";
import PropTypes from "prop-types";
import { images } from "../../../imageConfig";
import { useSelector } from "react-redux";
TabCast.propTypes = {
    name: PropTypes.string,
};
export default function TabCast({ name }) {
    const { crew, cast } = useSelector((state) => state.movie);
    return (
        <Cast>
            <div className="row">
                <h3>Cast &amp; Crew of</h3>
                <h2>{name}</h2>
                {/* //== */}
                <div className="title-hd-sm">
                    <h4>Directors &amp; Credit Writers</h4>
                </div>
                <div className="mvcast-item">
                    {crew.map((crew) => {
                        if (crew.job === "Director") {
                            return (
                                <div key={crew.id} className="cast-it">
                                    <div className="cast-left">
                                        <h4>
                                            {crew.name.split(" ")[0].charAt(0) +
                                                crew.name
                                                    .split(" ")[1]
                                                    .charAt(0)}
                                        </h4>
                                        <a href="#">
                                            {crew.name || crew.original_name}
                                        </a>
                                    </div>
                                    <p>... Director</p>
                                </div>
                            );
                        }
                        if (crew.job === "Writer") {
                            return (
                                <div key={crew.id} className="cast-it">
                                    <div className="cast-left">
                                        <h4>
                                            {crew.name.split(" ")[0].charAt(0) +
                                                crew.name
                                                    .split(" ")[1]
                                                    .charAt(0)}
                                        </h4>
                                        <a href="#">
                                            {crew.name || crew.original_name}
                                        </a>
                                    </div>
                                    <p>... Writer</p>
                                </div>
                            );
                        }
                    })}
                </div>
                {/* //== */}
                <div className="title-hd-sm">
                    <h4>Directors &amp; Credit Writers</h4>
                </div>
                <div className="mvcast-item">
                    {crew.slice(0, 5).map((crew) => {
                        const splitName = crew.name.split(" ");
                        return (
                            <div key={crew.id} className="cast-it">
                                <div className="cast-left">
                                    <h4>
                                        {splitName[0].charAt(0) +
                                            splitName[1].charAt(0)}
                                    </h4>
                                    <a href="#">
                                        {crew.name || crew.original_name}
                                    </a>
                                </div>
                                <p>... {crew.job}</p>
                            </div>
                        );
                    })}
                </div>
                {/* //== */}
                <div className="title-hd-sm">
                    <h4>Cast</h4>
                </div>
                <div className="mvcast-item">
                    {cast
                        .slice(0, 5)
                        .map(
                            ({
                                id,
                                character,
                                name,
                                original_name,
                                profile_path,
                                known_for_department,
                            }) => (
                                <div key={id} className="cast-it">
                                    <div className="cast-left">
                                        <img
                                            src={
                                                images.secure_base_url +
                                                images.profile_sizes[1] +
                                                profile_path
                                            }
                                            alt=""
                                        />
                                        <a href="#">{name || original_name}</a>
                                    </div>
                                    <p>
                                        ... {character || known_for_department}.
                                    </p>
                                </div>
                            )
                        )}
                </div>
                {/* //== */}
            </div>
        </Cast>
    );
}

const Cast = styled.div`
    h3 {
        font-family: "Dosis", sans-serif;
        font-size: 18px;
        color: #abb7c4;
        font-weight: bold;
        text-transform: none;
        margin-bottom: 15px;
    }
    h2 {
        font-family: "Dosis", sans-serif;
        font-size: 18px;
        color: #4280bf;
        font-weight: bold;
        text-transform: none;
        font-size: 24px;
        margin-bottom: 30px;
    }
    .title-hd-sm {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
        border-bottom: 1px solid #233a50;
        padding-bottom: 8px;
        margin-top: 10px;
        h4 {
            font-family: "Dosis", sans-serif;
            font-size: 14px;
            color: #ffffff;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
    .cast-it {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 30px;
        .cast-left {
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            h4 {
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: bold;
                text-transform: uppercase;
                width: 40px;
                height: 40px;
                background-color: #233a50;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 3px;
                margin-right: 15px;
            }
            a {
                color: #4280bf;
                margin-right: 100px;
            }
            img {
                width: 40px;
                height: auto;
                object-fit: cover;
                border-radius: 5px;
                margin-right: 15px;
            }
        }
        p {
            font-family: "Nunito", sans-serif;
            font-size: 14px;
            color: #abb7c4;
            font-weight: 300;
            text-transform: none;
            line-height: 24px !important;
            width: 40%;
            text-align: left;
        }
    }
`;
