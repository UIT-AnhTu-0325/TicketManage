import React, { useEffect, useState } from "react";
import { Slider } from "@material-ui/core";
/**
 * @author
 * @function FilterTicket
 **/

export const FilterTicket = ({ filter, setFilter }) => {
  let mark = false;
  const [time, setTime] = useState({
    night: false,
    morning: false,
    afternoon: false,
    evening: false,
  });
  const [price, setPrice] = useState([0, 2000000]);
  const [enterprise, setEnterprise] = useState([]);
  useEffect(() => {
    setFilter({
      enterprise: enterprise,
      price: price,
      time: time,
    });
  }, [enterprise, time, price]);
  const handleStartTime = (e) => {
    switch (e.target.id.toString()) {
      case "night":
        setTime({
          ...time,
          night: !time.night,
        });
        break;
      case "morning":
        setTime({
          ...time,
          morning: !time.morning,
        });
        break;
      case "afternoon":
        setTime({
          ...time,
          afternoon: !time.afternoon,
        });
        break;
      case "evening":
        setTime({
          ...time,
          evening: !time.evening,
        });
        break;
      default:
        break;
    }
  };
  const handlePrice = (e, data) => {
    setPrice([data[0] * 20000, data[1] * 20000]);
  };
  const handleEnterprise = (e) => {
    if (e.target.checked) {
      setEnterprise([...enterprise, e.target.value]);
    } else {
      const array = enterprise.filter((item) => item != e.target.value);
      setEnterprise(array);
    }
  };
  return (
    <>
      <div className="filter-header">
        <h3>Bộ lọc chi tiết</h3>
      </div>

      <div className="filter-body">
        <div className="session-filter">
          <div className="session-filter__title">
            <i class="bx bx-time-five"></i>
            <span>Chọn thời gian</span>

            <div className="filter__time filter-wrap-property">
              <div
                className={time.night ? "time__item active" : "time__item"}
                id="night"
                onClick={handleStartTime}
              >
                Buổi sớm 00:00 - 06:00
              </div>
              <div
                className={time.morning ? "time__item active" : "time__item"}
                id="morning"
                onClick={handleStartTime}
              >
                Buổi sáng 06:01 - 12:00
              </div>
              <div
                className={time.afternoon ? "time__item active" : "time__item"}
                id="afternoon"
                onClick={handleStartTime}
              >
                Buổi chiều 12:01 - 18:00
              </div>
              <div
                className={time.evening ? "time__item active" : "time__item"}
                id="evening"
                onClick={handleStartTime}
              >
                Buổi tối 18:01 - 23:59
              </div>
            </div>
          </div>
        </div>

        <div className="session-filter">
          <div className="session-filter__title">
            <i class="bx bx-bus"></i>
            <span>Chọn nhà xe</span>
          </div>

          <div className="filter__bus-house filter-wrap-property">
            <div className="bus-house__item">
              <input
                type="checkbox"
                className="custom-checkbox-rectangle"
                value="Lâm Hồng"
                onClick={handleEnterprise}
              />
              <span>Lâm Hồng</span>
            </div>
            <div className="bus-house__item">
              <input
                type="checkbox"
                className="custom-checkbox-rectangle"
                value="VinVeXe"
                onClick={handleEnterprise}
              />
              <span>VinVeXe</span>
            </div>
            <div className="bus-house__item">
              <input
                type="checkbox"
                className="custom-checkbox-rectangle"
                value="Anh Tú"
                onClick={handleEnterprise}
              />
              <span>Anh Tú</span>
            </div>
            <div className="bus-house__item">
              <input
                type="checkbox"
                className="custom-checkbox-rectangle"
                value="Ngọc Phúc"
                onClick={handleEnterprise}
              />
              <span>Ngọc Phúc</span>
            </div>
            <div className="bus-house__item">
              <input
                type="checkbox"
                className="custom-checkbox-rectangle"
                value="Tấn Hoài"
                onClick={handleEnterprise}
              />
              <span>Tấn Hoài</span>
            </div>
          </div>
        </div>
        <div className="session-filter">
          <div className="session-filter__title">
            <i class="fas fa-toolbox"></i>
            <span>Chọn giá vé</span>
          </div>
          <div className="price">
            <p>
              {price[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} -{" "}
              {price[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
            </p>
          </div>
          <Slider
            value={[price[0] / 20000, price[1] / 20000]}
            onChangeCommitted={handlePrice}
          />
        </div>
        <div className="session-filter">
          <div className="session-filter__title">
            <i class="fas fa-toolbox"></i>
            <span>Chọn dịch vụ</span>
          </div>

          <div className="filter__services filter-wrap-property">
            <div className="services__item">
              <input
                type="checkbox"
                defaultChecked
                className="custom-checkbox-rectangle"
              />
              <span>Đồ ăn</span>
            </div>
            <div className="services__item">
              <input type="checkbox" className="custom-checkbox-rectangle" />
              <span>Mùng mền</span>
            </div>
            <div className="services__item">
              <input type="checkbox" className="custom-checkbox-rectangle" />
              <span>Ghế Vip</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
