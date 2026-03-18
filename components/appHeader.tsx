"use client";
import {
  Button,
  Toolbar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useState } from "react";
import MyLogo from "./logo";

const textStyle = {
  fontWeight: 700,
  fontSize: "1.25rem",
  letterSpacing: 1,
  fontFamily: "'Courier New', monospace",
};

const navLinks = [
  { label: "Welcome", href: "/", testName: "nav-welcome" },
  { label: "Contact", href: "/contact", testName: "nav-contact" },
  { label: "Apps", href: "/apps", testName: "nav-apps" },
  { label: "Games", href: "/games", testName: "nav-games" },
];

export default function AppHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        test-name="header"
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <MyLogo />

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="text"
                color="primary"
                component={Link}
                href={link.href}
                sx={{ ...textStyle }}
                test-name={link.testName}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { xs: "flex", sm: "none" }, color: "white" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: "#111111",
            width: 240,
            borderLeft: "1px solid #2a2a2a",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "#2a2a2a" }} />

        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  "&:hover": { bgcolor: "#1e1e1e" },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    sx: {
                      ...textStyle,
                      fontSize: "1rem",
                      color: "white",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
