import React from "react";
import { Layout } from "../../components/Layout";

/**
 * @author
 * @function DashBoard
 **/

export const DashBoard = (props) => {
  return (
    <div>
      <Layout sidebar dashboard="true"></Layout>
    </div>
  );
};
