import ReactPaginate from "react-paginate";
import { styled } from "styled-components";
import PropTypes from "prop-types";

PagePaginate.propTypes = {
    handlePageClick: PropTypes.func,
    page: PropTypes.number,
    totalPages: PropTypes.number,
};

export default function PagePaginate({ handlePageClick, page, totalPages }) {
    return (
        <Wrapper>
            <ReactPaginate
                forcePage={page - 1}
                breakLabel="..."
                nextLabel={<i className="fa-solid fa-circle-chevron-right"></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages > 500 ? 500 : totalPages}
                previousLabel={
                    <i className="fa-solid fa-circle-chevron-left"></i>
                }
                renderOnZeroPageCount={null}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    ul {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        border-top: 1px solid #405266;
        border-bottom: 1px solid #405266;
        color: #fff;
        gap: 5px;
        li {
            cursor: pointer;
            &.selected {
                color: yellow;
            }
            &.disabled {
                color: #405266;
            }
        }
    }
`;
