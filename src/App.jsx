import React from "react";
import { connect } from "react-redux";
import LeftSidebar from "./containers/LeftSidebar";
import TopBar from "./components/sections/TopBar";
import BaseLayoute from "./components/templates/BaseLayoute";
import Product from "./pages/Product";

function App(props) {
  return (
    <BaseLayoute header={TopBar} sidebar={<LeftSidebar/>}>
      <Product/>
    </BaseLayoute>
  );
}

const matStateToProps = (store) => {
  return {
    app: store.app,
  };
};

const mapDispatchToProps = {};

export default connect(matStateToProps, mapDispatchToProps)(App);
