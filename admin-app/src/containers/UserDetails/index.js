import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailById } from "../../actions";
import { UserDetail } from "../../components/customer/UserDetail";
import { Layout } from "../../components/Layout";

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
  //console.log(state_userDetail);
  return (
    <Layout sidebar>
      <UserDetail userDetails={state_userDetail}></UserDetail>
    </Layout>
  );
};
