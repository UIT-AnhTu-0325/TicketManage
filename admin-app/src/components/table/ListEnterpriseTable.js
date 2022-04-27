import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Table } from "./Table";
import { InputTitleLeft } from "../UI/inputTitleLeft/InputTitleLeft";
import { SelectBox } from "../UI/select/SelectBox";
import EnterpriseAction from "../../actions/enterprise.actions";
import { Action, ActionStatus, Active } from "../../helpers/AppConstants";
import { callSwal, simpleSwal } from "../../helpers/swal";
import swal from "sweetalert";

/**
 * @author Blinkcat
 * @function ListEnterpriseTable
 **/

export const ListEnterpriseTable = (props) => {
  const actionStatus = useSelector((state) => state.enterprise.status);

  const dispatch = useDispatch();

  const inputEl = useRef("");

  const { listEnterprise, listCity, term } = props;

  const initEnterprise = {
    _id: "",
    name: "",
    address: "",
    isActive: "yes",
    hotline: "",
  };

  const enterprises = {
    header: ["Enterprise", "Address", "Hotline", "Action"],
    body: [],
  };

  const [enterprise, setEnterprise] = useState(initEnterprise);
  const [modalShow, setModalShow] = useState(false);
  const [modalFlag, setModalFlag] = useState("Add");
  const [modalTitle, setModalTitle] = useState();
  const [editData, setEditData] = useState(false);

  //const [searchTerm, setSearchTerm] = useState("");

  const checkEditData = (targetValue, object) => {
    if (enterprise.name && enterprise.address && enterprise.hotline) {
      setEditData(true);
    } else {
      setEditData(false);
    }
  };

  const handleModalShow = (iFlag, enterprise = []) => {
    if (iFlag === Action.ADD) {
      setModalFlag(Action.ADD);

      setModalTitle("Add enterprise");
    } else {
      setModalFlag(Action.EDIT);

      setModalTitle("Edit enterprise");

      setEnterprise(enterprise);
    }
    setModalShow(true);
  };

  const handleModalSave = () => {
    const form = enterprise;

    if (modalFlag === Action.ADD) {
      delete form._id;

      dispatch(EnterpriseAction.addEnterprise(form));
    } else if (modalFlag === Action.EDIT) {
      dispatch(EnterpriseAction.editEnterprise(form));
    }

    actionStatus === ActionStatus.SUCCESS
      ? callSwal(
          "Success",
          `${modalFlag} enterprise successfully`,
          "success",
          "OK"
        )
      : callSwal("Fail", `${modalFlag} enterprise failed`, "error", "OK");

    reset();
  };
  const handleModalClose = () => {
    reset();
  };

  const reset = () => {
    setEditData(false);
    setEnterprise(initEnterprise);
    setModalShow(false);
  };

  const delEnterprise = (selectedEnt) => {
    var form = selectedEnt;

    callSwal(
      "Warning",
      `Are you sure to delete`,
      "warning",
      undefined,
      true,
      true
    ).then((willDelete) => {
      if (willDelete) {
        simpleSwal("Delete enterprise successfully", "success");

        form.isActive = "no";

        dispatch(EnterpriseAction.editEnterprise(form));
      } else {
        simpleSwal("No action", "warning");
      }
    });
  };

  const renderOrderHead = (item, ind) => <th key={ind}>{item}</th>;

  const renderEnterprises = (enterprises) => {
    let resultEnt = [];

    for (let enterprise of enterprises) {
      if (enterprise.isActive === Active.YES) {
        resultEnt.push(
          <tr>
            <td>{enterprise.name}</td>

            <td>{enterprise.address}</td>

            <td>{enterprise.hotline}</td>

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
                  Detail
                </button>
              </Link>
            </td>
          </tr>
        );
      }
    }
    return resultEnt;
  };

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div className="enterprise right-content-fixsize">
      <div
        className={
          modalShow ? "add-modal__wrapper active" : "add-modal__wrapper"
        }
      >
        <div className={modalShow ? "add-modal active" : "add-modal"}>
          <div className="add-modal__header">{modalTitle}</div>

          <div className="add-modal__body">
            <div className="input-enterprise-name">
              <InputTitleLeft
                title="Enterprise name"
                value={enterprise.name}
                placeholder={``}
                onChange={(e) => {
                  setEnterprise({ ...enterprise, name: e.target.value });
                  checkEditData();
                }}
              />

              <SelectBox
                value={enterprise.address}
                onChange={(e) => {
                  setEnterprise({ ...enterprise, address: e.target.value });
                  checkEditData();
                }}
                list={listCity}
                type="AddressSelect"
                title="Address"
              />

              <InputTitleLeft
                title="Hotline"
                type="number"
                value={enterprise.hotline}
                placeholder={``}
                onChange={(e) => {
                  setEnterprise({ ...enterprise, hotline: e.target.value });
                  checkEditData();
                }}
              />
            </div>
          </div>

          <div className="add-modal__footer">
            <button className="btn-cancel" onClick={handleModalClose}>
              {" "}
              Cancel
            </button>
            <button
              className="btn-save"
              disabled={!editData}
              onClick={handleModalSave}
            >
              {" "}
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__header">
              <h3>Enterprise manager</h3>
              <button
                className="add-enterprise"
                onClick={() => {
                  handleModalShow("Add");
                }}
              >
                Add enterprise
              </button>

              <div className="ui-search">
                <input
                  ref={inputEl}
                  type="text"
                  placeholder="Search"
                  className="prompt"
                  value={term}
                  onChange={getSearchTerm}
                />
              </div>
            </div>

            <div className="card__body">
              <Table
                headData={enterprises.header}
                renderHead={(item, ind) => renderOrderHead(item, ind)}
                render2Body={() =>
                  renderEnterprises(listEnterprise).length > 0 ? (
                    renderEnterprises(listEnterprise)
                  ) : (
                    <span className="no-result">No result were found</span>
                  )
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
