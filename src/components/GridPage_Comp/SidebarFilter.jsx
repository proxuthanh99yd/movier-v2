import { styled } from "styled-components";
import Select from "react-select";
import DatePicker from "react-datepicker";
import MultiRangeSlider from "multi-range-slider-react";
import "react-datepicker/dist/react-datepicker.css";
import AsyncSelect from "react-select/async";
import PropTypes from "prop-types";

SidebarFilter.propTypes = {
    handleFilter: PropTypes.func,
    withKeywords: PropTypes.array,
    promiseOptions: PropTypes.any,
    handleKeywords: PropTypes.func,
    withGenres: PropTypes.array,
    handleGenres: PropTypes.func,
    options: PropTypes.array,
    withVoteGte: PropTypes.number,
    withVoteLte: PropTypes.number,
    handleVote: PropTypes.func,
    withDateGte: PropTypes.any,
    handleDateFrom: PropTypes.func,
    withDateLte: PropTypes.any,
    handleDateTo: PropTypes.func,
    handleClearSearch: PropTypes.func,
};

export default function SidebarFilter({
    handleFilter,
    withKeywords,
    promiseOptions,
    handleKeywords,
    withGenres,
    handleGenres,
    options,
    withVoteGte,
    withVoteLte,
    handleVote,
    withDateGte,
    handleDateFrom,
    withDateLte,
    handleDateTo,
    handleClearSearch,
}) {
    return (
        <Wrapper className="sidebar">
            <div className="searh-form">
                <h4 className="sb-title">Search for movie</h4>
                <form
                    onSubmit={handleFilter}
                    className="form-style-1"
                    action="#"
                >
                    <div className="row">
                        <div className="col-lg-12 form-it">
                            <label>Keywords</label>
                            <div className="group-ip">
                                <AsyncSelect
                                    value={withKeywords}
                                    className="multi-select"
                                    classNamePrefix="select"
                                    isMulti
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={promiseOptions}
                                    onChange={handleKeywords}
                                    placeholder="Search keywords..."
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 form-it">
                            <label>Genres &amp; Subgenres</label>
                            <div className="group-ip">
                                <Select
                                    value={withGenres}
                                    onChange={handleGenres}
                                    className="multi-select"
                                    classNamePrefix="select"
                                    isMulti
                                    name="genres"
                                    options={options}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 form-it">
                            <label>Rating Range</label>
                            <MultiRangeSlider
                                className="filter-star"
                                min={0}
                                max={10}
                                step={1}
                                minValue={withVoteGte}
                                maxValue={withVoteLte}
                                // onInput={handleVote}
                                onChange={handleVote}
                            />
                        </div>
                        <div className="col-lg-12 form-it">
                            <label>Release Date</label>
                            <div className="row date-picker">
                                <div className="col-md-3">
                                    <label>From :</label>
                                </div>
                                <div className="col-md-9">
                                    <DatePicker
                                        dateFormat="dd/MM/yyyy"
                                        className="date"
                                        selected={withDateGte}
                                        onChange={handleDateFrom}
                                        isClearable
                                        placeholderText="from..."
                                        selectsStart
                                        startDate={withDateGte}
                                        endDate={withDateLte}
                                    />
                                </div>
                            </div>
                            <div className="row date-picker">
                                <div className="col-md-3">
                                    <label>To :</label>
                                </div>
                                <div className="col-md-9">
                                    <DatePicker
                                        dateFormat="dd/MM/yyyy"
                                        className="date"
                                        selected={withDateLte}
                                        onChange={handleDateTo}
                                        isClearable
                                        placeholderText="from..."
                                        selectsEnd
                                        startDate={withDateGte}
                                        endDate={withDateLte}
                                        minDate={withDateGte}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 ">
                            <input
                                className="submit"
                                type="submit"
                                defaultValue="submit"
                            />
                        </div>
                        <div className="col-lg-12 ">
                            <input
                                onClick={handleClearSearch}
                                className="clear"
                                type="button"
                                defaultValue="Clear search"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-left: 60px;
    input,
    select {
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #aaa;
        transition: border-color ease-in-out 0.15s,
            box-shadow ease-in-out 0.15s 0.3s ease-out;
    }
    .sb-title {
        font-family: "Dosis", sans-serif;
        font-size: 18px;
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: 1px solid #405266;
    }
    .form-style-1 {
        margin-bottom: 60px;
        background-color: #0b1a2a;
        border: 3px solid #0f2133;
        padding: 15px;

        .form-it {
            margin-bottom: 15px;
            label {
                display: block;
                font-family: "Dosis", sans-serif;
                font-size: 14px;
                color: #abb7c4;
                font-weight: bold;
                text-transform: none;
                margin-bottom: 10px;
            }
            .filter-star {
                padding-top: 10px;
                border: transparent;
                box-shadow: none;
                color: #abb7c4;
                .bar-left,
                .bar-right {
                    background-color: transparent;
                }
                .bar-inner {
                    background-color: #233a50;
                }
                .thumb {
                    background-color: #abb7c4;
                }
            }
            .date-picker {
                margin-bottom: 10px;
                align-items: center;
                .react-datepicker-wrapper {
                    width: 100%;
                    display: block;
                }
            }
            .group-ip {
                display: flex;
                align-items: center;
                justify-content: row;
                .multi-select {
                    width: 100%;
                    .select__control {
                        background-color: #233a50;
                        border: none;
                    }
                    .select__menu {
                        z-index: 999;
                    }

                    .select__placeholder {
                        font-family: "Nunito", sans-serif;
                        font-size: 12px;
                        color: #abb7c4;
                        font-weight: 300;
                        text-transform: none;
                    }
                    .select__input-container {
                    }
                }
            }
        }
        input,
        select {
            font-family: "Nunito", sans-serif;
            font-size: 12px;
            color: #abb7c4 !important;
            font-weight: 300;
            text-transform: none;
            background-color: #233a50;
            border: none;
            border-radius: 3px !important;
            height: 40px;
        }
        select {
            background: no-repeat right 20px center;
            background-color: #233a50;
        }
        input.submit,
        .clear {
            cursor: pointer;
            font-family: "Dosis", sans-serif;
            font-size: 14px;
            color: #ffffff !important;
            font-weight: bold;
            text-transform: uppercase;
            background: #dd003f;
            width: 100%;
            &:hover {
                opacity: 0.8;
            }
        }
        .clear {
            margin-top: 10px;
            background-color: greenyellow;
        }
    }
`;
