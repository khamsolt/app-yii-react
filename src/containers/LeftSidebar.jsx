import React from "react";
import { connect } from "react-redux";
import LeftSidebarComponent from "../components/sections/LeftSidebar";

function LeftSidebar(props) {
  return <LeftSidebarComponent {...props} />;
}

const mapStateToProps = (state) => ({
  name: "Magomed Khamidov",
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);
