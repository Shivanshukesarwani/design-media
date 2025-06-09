import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JellyfinClient from "../api/jellyfin";
import { useJellyfin } from "../context/JellyfinContext";

const Login: React.FC = () => {
  const [server, setServer] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setJellyfin, setUser, setToken } = useJellyfin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const client = new JellyfinClient(server);
      const resp = await client.login(username, password);
      setJellyfin(client);
      setUser({ id: resp.User.Id, name: resp.User.Name });
      setToken(resp.AccessToken);
      navigate("/");
    } catch (err) {
      setError("Login failed. Please check your server and credentials.");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
      <Paper sx={{ p: 4, minWidth: 320, background: "background.paper" }}>
        <Typography variant="h5" color="primary" gutterBottom>
          Connect to Jellyfin
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Jellyfin Server URL"
            value={server}
            onChange={e => setServer(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
          <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;