import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
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
import { InputTitleLeft } from "../UI/inputTitleLeft/InputTitleLeft";
import { SelectBox } from "../UI/select/SelectBox";

/**
 * @author
 * @function ListEnterpriseTable
 **/

export const ListEnterpriseTable = (props) => {
  const dispatch = useDispatch();
  const listEnterprise = props.listEnterprise;
  const listCity = props.listCity;

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
  const [editData, setEditData] = useState(false);

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
      swal({
        title: "Thêm thành công",
        text: "Bạn đã thêm nhà xe thành công",
        icon: "success",
        button: "OK",
      });
    } else {
      dispatch(editEnterprise(form));
      swal({
        title: "Sửa thành công",
        text: "Bạn đã sửa nhà xe thành công",
        icon: "success",
        button: "OK",
      });
    }
    setEnterprise(initEnterprise);
    setModalShow(false);
    resetCss();
  };
  const handleModalClose = () => {
    setEnterprise(initEnterprise);
    setModalShow(false);
    resetCss();
  };

  //front end
  const resetCss = () => {
    setEditData(false);
  };
  const delEnterprise = (selectedEnt) => {
    const form = {
      _id: selectedEnt._id,
    };
    swal({
      title: "Bạn chắc chắn xóa",
      text: "Bạn có chắc sẽ xóa nhà xe này không",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Nhà xe đã được xóa thành công!", {
          icon: "success",
        });
        dispatch(deleteEnterprise(form));
      } else {
        swal("Nhà xe vẫn chưa bị xóa!");
      }
    });
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
              <i class="far fa-edit"></i>
            </button>
            <button
              className="delete"
              color="danger"
              onClick={() => delEnterprise(enterprise)}
            >
              <i class="far fa-trash-alt"></i>
            </button>
            <Link to={`enterprises/${enterprise._id}/informations`}>
              <button className="detail" onClick={() => {}}>
                Chi tiết
              </button>
            </Link>
          </td>
        </tr>
      );
    }
    return myEnterprises;
  };

  return (
    <div className="enterprise right-content-fixsize">
      <Modal show={false} onHide={handleModalClose}>
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
            {listCity.map((option) => (
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

      <div
        className={
          modalShow ? "add-modal__wrapper active" : "add-modal__wrapper"
        }
      >
        <div className={modalShow ? "add-modal active" : "add-modal"}>
          <div className="add-modal__header">Add Enterprise</div>

          <div className="add-modal__body">
            <div className="input-enterprise-name">
              <InputTitleLeft
                title="Enterprise Name"
                value={enterprise.name}
                placeholder={``}
                onChange={(e) => {
                  setEnterprise({ ...enterprise, name: e.target.value });
                  if (e.target.value != "" && enterprise.address) {
                    setEditData(true);
                  } else {
                    setEditData(false);
                  }
                }}
              />

              <SelectBox
                value={enterprise.address}
                onChange={(e) => {
                  setEnterprise({ ...enterprise, address: e.target.value });
                  if (e.target.value != "" && enterprise.name) {
                    setEditData(true);
                  } else {
                    setEditData(false);
                  }
                }}
                listCity={listCity}
                title="Address"
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
              <h3>Quản lý nhà xe</h3>
              <button
                className="add-enterprise"
                onClick={() => {
                  handleModalShow("Add");
                }}
              >
                Thêm nhà xe
              </button>
            </div>
            <div className="card__body">
              <Table
                headData={enterprises.header}
                renderHead={(item, ind) => renderOrderHead(item, ind)}
                render2Body={() => renderEnterprises(listEnterprise)}
              />
            </div>
            <div className="card__footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
