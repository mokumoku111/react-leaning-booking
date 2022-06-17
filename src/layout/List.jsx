import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import "./css/List.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../components/SearchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listItem">
              <label>Check-in-date (M/D/Y) : </label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="listItem">
              <label className="OptionsLabel">Options</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min Price <small>(per night)</small>
                  </span>
                  <input
                    type="number"
                    min={0}
                    className="listOptionInputPrice"
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">
                    Max Price <small>(per night)</small>
                  </span>
                  <input
                    type="number"
                    min={0}
                    className="listOptionInputPrice"
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="listOptionInput"
                    placeholder={options.adult}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="listOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
              <div className="buttonCenter">
                <button className="btnSearch">Search</button>
              </div>
            </div>
          </div>
          <div className="listResult">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
