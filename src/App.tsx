import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Library from "./pages/Library";
import Player from "./pages/Player";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Box sx={{ mt: 8 }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/library" element={<Library />} />
            <Route path="/player/:id" element={<Player />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;