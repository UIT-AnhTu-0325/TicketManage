import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRoute, deleteRoute, editRoute } from "../../actions";
import { Button, Modal } from "react-bootstrap";
import { Input } from "../../components/UI/Input";
import { Table } from "../../components/table/Table";
import { Link } from "react-router-dom";
import { InputTitleLeft } from "../UI/inputTitleLeft/InputTitleLeft";
import { SelectBox } from "../UI/select/SelectBox";

/**
 * @author
 * @function ListRouteTable
 **/

export const ListRouteTable = (props) => {
  const dispatch = useDispatch();
  const listRoute = props.listRoute;
  const listEnterprise = props.listEnterprise;
  const listCity = props.listCity;
  const initRoute = () => {
    return {
      _id: "",
      idEnterprise: "",
      startLocation: "",
      endLocation: "",
      startTime: 0.0,
      totalTime: 0.0,
    };
  };
  const [route, setRoute] = useState(initRoute);

  const [modalShow, setModalShow] = useState(false);
  const [modalFlag, setModalFlag] = useState("Add");
  const [modalTitle, setModalTitle] = useState();
  const [editData, setEditData] = useState(false);

  const checkEditData = () => {
    if (
      route.idEnterprise &&
      route.startLocation &&
      route.endLocation &&
      route.startTime &&
      route.totalTime
    ) {
      setEditData(true);
    } else {
      setEditData(false);
    }
  };

  const handleModalShow = (iFlag, route = []) => {
    if (iFlag === "Add") {
      setModalFlag("Add");
      setModalTitle("Thêm tuyến đường");
    } else {
      setModalFlag("Edit");
      setModalTitle("Sửa tuyến đường");
      setRoute(route);
    }
    setModalShow(true);
  };
  const handleModalSave = () => {
    const form = route;
    if (modalFlag === "Add") {
      delete form._id;
      dispatch(addRoute(form));
    } else {
      dispatch(editRoute(form));
    }
    setRoute(initRoute);
    if (props.type !== "Main") {
      if (props.reLoadEnterpriseDetails());
    }
    setModalShow(false);
    resetCss();
  };
  const handleModalClose = () => {
    setRoute(initRoute);
    setModalShow(false);
    resetCss();
  };

  const resetCss = () => {
    setEditData(false);
  };

  const delRoute = (selectedRot) => {
    // const form = {
    //   _id: selectedRot._id,
    // };
    // dispatch(deleteRoute(form));
    //
    // => It's really del, not use
    //
    var form = selectedRot;
    form.isActive = "no";
    dispatch(editRoute(form));
    if (props.type !== "Main") {
      props.reLoadEnterpriseDetails();
    }
  };
  const findEnterpriseName = (idEnterprise) => {
    for (let ent of listEnterprise.enterprises) {
      if (ent._id === idEnterprise) return ent.name;
    }
    return "";
  };

  const routes = {
    header: [
      "Nơi khởi hành",
      "Nơi đến",
      "Nhà xe",
      "Giờ khởi hành",
      "Số giờ di chuyển",
      "Tùy chọn",
    ],
    body: [],
  };
  const renderHead = (item, ind) => {
    return <th key={ind}>{item}</th>;
  };
  const renderRoutes = (routes) => {
    let myRoutes = [];
    for (let route of routes) {
      if (route.isActive === "yes") {
        myRoutes.push(
          <tr>
            <td>{route.startLocation}</td>
            <td>{route.endLocation}</td>
            <td>{findEnterpriseName(route.idEnterprise)}</td>
            <td>{route.startTime}</td>
            <td>{route.totalTime}</td>
            <td>
              <button
                className="edit"
                onClick={() => {
                  handleModalShow("Edit", route);
                }}
              >
                <i class="far fa-edit"></i>
              </button>
              <button
                className="delete"
                onClick={() => {
                  delRoute(route);
                }}
              >
                <i class="far fa-trash-alt"></i>
              </button>
              {/* /routes/${route._id}/informations */}
              {/* /enterprises/${route.idEnterprise}/informations/routeinfo */}
              <Link
                to={
                  window.location.pathname === "/routes"
                    ? `/routes/${route._id}/informations`
                    : `/enterprises/${route.idEnterprise}/informations/${route._id}/routeinfo`
                }
              >
                <button className="detail" onClick={() => {}}>
                  Chi tiết
                </button>
              </Link>
            </td>
          </tr>
        );
      }
    }
    return myRoutes;
  };

  if (
    Object.keys(listRoute).length === 0 ||
    Object.keys(listEnterprise).length === 0 ||
    Object.keys(listCity).length === 0
  ) {
    return null;
  }

  return (
    <div className="routes">
      <div
        className={
          modalShow ? "add-modal__wrapper active" : "add-modal__wrapper"
        }
      >
        <div className={modalShow ? "add-modal active" : "add-modal"}>
          <div className="add-modal__header">{modalTitle}</div>

          <div className="add-modal__body">
            <div className="input-enterprise-name">
              <SelectBox
                value={route.startLocation}
                onChange={(e) => {
                  setRoute({ ...route, startLocation: e.target.value });
                  checkEditData();
                }}
                list={listCity.cities}
                title="Điểm đi"
              />

              <SelectBox
                value={route.endLocation}
                onChange={(e) => {
                  setRoute({ ...route, endLocation: e.target.value });
                  checkEditData();
                }}
                list={listCity.cities}
                title="Điểm đến"
              />

              <SelectBox
                value={route.idEnterprise}
                onChange={(e) => {
                  setRoute({ ...route, idEnterprise: e.target.value });
                  checkEditData();
                }}
                list={listEnterprise.enterprises}
                type="EnterpriseSelect"
                title="Nhà xe"
              />

              <InputTitleLeft
                title="Thời gian bắt đầu"
                value={route.startTime}
                placeholder={``}
                onChange={(e) => {
                  setRoute({ ...route, startTime: e.target.value });
                  checkEditData();
                }}
              />

              <InputTitleLeft
                title="Thời gian đi"
                value={route.totalTime}
                placeholder={``}
                onChange={(e) => {
                  setRoute({ ...route, totalTime: e.target.value });
                  checkEditData();
                }}
              />
            </div>
          </div>

          <div className="add-modal__footer">
            <button className="btn-cancel" onClick={handleModalClose}>
              {" "}
              Hủy bỏ
            </button>
            <button
              className="btn-save"
              disabled={!editData}
              onClick={handleModalSave}
            >
              {" "}
              Lưu lại
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__header">
              <h3>Quản lý tuyến đường</h3>
              <button
                onClick={() => {
                  handleModalShow("Add");
                }}
              >
                Thêm tuyến đường
              </button>
            </div>
            <div className="card__body">
              <Table
                headData={routes.header}
                renderHead={(item, ind) => renderHead(item, ind)}
                render2Body={() => renderRoutes(listRoute)}
              />
            </div>
            <div className="card__footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
