import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useJellyfin } from "../context/JellyfinContext";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { user, jellyfin } = useJellyfin();
  const [resume, setResume] = useState<any[]>([]);
  const [latest, setLatest] = useState<any[]>([]);
  const [recommend, setRecommend] = useState<any[]>([]);

  useEffect(() => {
    if (!user || !jellyfin) return;
    jellyfin.getResumeItems().then(setResume);
    jellyfin.getLatestMovies().then(setLatest);
    jellyfin.getRecommendations().then((rec) => {
      setRecommend(rec.MovieRecommendations || []);
    });
  }, [user, jellyfin]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Welcome to Design Media
      </Typography>
      <Typography variant="h5" color="secondary" gutterBottom>
        Your Personal Streaming Experience
      </Typography>
      {!user && (
        <Typography sx={{ mt: 4 }}>
          <Link to="/login">Login</Link> to browse your media.
        </Typography>
      )}
      {user && (
        <>
          <Carousel
            title="Continue Watching"
            items={resume.map(item => ({
              id: item.Id,
              name: item.Name,
              image: jellyfin?.baseUrl + `/Items/${item.Id}/Images/Primary?api_key=${jellyfin.token}`,
            }))}
          />
          <Carousel
            title="Trending Now"
            items={latest.map(item => ({
              id: item.Id,
              name: item.Name,
              image: jellyfin?.baseUrl + `/Items/${item.Id}/Images/Primary?api_key=${jellyfin.token}`,
            }))}
          />
          <Carousel
            title="Recommended For You"
            items={recommend.map(item => ({
              id: item.Id,
              name: item.Name,
              image: jellyfin?.baseUrl + `/Items/${item.Id}/Images/Primary?api_key=${jellyfin.token}`,
            }))}
          />
        </>
      )}
    </Box>
  );
};

export default Home;