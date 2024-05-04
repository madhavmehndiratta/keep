import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  LightbulbOutlined as LightBulb,
  ArchiveOutlined as ArchiveIcon,
  DeleteOutlineOutlined as DeleteIcon,
} from "@mui/icons-material";

const NavList = ({ open }) => {
  const navList = [
    { id: 1, name: "Notes", icon: <LightBulb /> },
    { id: 2, name: "Archive", icon: <ArchiveIcon /> },
    { id: 3, name: "Trash", icon: <DeleteIcon /> },
  ];

  return (
    <List>
      {navList.map((list) => (
        <ListItem key={list.id}>
          <ListItemIcon>{list.icon}</ListItemIcon>
          <ListItemText primary={list.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
