import React,{useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../CSS/BookBar.css";

const BookBar = () => {
    const [date, setDate] = useState(new Date());
    const [ShowType, setShowType] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [type, setType] = useState("AC Car");
  
    const onChange = (date) => {
      setDate(date);
    };
  
    document.addEventListener("click", (evt) => {
      const calendarElement = document.querySelector(".journey-date");
      const TypeElement = document.querySelector(".type");
      let targetElement = evt.target;
  
      do {
        if (targetElement == calendarElement) {
          setShowCalendar(true);
          setShowType(false);
          return;
        } else if (targetElement === TypeElement) {
          setShowType(true);
          setShowCalendar(false);
          return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);
      {
        setShowCalendar(false);
        setShowType(false);
      }
    });
  
  return (
    <>
      <div className="Search-box w-100 d-flex justify-content-between align-items-center h-100">
        <div
          className="Search-img"
          style={{
            background: `url(${"https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`,
          }}
        >
          <h1>Search Your Best Cars Here.</h1>
        </div>
        <div className="Details">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="From">
              <input type="text" placeholder="From Address" />
            </div>
            <div className="To">
              <input type="text" placeholder="To Address" />
            </div>
            <div className="type">
              <div
                className="type-input"
                style={{ border: ShowType && "2px solid red" }}
              >
                <input
                  type="text"
                  value={type}
                  onClick={() => setShowType(true)}
                  readOnly
                />
                <i className="far fa-angle-down"></i>
              </div>
              {ShowType && (
                <div className="type-dropdown">
                  <p onClick={() => setType("AC Car")}>AC Car</p>
                  <p onClick={() => setType("Non AC Car")}>Non AC Car</p>
                </div>
              )}
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center w-100 mt-4">
            <div className="journey-date">
              <input
                type="text"
                placeholder="Journey Date"
                onClick={() => setShowCalendar(true)}
                value={
                  new Date().toLocaleDateString("en-US") ===
                  date.toLocaleDateString("en-US")
                    ? "Today"
                    : date.toLocaleDateString("en-US")
                }
              />
              {showCalendar && (
                <Calendar
                  onChange={onChange}
                  value={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="journey-time">
              <input type="text" placeholder="Journey Time" />
            </div>
            <div className="submit">
              <input type="submit" value={"FIND CAR"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookBar;
