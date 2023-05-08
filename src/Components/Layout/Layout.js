import React from "react";
import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import Navbar from "./../Navbar/Navbar";

const Layout = (props) => {
  return (
    <AppShell padding="md" header={<Navbar />}>
      <Outlet />
    </AppShell>
  );
};

export default Layout;
