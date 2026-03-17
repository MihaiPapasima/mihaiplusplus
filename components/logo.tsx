"use client";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useState } from "react";

const textStyle = {
  fontWeight: 700,
  fontSize: "1.25rem",
  letterSpacing: 1,
  fontFamily: "'Courier New', monospace",
};

export default function MyLogo() {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <Box
        component="span"
        sx={{ ...textStyle, display: { xs: "none", sm: "inline" } }}
      >
        <span style={{ color: "white" }}>Mihai</span>
        <span style={{ color: "#8927b0ff" }}>PlusPlus</span>
      </Box>
      <Box
        component="span"
        sx={{ ...textStyle, display: { xs: "inline", sm: "none" } }}
      >
        <span style={{ color: "white" }}>Mihai</span>
        <span style={{ color: "#8927b0ff" }}>++</span>
      </Box>
    </Link>
  );
}
