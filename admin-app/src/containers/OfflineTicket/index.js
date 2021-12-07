import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../../actions";
import { Layout } from "../../components/Layout";
import { InputTitleLeft } from "../../components/UI/inputTitleLeft/InputTitleLeft";
import { SelectBox } from "../../components/UI/select/SelectBox";

/**
 * @author
 * @function OfflineTicket
 **/

export const OfflineTicket = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCities());
  }, []);
  const state_city = useSelector((state) => state.city);
  const initOffTicket = () => {
    return {
      _id: "",
      idTicket: "",
      idUser: "",
      name: "",
      contactNumber: "",
      dob: "",
      address: "",
      seatNumber: "",
      getOn: "",
      getOff: "",
      canceled: "",
    };
  };
  const [offTicket, setOffTicket] = useState(initOffTicket);
  return (
    <Layout sidebar>
      <div>Dat ve offline</div>
      <InputTitleLeft
        title="Họ và tên"
        value={offTicket.name}
        placeholder={``}
        onChange={(e) => {
          setOffTicket({ ...offTicket, name: e.target.value });
        }}
      />
      <InputTitleLeft
        title="Số điện thoại"
        value={offTicket.contactNumber}
        placeholder={``}
        onChange={(e) => {
          setOffTicket({ ...offTicket, contactNumber: e.target.value });
        }}
      />
      <InputTitleLeft
        title="Ngày sinh"
        value={offTicket.dob}
        placeholder={``}
        onChange={(e) => {
          setOffTicket({ ...offTicket, dob: e.target.value });
        }}
      />
      <InputTitleLeft
        title="Địa chỉ"
        value={offTicket.address}
        placeholder={``}
        onChange={(e) => {
          setOffTicket({ ...offTicket, address: e.target.value });
        }}
      />

      <SelectBox
        value={offTicket.getOff}
        onChange={(e) => {
          setOffTicket({ ...offTicket, getOff: e.target.value });
        }}
        list={state_city.cities}
        type="AddressSelect"
        title="Nơi trả"
      />
    </Layout>
  );
};
