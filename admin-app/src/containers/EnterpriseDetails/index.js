import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getEnterpriseDetailsById } from "../../actions";
import { Layout } from "../../components/Layout";
import { Table } from "../../components/table/Table";

/**
 * @author
 * @function EnterpriseDetails
 **/

export const EnterpriseDetails = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { enterpriseId } = props.match.params;
    //console.log(props);
    const payload = {
      params: {
        enterpriseId,
      },
    };
    dispatch(getEnterpriseDetailsById(payload));
  }, []);

  const enterpriseDetails = useSelector(
    (state) => state.enterprise.enterpriseDetails
  );
  const renderHead = (item, ind) => {
    return <th key={ind}>{item}</th>;
  };
  const routes = {
    header: [
      "Nơi khởi hành",
      "Nơi đến",
      "Giờ khởi hành",
      "Số giờ di chuyển",
      "Tùy chọn",
    ],
    body: [],
  };

  const renderRoutes = (routes) => {
    let myRoutes = [];
    for (let route of routes) {
      myRoutes.push(
        <tr>
          <td>{route.startLocation}</td>
          <td>{route.endLocation}</td>
          <td>{route.startTime}</td>
          <td>{route.totalTime}</td>
          <td>
            <button
              className="edit"
              onClick={() => {
                //handleModalShow("Edit", route);
              }}
            >
              Edit
            </button>
            <button
              className="delete"
              onClick={() => {
                //delRoute(route);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    }
    return myRoutes;
  };

  const vehicles = {
    header: ["Biển số", "Số ghế", "Chất lượng", "Tùy chọn"],
    body: [],
  };

  const renderVehicles = (vehicles) => {
    let myVehicles = [];
    for (let vehicle of vehicles) {
      myVehicles.push(
        <tr>
          <td>{vehicle.lisensePlate}</td>
          <td>{vehicle.totalSeat}</td>
          <td>{vehicle.quality}</td>
          <td>
            <button
              className="edit"
              onClick={() => {
                //handleModalShow("Edit", route);
              }}
            >
              Edit
            </button>
            <button
              className="delete"
              onClick={() => {
                //delRoute(route);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    }
    return myVehicles;
  };
  const steersmans = {
    header: ["Họ tên", "Số điện thoại", "Vị trí", "Tùy chọn"],
    body: [],
  };

  const renderSteersmans = (steersmans) => {
    let mySteersmans = [];
    for (let steersman of steersmans) {
      mySteersmans.push(
        <tr>
          <td>
            {steersman.idUser.firstName} {steersman.idUser.lastName}
          </td>
          <td>{steersman.idUser.contactNumber}</td>
          <td>{steersman.position}</td>
          <td>
            <button
              className="edit"
              onClick={() => {
                //handleModalShow("Edit", route);
              }}
            >
              Edit
            </button>
            <button
              className="delete"
              onClick={() => {
                //delRoute(route);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    }
    return mySteersmans;
  };

  if (Object.keys(enterpriseDetails).length === 0) {
    return null;
  }

  return (
    <Layout sidebar>
      <h1>Nhà xe {enterpriseDetails.enterprise.name}</h1>
      <h2>Địa chỉ: {enterpriseDetails.enterprise.address}</h2>
      {/* <Button
        onClick={() => {
          console.log(enterpriseDetail.routes);
        }}
      >
        Clickme
      </Button> */}

      <div className="routes">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__header">
                <h3>Các chuyến xe</h3>
              </div>
              <div className="card__body">
                <Table
                  headData={routes.header}
                  renderHead={(item, ind) => renderHead(item, ind)}
                  render2Body={() => renderRoutes(enterpriseDetails.routes)}
                />
              </div>
              <div className="card__footer"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card__header">
          <h3>Các phương tiện</h3>
        </div>
        <div className="card__body">
          <Table
            headData={vehicles.header}
            renderHead={(item, ind) => renderHead(item, ind)}
            render2Body={() => renderVehicles(enterpriseDetails.vehicles)}
          />
        </div>
        <div className="card__footer"></div>
      </div>

      <div className="card">
        <div className="card__header">
          <h3>Các tài xế</h3>
        </div>
        <div className="card__body">
          <Table
            headData={steersmans.header}
            renderHead={(item, ind) => renderHead(item, ind)}
            render2Body={() => renderSteersmans(enterpriseDetails.steersmans)}
          />
        </div>
        <div className="card__footer"></div>
      </div>
    </Layout>
  );
};
