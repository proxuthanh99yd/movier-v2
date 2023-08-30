import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Item from "./Item";
import PropTypes from "prop-types";
HomeMovieItems.propTypes = {
    cateName: PropTypes.string,
    linkViewAll: PropTypes.string,
    linkView: PropTypes.string,
    data: PropTypes.array,
};
export default function HomeMovieItems({
    cateName,
    linkViewAll,
    linkView,
    data,
}) {
    return (
        <Wrapper>
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                        <h2>{cateName}</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="view-all">
                        <Link to={linkViewAll}>
                            View All{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                {data.map((item) => (
                    <Item key={item.id} {...item} linkView={linkView} />
                ))}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-bottom: 50px;
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
    .view-all {
        text-align: right;
        margin-bottom: 30px;
        a {
            font-family: "Dosis", sans-serif;
            font-size: 14px;
            color: #abb7c4;
            font-weight: bold;
            text-transform: uppercase;
            margin-right: 10px;
            transition: color 0.3s ease;
            &:hover {
                color: #dcf836;
            }
        }
    }
`;
