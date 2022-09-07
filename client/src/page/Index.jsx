import React from "react";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <h1>welcome</h1>
      <Outlet />
    </div>
  );
};

export default Index;
