import React, { useContext } from "react";
import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";
import SearchPage from "./SearchPage";
import UserContext from "../useContext/UserContext";

const MainOutlet = () => {
  const { searchItem } = useContext(UserContext);
  return (
    <>
      <Header />
      {searchItem === "" ? <Outlet /> : <SearchPage />}
      <Footer />
    </>
  );
};

export default MainOutlet;
