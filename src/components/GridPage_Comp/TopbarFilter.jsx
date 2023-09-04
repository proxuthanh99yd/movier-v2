import { styled } from "styled-components";
import PropTypes from "prop-types";

TopbarFilter.propTypes = {
    total: PropTypes.number,
    grid: PropTypes.bool,
    setGrid: PropTypes.func,
    handleSort: PropTypes.func,
    sort: PropTypes.string,
    isAccountLayout: PropTypes.bool,
};

export default function TopbarFilter({
    total,
    grid,
    setGrid,
    handleSort,
    sort,
    isAccountLayout,
}) {
    return (
        <Wrapper>
            <p>
                Found <span>{total} movies</span> in total
            </p>
            <label>Sort by:</label>
            <select value={sort} onChange={handleSort}>
                {isAccountLayout ? (
                    <>
                        <option value="created_at.desc">
                            Create at Descending
                        </option>
                        <option value="created_at.asc">
                            Create at Ascending
                        </option>
                    </>
                ) : (
                    <>
                        <option value="popularity.desc">
                            Popularity Descending
                        </option>
                        <option value="popularity.asc">
                            Popularity Ascending
                        </option>
                        <option value="vote_average.desc">
                            Rating Descending
                        </option>
                        <option value="vote_average.asc">
                            Rating Ascending
                        </option>
                        <option value="primary_release_date.desc">
                            Release date Descending
                        </option>
                        <option value="primary_release_date.asc">
                            Release date Ascending
                        </option>
                    </>
                )}
            </select>
            <button
                onClick={() => setGrid(false)}
                className={!grid ? "list active" : "list"}
            >
                <i className="fa-solid fa-list"></i>
            </button>
            <button
                onClick={() => setGrid(true)}
                className={grid ? "grid active" : "grid"}
            >
                <i className="fa-solid fa-table-cells"></i>
            </button>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    border-top: 1px solid #405266;
    border-bottom: 1px solid #405266;
    p {
        padding-right: 200px;
        margin-bottom: 0;
        font-family: "Nunito", sans-serif;
        font-size: 14px;
        color: #abb7c4;
        font-weight: 300;
        text-transform: none;
        line-height: 24px !important;
        span {
            color: #4280bf;
        }
    }
    label,
    select {
        font-family: "Nunito", sans-serif;
        font-size: 14px;
        color: #abb7c4;
        font-weight: 300;
        text-transform: none;
    }
    select {
        width: 215px;
        background: no-repeat right 20px center;
        border-left: 1px solid #405266;
        border-right: 1px solid #405266;
        border-top: none;
        border-bottom: none;
        color: #ffffff;
        font-weight: 400;
    }
    option {
        background-color: #020d18;
    }
    .list,
    .grid {
        background: transparent;
        border: transparent;
        font-size: 16px;
        color: #abb7c4;
        margin-left: -15px;
        i {
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 35px;
        }
    }
    .list {
        border-right: 1px solid #405266;
    }
    .active,
    i:hover {
        color: #dcf836;
    }
    @media (max-width: 991px) {
        p {
            padding-right: 0;
        }
    }
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        padding: 15px 0;
        select {
            border: 1px solid #405266;
        }
        .list {
            border: none;
        }
    }
`;
