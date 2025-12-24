import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import BoanaLogo from "../../../assets/boana.png";

// todo - user o drawer

interface MenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

const MenuComponent = ({ anchorEl, open, handleClose }: MenuProps) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      slotProps={{
        list: {
          "aria-labelledby": "basic-button",
        },
      }}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  );
};

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center" gap={2}>
            <Avatar alt="Boana Logo" src={BoanaLogo} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Boana
            </Typography>
          </Box>

          <IconButton onClick={handleClick} sx={{ p: 0 }}>
            <Avatar alt="User Avatar" src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=lucas" />
          </IconButton>

          <MenuComponent anchorEl={anchorEl} open={open} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
