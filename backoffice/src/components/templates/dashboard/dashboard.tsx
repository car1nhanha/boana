import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import BoanaLogo from "../../../assets/boana.png";

const drawerWidth = 240;

/* ---------- layout ---------- */

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: open ? 0 : -drawerWidth,
  transition: theme.transitions.create("margin", {
    easing: open ? theme.transitions.easing.easeOut : theme.transitions.easing.sharp,
    duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: open ? theme.transitions.easing.easeOut : theme.transitions.easing.sharp,
    duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: "flex",
  justifyContent: "flex-end",
}));

/* ---------- component ---------- */

interface DashboardTemplateProps {
  children?: React.ReactNode;
}

export const DashboardTemplate = ({ children }: DashboardTemplateProps) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const menuOpen = Boolean(anchorEl);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* APP BAR / NAVBAR */}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {!open && (
            <IconButton color="inherit" onClick={() => setOpen(true)} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}

          <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center" gap={2}>
            <Avatar src={BoanaLogo} alt="Boana Logo" />
            <Typography variant="h6">Boana</Typography>
          </Box>

          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Avatar src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=lucas" />
          </IconButton>

          <Menu anchorEl={anchorEl} open={menuOpen} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>My account</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {[
            { label: "Chaves", href: "/inbox" },
            { label: "Logs", href: "/starred" },
            { label: "Send email", href: "/send-email" },
            { label: "Drafts", href: "/drafts" },
          ].map((item, i) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component="a" href={item.href}>
                <ListItemIcon>{i % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* CONTENT */}
      <Main open={open}>
        <DrawerHeader />
        <Box sx={{ p: 2 }}>{children}</Box>
      </Main>
    </Box>
  );
};
