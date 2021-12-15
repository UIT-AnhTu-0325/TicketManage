import React, { useEffect, useState } from "react";
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

  const [searchTermR, setSearchTermR] = useState("");
  const [searchResultsR, setSearchResultsR] = useState([]);
  const [searchTermV, setSearchTermV] = useState("");
  const [searchResultsV, setSearchResultsV] = useState([]);
  const [searchTermS, setSearchTermS] = useState("");
  const [searchResultsS, setSearchResultsS] = useState([]);

  const enterpriseDetails = useSelector(
    (state) => state.enterprise.enterpriseDetails
  );

  if (Object.keys(enterpriseDetails).length === 0) {
    return null;
  }

  const searchHandlerR = (searchTermR) => {
    //console.log(searchTermR)
    setSearchTermR(searchTermR);
    if (searchTermR !== "") {
      const newRoutes = enterpriseDetails.routes.filter((route) => {
        return Object.values(route)
          .join(" ")
          .toLowerCase()
          .includes(searchTermR.toLowerCase());
      });
      //console.log(Object.values(enterpriseDetails.routes))
      setSearchResultsR(newRoutes);
      //console.log(Object.values(newRoutes))
    } else {
      setSearchResultsR(enterpriseDetails.routes);
    }
  };

  const searchHandlerV = (searchTermV) => {
    //console.log(searchTermV)
    setSearchTermV(searchTermV);
    if (searchTermV !== "") {
      const newVehicles = enterpriseDetails.vehicles.filter((vehicle) => {
        return Object.values(vehicle)
          .join(" ")
          .toLowerCase()
          .includes(searchTermV.toLowerCase());
      });
      //console.log(Object.values(enterpriseDetails.vehicles))
      setSearchResultsV(newVehicles);
      //console.log(Object.values(newVehicles))
    } else {
      setSearchResultsV(enterpriseDetails.vehicles);
    }
  };
  const searchHandlerS = (searchTermS) => {
    //console.log(searchTermS)
    setSearchTermS(searchTermS);
    if (searchTermS !== "") {
      const newSteersmans = enterpriseDetails.steersmans.filter((steersman) => {
        return Object.values(steersman)
          .join(" ")
          .toLowerCase()
          .includes(searchTermS.toLowerCase());
      });
      //console.log(Object.values(enterpriseDetails.steersmans))
      setSearchResultsS(newSteersmans);
      //console.log(Object.values(newSteersmans))
    } else {
      setSearchResultsS(enterpriseDetails.steersmans);
    }
  };

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
        listRoute={
          searchTermR.length < 1 ? enterpriseDetails.routes : searchResultsR
        }
        listEnterprise={state_enterprise}
        listCity={state_city}
        type="Other"
        reLoadEnterpriseDetails={loadEnterpriseDetails}
        term={searchTermR}
        searchKeyword={searchHandlerR}
      ></ListRouteTable>

      <ListVehicleTable
        listVehicle={
          searchTermV.length < 1 ? enterpriseDetails.vehicles : searchResultsV
        }
        listEnterprise={state_enterprise}
        type="Other"
        reLoadEnterpriseDetails={loadEnterpriseDetails}
        term={searchTermV}
        searchKeyword={searchHandlerV}
      ></ListVehicleTable>

      <ListSteersmanTable
        idEnterprise={enterpriseDetails.enterprise._id}
        listSteersman={
          searchTermS.length < 1 ? enterpriseDetails.steersmans : searchResultsS
        }
        listVehicle={enterpriseDetails.vehicles}
        type="Other"
        reLoadEnterpriseDetails={loadEnterpriseDetails}
        term={searchTermS}
        searchKeyword={searchHandlerS}
      ></ListSteersmanTable>
    </Layout>
  );
};
