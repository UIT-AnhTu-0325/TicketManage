import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities, getAllEnterprises } from "../../actions";
import { Layout } from "../../components/Layout";
import { ListEnterpriseTable } from "../../components/table/ListEnterpriseTable";

/**
 * @author
 * @function Enterprise
 **/

export const Enterprise = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEnterprises());
    dispatch(getAllCities());
  }, []);
  const state_enterprise = useSelector((state) => state.enterprise);
  const state_city = useSelector((state) => state.city);
  return (
    <Layout sidebar>
      <ListEnterpriseTable
        listEnterprise={state_enterprise.enterprises}
        listCity={state_city.cities}
      ></ListEnterpriseTable>
    </Layout>
  );
};
