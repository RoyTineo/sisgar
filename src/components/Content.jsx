import React from "react";

import { Outlet } from "react-router-dom";

function Content() {
  return (
    <div className=" content-wrapper ">
      <div className="m-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Content;
