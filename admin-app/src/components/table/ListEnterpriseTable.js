import { useDispatch, useSelector } from "react-redux";

import React, { useEffect, useState } from "react";
import {
  addEnterprise,
  deleteEnterprise,
  editEnterprise,
  getAllCities,
  getAllEnterprises,
} from "../../actions";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Table } from "./Table";
import { Input } from "../UI/Input";

/**
 * @author
 * @function ListEnterpriseTable
 **/

export const ListEnterpriseTable = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEnterprises());
    dispatch(getAllCities());
  }, []);
  const state_enterprise = useSelector((state) => state.enterprise);
  const state_city = useSelector((state) => state.city);
  const initEnterprise = () => {
    return {
      _id: "",
      name: "",
      address: "",
    };
  };
  const [enterprise, setEnterprise] = useState(initEnterprise);

  const [modalShow, setModalShow] = useState(false);
  const [modalFlag, setModalFlag] = useState("Add");
  const [modalTitle, setModalTitle] = useState();

  const handleModalShow = (iFlag, enterprise = []) => {
    if (iFlag === "Add") {
      setModalFlag("Add");
      setModalTitle("Add Route");
    } else {
      setModalFlag("Edit");
      setModalTitle("Edit Route");
      setEnterprise(enterprise);
    }
    setModalShow(true);
  };
  const handleModalSave = () => {
    const form = enterprise;
    if (modalFlag === "Add") {
      delete form._id;
      dispatch(addEnterprise(form));
    } else {
      dispatch(editEnterprise(form));
    }
    setEnterprise(initEnterprise);
    setModalShow(false);
  };
  const handleModalClose = () => {
    setEnterprise(initEnterprise);
    setModalShow(false);
  };

  const delEnterprise = (selectedEnt) => {
    const form = {
      _id: selectedEnt._id,
    };
    dispatch(deleteEnterprise(form));
  };

  const enterprises = {
    header: ["Nhà xe", "Địa điểm", "Tùy chọn"],
    body: [],
  };
  const renderOrderHead = (item, ind) => <th key={ind}>{item}</th>;

  const renderEnterprises = (enterprises) => {
    let myEnterprises = [];
    for (let enterprise of enterprises) {
      myEnterprises.push(
        <tr>
          <td>{enterprise.name}</td>
          <td>{enterprise.address}</td>
          <td>
            <button
              className="edit"
              color="warning"
              onClick={() => {
                handleModalShow("Edit", enterprise);
              }}
            >
              Sửa
            </button>
            <button
              className="delete"
              color="danger"
              onClick={() => delEnterprise(enterprise)}
            >
              Xóa
            </button>
            <Link to={`enterprises/${enterprise._id}/informations`}>
              <Button type="button" onClick={() => {}}>
                Chi tiết
              </Button>
            </Link>
          </td>
        </tr>
      );
    }
    return myEnterprises;
  };

  return (
    <div className="enterprise">
      <Modal show={modalShow} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={enterprise.name}
            placeholder={`Enterprise Name`}
            onChange={(e) =>
              setEnterprise({ ...enterprise, name: e.target.value })
            }
          ></Input>
          <select
            className="form-control"
            value={enterprise.address}
            onChange={(e) =>
              setEnterprise({ ...enterprise, address: e.target.value })
            }
          >
            <option>Address</option>
            {state_city.cities.map((option) => (
              <option key={option._id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
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

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__header">
              <h3>Quản lý nhà xe</h3>
              <Button
                onClick={() => {
                  handleModalShow("Add");
                }}
              >
                Thêm nhà xe
              </Button>
            </div>
            <div className="card__body">
              <Table
                headData={enterprises.header}
                renderHead={(item, ind) => renderOrderHead(item, ind)}
                render2Body={() =>
                  renderEnterprises(state_enterprise.enterprises)
                }
              />
            </div>
            <div className="card__footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
