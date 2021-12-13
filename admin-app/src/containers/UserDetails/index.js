import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailById } from "../../actions";
import { UserDetail } from "../../components/customer/UserDetail";
import { Layout } from "../../components/Layout";
import { AdminDetailTable } from "../../components/table/AdminDetailTable";

/**
 * @author
 * @function UserDetails
 **/

export const UserDetails = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    loadUserDetail();
  }, []);

  const loadUserDetail = () => {
    const { userId } = props.match.params;
    const payload = {
      params: {
        userId,
      },
    };
    dispatch(getUserDetailById(payload));
  };
  const state_userDetail = useSelector((state) => state.user.userDetail);
  console.log(state_userDetail);
  return (
    <>
      {state_userDetail.role === "admin" ? (
        <Layout sidebar>
          <div className="persional-info-identity">
            <div>Day la thong tin ca nhan - manv</div>
            <div>Day la thong tin ca nhan - ten</div>
            <div>Day la thong tin ca nhan - gioi tinh </div>
            <div>Day la thong tin ca nhan - so dien thoai</div>
          </div>
          <AdminDetailTable user={state_userDetail}></AdminDetailTable>
        </Layout>
      ) : (
        <UserDetail userDetails={state_userDetail}></UserDetail>
      )}
    </>
  );
};
