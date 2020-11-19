import React from "react";
import LeftSidebar from "../../containers/LeftSidebar";

import TopBar from "../sections/TopBar";

function BaseLayoute(props) {
  const { children } = props;
  return (
    <div>
      <TopBar />
      <main className="container">
        <div className="row mt-3">
          <div className="col-lg-3">
            <LeftSidebar />
          </div>
          <div className="col-lg-9">{children}</div>
        </div>
      </main>
    </div>
  );
}

export default BaseLayoute;
