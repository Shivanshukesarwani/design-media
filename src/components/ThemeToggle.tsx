import React from "react";
import { Switch, Tooltip } from "@mui/material";
export const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <Tooltip title={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
    <Switch checked={darkMode} onChange={e => setDarkMode(e.target.checked)} />
  </Tooltip>
);