import React from "react";
import { Layout } from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

/**
 * @author
 * @function DashBoard
 **/

export const DashBoard = (props) => {
  const auth = useSelector((state) => state.auth);
  if (auth.authenticate) {
    return <Redirect to={`/signin`}></Redirect>;
  }
  return (
    <div>
      <Layout sidebar dashboard="true"></Layout>
    </div>
  );
};
