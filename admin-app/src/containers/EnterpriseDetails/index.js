import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCities,
  getAllEnterprises,
  getEnterpriseDetailsById,
} from "../../actions";
import { Layout } from "../../components/Layout";
import { ListRouteTable } from "../../components/table/ListRouteTable";
import { ListSteersmanTable } from "../../components/table/ListSteersmanTable";
import { ListVehicleTable } from "../../components/table/ListVehicleTable";
import { Table } from "../../components/table/Table";

import busImg from "../../asset/img/bus.png";
import BreakCrumb from "../../components/breakcrumb/BreakCrumb";

/**
 * @author
 * @function EnterpriseDetails
 **/

export const EnterpriseDetails = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    loadEnterpriseDetails();
    dispatch(getAllEnterprises());
    dispatch(getAllCities());
  }, []);

  const loadEnterpriseDetails = () => {
    const { enterpriseId } = props.match.params;
    //console.log(props);
    const payload = {
      params: {
        enterpriseId,
      },
    };
    dispatch(getEnterpriseDetailsById(payload));
  };

  const state_enterprise = useSelector((state) => state.enterprise);

  const state_city = useSelector((state) => state.city);

  const enterpriseDetails = useSelector(
    (state) => state.enterprise.enterpriseDetails
  );

  if (Object.keys(enterpriseDetails).length === 0) {
    return null;
  }

  return (
    <Layout sidebar>
      <div className="enterprise-info">
        <div className="image">
          <img src={busImg} alt="" />
        </div>
        <div className="info">
          <h1>Nhà xe {enterpriseDetails.enterprise.name}</h1>
          <p>Địa chỉ: {enterpriseDetails.enterprise.address}</p>
          <p>Hotline: {enterpriseDetails.enterprise.hotline}</p>
        </div>
      </div>
      {/* <Button
        onClick={() => {
          console.log(enterpriseDetail.routes);
        }}
      >
        Clickme
      </Button> */}

      <ListRouteTable
        listRoute={enterpriseDetails.routes}
        listEnterprise={state_enterprise}
        listCity={state_city}
        type="Other"
        reLoadEnterpriseDetails={loadEnterpriseDetails}
      ></ListRouteTable>

      <ListVehicleTable
        listVehicle={enterpriseDetails.vehicles}
        listEnterprise={state_enterprise}
        type="Other"
        reLoadEnterpriseDetails={loadEnterpriseDetails}
      ></ListVehicleTable>

      <ListSteersmanTable
        listEnterprise={state_enterprise}
        listSteersman={enterpriseDetails.steersmans}
        type="Other"
        reLoadEnterpriseDetails={loadEnterpriseDetails}
      ></ListSteersmanTable>
    </Layout>
  );
};
