import * as React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import logo from "../logo.png";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 22px;
  margin-left: 10px;
`;

const HeaderBar = ({ open, handleDrawer }) => {
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{ marginRight: "20px " }}
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{ width: 45 }} />
        <Heading>Keep</Heading>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
