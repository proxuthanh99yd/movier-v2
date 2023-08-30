import ReactPaginate from "react-paginate";
import { styled } from "styled-components";

export default function PagePaginate({ handlePageClick, page, totalPages }) {
    return (
        <Wrapper>
            <ReactPaginate
                forcePage={page - 1}
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages > 500 ? 500 : totalPages}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    ul {
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
