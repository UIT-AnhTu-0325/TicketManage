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
      <h1>Nhà xe {enterpriseDetails.enterprise.name}</h1>
      <h2>Địa chỉ: {enterpriseDetails.enterprise.address}</h2>
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
      ></ListVehicleTable>
      <ListSteersmanTable
        listSteersman={enterpriseDetails.steersmans}
      ></ListSteersmanTable>
    </Layout>
  );
};
