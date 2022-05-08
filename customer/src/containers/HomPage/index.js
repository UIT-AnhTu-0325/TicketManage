import React, { useEffect } from "react";
import { LayoutCustomer } from "../../components/Layout";
import { MainSearch } from "../../components/MainSearch";
import { useDispatch } from "react-redux";
import { getAll } from "../../action/route";
import { MainContent } from "../../components/MainSearchComponents/MainContent";
import { Footer } from "../../components/Footer";
import MainPage from "../../layouts/mainPage/MainPage";
import PopularRoute from "../../layouts/mainPage/PopularRoute";
import Iframe from "react-iframe";

/**
 * @author
 * @function HomePage
 **/

export const HomePage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);
  return (
    <div className="bg-gray-200 dark:!bg-black !transition-colors !duration-500 ">
      <LayoutCustomer></LayoutCustomer>

      <MainPage />

      <PopularRoute />

      <MainSearch></MainSearch>

      <MainContent />

      <Footer />
    </div>
  );
};
