import React, { useEffect, useState } from "react";
import travelImg from "../../asset/img/travel.png";
import { useSelector } from "react-redux";
import { DatePicker } from "../DatePicker";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
// Css
import "../../asset/css/main-ticket.css";

/**
 * @author
 * @function MainSearch
 **/

export const MainSearch = (props) => {
  const startDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closePicker = () => {
    if (showModal) {
      setShowModal(false);
    }
  };
  const routes = useSelector((state) => state.routes);
  //console.log(routes);
  const startLocations = Array.from(
    new Set(routes.map((route) => route.startLocation))
  );
  const endLocations = Array.from(
    new Set(routes.map((route) => route.endLocation))
  );

  // Select Item in selectbox
  useEffect(() => {
    // start  location
    const selected2 = document.querySelector(".selected2");
    const optionList = document.querySelector(".options-list");

    const optionLists = document.querySelectorAll(".option-item");

    const closeTag = document.querySelector(".content");

    optionLists.forEach((element) => {
      element.addEventListener("click", () => {
        optionList.classList.remove("active");
        if (selected2)
          selected2.innerHTML = element.querySelector("label").innerHTML;
      });
    });

    if (selected2) {
      selected2.addEventListener("click", () => {
        optionList.classList.add("active");
      });
    }

    //  end location

    const selected1 = document.querySelector(".selected1");
    const optionList1 = document.querySelector(".options-list1");

    const optionLists1 = document.querySelectorAll(".option-item1");

    optionLists1.forEach((element) => {
      element.addEventListener("click", () => {
        optionList1.classList.remove("active");
        if (selected1)
          selected1.innerHTML = element.querySelector("label").innerHTML;
      });
    });

    if (selected1) {
      selected1.addEventListener("click", () => {
        optionList1.classList.add("active");
      });
    }
  });

  return (
    <div>
      <div className="content" onClick={closePicker}>
        <form action="/ticket" method="get">
          <div className="content__main-func">
            <div className="content__main-func__wrapper-out">
              <div className="content__main-func__wrapper">
                <div className="main-func__selection">
                  <div className="main-func__selection__item">
                    <input type="radio" name="radio" checked />
                    <p>Xe khách</p>
                  </div>
                  <div className="main-func__selection__item">
                    <input type="radio" name="radio" />
                    <p>Xe du lịch</p>
                  </div>
                </div>
                <div className="main-func__site">
                  <div className="main-func__site__choose input">
                    <i className="bx bx-home-alt"></i>
                    <select name="startLocation">
                      <option value="" disabled selected>
                        Chọn nơi đi
                      </option>
                      <option value="Mọi nơi">Mọi nơi</option>
                      {startLocations.map((location) => (
                        <option value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                  <div className="main-func__site__choose input">
                    <i className="bx bxs-edit-location"></i>
                    <select name="endLocation">
                      <option value="" disabled selected>
                        Chọn nơi đến
                      </option>
                      <option value="Mọi nơi">Mọi nơi</option>
                      {endLocations.map((location) => (
                        <option value={location}>{location}</option>
                      ))}
                    </select>
                  </div>

                  <div className="main-func__site__swap">
                    <i className="fas fa-exchange-alt"></i>
                  </div>
                </div>
                <div className="main-func__date">
                  <div className="main-func__date__choose input">
                    <DatePickerComponent
                      showClearButton={false}
                      width={23}
                      id="date"
                      min={startDate}
                      format="dd/MM/yyyy"
                      onChange={(e) => {
                        if (e.target.value == null) {
                          document.getElementById("date-p").textContent =
                            "Chọn ngày khởi hành";
                        } else {
                          document.getElementById("date-p").textContent =
                            e.target.value
                              .toLocaleDateString("vi-VN")
                              .toString();
                        }
                      }}
                    ></DatePickerComponent>
                    <p id="date-p">Chọn ngày khởi hành</p>
                    <div
                      className="clearBtn"
                      onClick={() => {
                        document.getElementById("date").value = null;
                        document.getElementById("date-p").textContent =
                          "Chọn ngày khởi hành";
                      }}
                    >
                      X
                    </div>
                  </div>
                </div>
                <div className="main-func__btn-search mybtn">
                  <button className="search-home link-in-btn" type="submit">
                    Tìm xe
                  </button>
                </div>
              </div>
            </div>

            <div className="content__main-img">
              <img src={travelImg} alt="hong" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
