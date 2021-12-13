import React, { useState, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addSteersman } from "../../actions/steersman.actions";
import { Input } from "../UI/Input";
import { InputTitleLeft } from "../UI/inputTitleLeft/InputTitleLeft";
import { SelectBox } from "../UI/select/SelectBox";
import { Table } from "./Table";

/**
 * @author
 * @function ListSteersmanTable
 **/

export const ListSteersmanTable = (props) => {
  const dispatch = useDispatch();
  const inputEl = useRef("");
  const listSteersman = props.listSteersman;
  const listEnterprise = props.listEnterprise;
  const [editData, setEditData] = useState(false);
  const checkEditData = () => {
    if (
      steersman.idEnterprise &&
      steersman.firstName &&
      steersman.lastName &&
      steersman.gender &&
      steersman.email &&
      steersman.contactNumber
    ) {
      setEditData(true);
    } else {
      setEditData(false);
    }
  };
  const term = props.term;
  const initSteersman = () => {
    return {
      _id: "",
      idEnterprise: "",
      position: "",
      firstName: "",
      lastName: "",
      email: "",
      role: "steersman",
      username: "driver",
      password: "111111",
      gender: "",
      contactNumber: "",
    };
  };
  const [steersman, setSteersman] = useState(initSteersman);

  const [modalShow, setModalShow] = useState(false);
  const [modalFlag, setModalFlag] = useState("Add");
  const [modalTitle, setModalTitle] = useState();

  const handleModalShow = (iFlag, steersman = []) => {
    if (iFlag === "Add") {
      setModalFlag("Add");
      setModalTitle("Thêm tài xế");
    } else {
      setModalFlag("Edit");
      setModalTitle("Sửa tài xế");
      setSteersman(steersman);
    }
    setModalShow(true);
  };
  const handleModalSave = () => {
    // if (modalFlag === "Add") {
    //   createUsername();
    // }
    const form = steersman;
    //console.log(form);
    if (modalFlag === "Add") {
      delete form._id;
      dispatch(addSteersman(form));
    } else {
      //dispatch(editRoute(form));
    }
    setSteersman(initSteersman);
    if (props.type !== "Main") {
      if (props.reLoadEnterpriseDetails());
    }
    setModalShow(false);
  };
  const handleModalClose = () => {
    setSteersman(initSteersman);
    setModalShow(false);
  };

  const createUsername = () => {
    setSteersman({
      ...steersman,
      username: steersman.firstName + steersman.lastName + "123",
    });
    //console.log(steersman.username);
  };

  const findEnterpriseName = (idEnterprise) => {
    for (let ent of listEnterprise.enterprises) {
      if (ent._id === idEnterprise) return ent.name;
    }
    return "";
  };

  const positions = [
    { _id: 1, value: "main", show: "Lái chính" },
    { _id: 2, value: "helper", show: "Lái phụ" },
  ];

  const genders = [
    { _id: 1, value: "Male", show: "Nam" },
    { _id: 2, value: "Female", show: "Nữ" },
  ];

  const steersmans = {
    header: ["Họ tên", "Số điện thoại", "Vị trí", "Tùy chọn"],
    body: [],
  };
  const renderHead = (item, ind) => {
    return <th key={ind}>{item}</th>;
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
              <i class="far fa-edit"></i>
            </button>
            <button
              className="delete"
              onClick={() => {
                //delRoute(route);
              }}
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      );
    }
    return mySteersmans;
  };

  const getSearchTerm = () => {
    //console.log(inputEl.current.value)
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div>
      <Modal show={false} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select
            className="form-control"
            value={steersman.idEnterprise}
            onChange={(e) =>
              setSteersman({ ...steersman, idEnterprise: e.target.value })
            }
          >
            <option>Doanh nghiệp</option>
            {listEnterprise.enterprises.map((option) => (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            ))}
          </select>
          <Input
            value={steersman.firstName}
            placeholder={`Họ`}
            onChange={(e) =>
              setSteersman({ ...steersman, firstName: e.target.value })
            }
          ></Input>
          <Input
            value={steersman.lastName}
            placeholder={`Tên`}
            onChange={(e) =>
              setSteersman({
                ...steersman,
                lastName: e.target.value,
                username: steersman.firstName + steersman.lastName + "123",
              })
            }
          ></Input>
          <select
            className="form-control"
            value={steersman.gender}
            onChange={(e) =>
              setSteersman({ ...steersman, gender: e.target.value })
            }
          >
            <option>Giới tính</option>
            {genders.map((option) => (
              <option key={option._id} value={option.value}>
                {option.show}
              </option>
            ))}
          </select>
          <Input
            value={steersman.email}
            placeholder={`Email`}
            onChange={(e) =>
              setSteersman({ ...steersman, email: e.target.value })
            }
          ></Input>
          <Input
            value={steersman.contactNumber}
            placeholder={`Số điện thoại`}
            onChange={(e) =>
              setSteersman({ ...steersman, contactNumber: e.target.value })
            }
          ></Input>
          <select
            className="form-control"
            value={steersman.position}
            onChange={(e) =>
              setSteersman({ ...steersman, position: e.target.value })
            }
          >
            <option>Vị trí</option>
            {positions.map((option) => (
              <option key={option._id} value={option.value}>
                {option.show}
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

      {/*   MODAL */}
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
                type="commonID"
                value={steersman.idEnterprise}
                onChange={(e) => {
                  setSteersman({ ...steersman, idEnterprise: e.target.value });
                  checkEditData();
                }}
                list={listEnterprise.enterprises}
                title="Doanh nghiệp"
              />

              <InputTitleLeft
                title="Họ tên"
                placeholder={``}
                onChange={(e) => {
                  if (e.target.value.split(" ").length > 1)
                    setSteersman({
                      ...steersman,
                      firstName: e.target.value.split(" ")[0],
                      lastName: e.target.value.substring(
                        e.target.value.split(" ")[1].length,
                        e.target.value.length
                      ),
                    });

                  checkEditData();
                }}
              />
              {/* 
              <InputTitleLeft
                title="Tên"
                value={steersman.lastName}
                placeholder={``}
                onChange={(e) => {
                  setSteersman({
                    ...steersman,
                    lastName: e.target.value,
                    username: steersman.firstName + steersman.lastName + "123",
                  });
                  checkEditData();
                }}
              /> */}

              <SelectBox
                type="gender"
                value={steersman.gender}
                onChange={(e) => {
                  setSteersman({ ...steersman, gender: e.target.value });
                  checkEditData();
                }}
                list={genders}
                title="Giới tính"
              />

              <InputTitleLeft
                title="Email"
                value={steersman.email}
                placeholder={``}
                onChange={(e) => {
                  setSteersman({ ...steersman, email: e.target.value });
                  checkEditData();
                }}
              />
              <InputTitleLeft
                title="Số điện thoại"
                value={steersman.contactNumber}
                placeholder={``}
                onChange={(e) => {
                  setSteersman({ ...steersman, contactNumber: e.target.value });
                  checkEditData();
                }}
              />

              <SelectBox
                type="gender"
                value={steersman.position}
                onChange={(e) => {
                  setSteersman({ ...steersman, position: e.target.value });
                  checkEditData();
                }}
                list={positions}
                title="Vị trí"
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

      <div className="card right-content-fixsize">
        <div className="card__header">
          <h3>Các tài xế</h3>
          <Button
            onClick={() => {
              handleModalShow("Add");
            }}
          >
            Thêm tài xế
          </Button>
        </div>
        <div className="ui-search">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Here"
            className="prompt"
            value={term}
            onChange={getSearchTerm}
          />
        </div>
        <div className="card__body">
          <Table
            headData={steersmans.header}
            renderHead={(item, ind) => renderHead(item, ind)}
            render2Body={() => renderSteersmans(listSteersman)}
          />
        </div>
        <div className="card__footer"></div>
      </div>
    </div>
  );
};
