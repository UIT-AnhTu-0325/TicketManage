import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEnterpriseDetailsById } from "../../actions";
import { Layout } from "../../components/Layout";

/**
 * @author
 * @function EnterpriseDetails
 **/

export const EnterpriseDetails = (props) => {
  const dispatch = useDispatch();
  const enterprise = useSelector((state) => state.enterprise);
  useEffect(() => {
    const { enterpriseId } = props.match.params;
    //console.log(props);
    const payload = {
      params: {
        enterpriseId,
      },
    };
    dispatch(getEnterpriseDetailsById(payload));
  }, []);

  return (
    <Layout sidebar>
      <div>{JSON.stringify(enterprise.enterpriseDetail.enterprise)}</div>
    </Layout>
  );
};
