import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useJellyfin } from "../context/JellyfinContext";
import { Link } from "react-router-dom";

const Library: React.FC = () => {
  const { jellyfin } = useJellyfin();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      if (!jellyfin) return;
      setLoading(true);
      try {
        const data = await jellyfin.getItems();
        setItems(data.Items || []);
      } catch (err) {
        // handle error (optional)
      }
      setLoading(false);
    };
    fetchItems();
  }, [jellyfin]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Your Library
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Grid container spacing={2}>
          {items.map(item => (
            <Grid item xs={6} sm={4} md={3} key={item.Id}>
              <Card
                component={Link}
                to={`/player/${item.Id}`}
                sx={{ textDecoration: 'none', background: 'background.paper' }}
              >
                {item.ImageTags?.Primary ? (
                  <CardMedia
                    component="img"
                    height="200"
                    image={`${jellyfin?.baseUrl}/Items/${item.Id}/Images/Primary?maxHeight=300&tag=${item.ImageTags.Primary}`}
                    alt={item.Name}
                  />
                ) : (
                  <Box sx={{ height: 200, background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography>No image</Typography>
                  </Box>
                )}
                <CardContent>
                  <Typography color="primary" gutterBottom>
                    {item.Name}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {item.Type}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Library;