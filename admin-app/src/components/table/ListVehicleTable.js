import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addVehicle,
  deleteVehicle,
  editVehicle,
} from "../../actions/vehicle.actions";
import { Input } from "../UI/Input";
import { Table } from "./Table";

/**
 * @author
 * @function ListVehicleTable
 **/

export const ListVehicleTable = (props) => {
  const dispatch = useDispatch();
  const listVehicle = props.listVehicle;
  const listEnterprise = props.listEnterprise;
  const initVehicle = () => {
    return {
      _id: "",
      lisensePlate: "",
      idEnterprise: "",
      totalSeat: 0,
      quality: "",
    };
  };

  const [vehicle, setVehicle] = useState(initVehicle);
  const [modalShow, setModalShow] = useState(false);
  const [modalFlag, setModalFlag] = useState("Add");
  const [modalTitle, setModalTitle] = useState();

  const handleModalShow = (iFlag, vehicle = []) => {
    if (iFlag === "Add") {
      setModalFlag("Add");
      setModalTitle("Thêm phương tiện");
    } else {
      setModalFlag("Edit");
      setModalTitle("Sửa phương tiện");
      setVehicle(vehicle);
    }
    setModalShow(true);
  };
  const handleModalSave = () => {
    const form = vehicle;
    if (modalFlag === "Add") {
      delete form._id;
      dispatch(addVehicle(form));
    } else {
      dispatch(editVehicle(form));
    }
    setVehicle(initVehicle);
    if (props.type !== "Main") {
      if (props.reLoadEnterpriseDetails());
    }
    setModalShow(false);
  };
  const handleModalClose = () => {
    setVehicle(initVehicle);
    setModalShow(false);
  };

  const delVehicle = (selectedVeh) => {
    const form = {
      _id: selectedVeh._id,
    };
    dispatch(deleteVehicle(form));
    if (props.type !== "Main") {
      props.reLoadEnterpriseDetails();
    }
  };

  const vehicles = {
    header: ["Biển số", "Số ghế", "Chất lượng", "Tùy chọn"],
    body: [],
  };
  const renderHead = (item, ind) => {
    return <th key={ind}>{item}</th>;
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
                handleModalShow("Edit", vehicle);
              }}
            >
              Sửa
            </button>
            <button
              className="delete"
              onClick={() => {
                delVehicle(vehicle);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    }
    return myVehicles;
  };

  return (
    <div className="card">
      <Modal show={modalShow} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select
            className="form-control"
            value={vehicle.idEnterprise}
            onChange={(e) =>
              setVehicle({ ...vehicle, idEnterprise: e.target.value })
            }
          >
            <option>Enterprise</option>
            {listEnterprise.enterprises.map((option) => (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            ))}
          </select>
          <Input
            value={vehicle.lisensePlate}
            placeholder={`Biển số`}
            onChange={(e) =>
              setVehicle({ ...vehicle, lisensePlate: e.target.value })
            }
          ></Input>
          <Input
            value={vehicle.totalSeat}
            placeholder={`Số ghế`}
            onChange={(e) =>
              setVehicle({ ...vehicle, totalSeat: e.target.value })
            }
          ></Input>
          <Input
            value={vehicle.quality}
            placeholder={`Chất lượng`}
            onChange={(e) =>
              setVehicle({ ...vehicle, quality: e.target.value })
            }
          ></Input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleModalSave}>
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="card__header">
        <h3>Các phương tiện</h3>
        <Button
          onClick={() => {
            handleModalShow("Add");
          }}
        >
          Thêm phương tiện
        </Button>
      </div>
      <div className="card__body">
        <Table
          headData={vehicles.header}
          renderHead={(item, ind) => renderHead(item, ind)}
          render2Body={() => renderVehicles(listVehicle)}
        />
      </div>
      <div className="card__footer"></div>
    </div>
  );
};
