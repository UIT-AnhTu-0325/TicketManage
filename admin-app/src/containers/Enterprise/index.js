import React from "react";
import { Layout } from "../../components/Layout";
import { ListEnterpriseTable } from "../../components/table/ListEnterpriseTable";

/**
 * @author
 * @function Enterprise
 **/

export const Enterprise = (props) => {
  return (
    <Layout sidebar>
      <ListEnterpriseTable></ListEnterpriseTable>
    </Layout>
  );
};
