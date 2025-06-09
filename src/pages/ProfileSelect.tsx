import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { useJellyfin } from "../context/JellyfinContext";

const ProfileSelect: React.FC = () => {
  const { jellyfin, setUser } = useJellyfin();
  const [profiles, setProfiles] = useState<any[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      if (!jellyfin) return;
      const resp = await jellyfin.listUsers();
      setProfiles(resp);
    };
    fetchProfiles();
  }, [jellyfin]);

  const handleSelect = (user: any) => setUser({ id: user.Id, name: user.Name });

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" color="primary" gutterBottom>Choose your profile</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {profiles.map(user => (
          <Button key={user.Id} onClick={() => handleSelect(user)}>
            <Avatar src={user.PrimaryImageTag ? `${jellyfin?.baseUrl}/Users/${user.Id}/Images/Primary?api_key=${jellyfin.token}` : undefined}>
              {user.Name.charAt(0).toUpperCase()}
            </Avatar>
            <Typography>{user.Name}</Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default ProfileSelect;