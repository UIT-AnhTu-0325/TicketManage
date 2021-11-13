import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities, getAllEnterprises, getAllRoutes } from "../../actions";

import { Layout } from "../../components/Layout";

import { ListRouteTable } from "../../components/table/ListRouteTable";

/**
 * @author
 * @function Routes
 **/

export const Routes = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRoutes());
    dispatch(getAllEnterprises());
    dispatch(getAllCities());
  }, []);
  const state_route = useSelector((state) => state.route);
  const state_enterprise = useSelector((state) => state.enterprise);
  const state_city = useSelector((state) => state.city);

  if (
    Object.keys(state_route).length === 0 ||
    Object.keys(state_enterprise).length === 0 ||
    Object.keys(state_city).length === 0
  ) {
    return null;
  }

  return (
    <Layout sidebar>
      <ListRouteTable
        listRoute={state_route.routes}
        listEnterprise={state_enterprise}
        listCity={state_city}
        type="Main"
      ></ListRouteTable>
    </Layout>
  );
};
