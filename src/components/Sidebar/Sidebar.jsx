import { styled } from "styled-components";
import SidebarTop from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";
import PropTypes from "prop-types";

Sidebar.propTypes = {
    moviesFavorite: PropTypes.array,
    person: PropTypes.array,
};
export default function Sidebar({ moviesFavorite, person }) {
    return (
        <Wrapper>
            <div className="sidebar">
                {moviesFavorite.length > 0 && (
                    <SidebarTop moviesFavorite={moviesFavorite} />
                )}
                <SidebarBottom person={person} />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div``;
