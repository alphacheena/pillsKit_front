import React from "react";
import { Header, Group, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = (props) => {
  return (
    <Header height={100} p={20} className="Header">
      <Group position="apart">
        <Title>Pills Kit</Title>
        <Group>
          <Link to="/">Kits</Link>
          <Link to="/profile">Profile</Link>
        </Group>
      </Group>
    </Header>
  );
};

export default Navbar;
