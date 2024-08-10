import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Image from '../Images/cc4.jpg';  // Changed the image for the swimming theme
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Default icon for Leaflet markers
const defaultIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const slots = [
  { time: '6:00 AM - 7:00 AM', date: '2024-08-01', available: true, price: '₹700', lane: 'Lane 1' },
  { time: '7:00 AM - 8:00 AM', date: '2024-08-01', available: false, price: '₹700', lane: 'Lane 2' },
  { time: '8:00 AM - 9:00 AM', date: '2024-08-01', available: true, price: '₹700', lane: 'Lane 3' },
];

const City = () => {
  const navigate = useNavigate();

  const handleBookNow = (slot) => {
    navigate('/payment', { state: { slot } });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          color: '#fff',
          textShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
          mb: 4,
        }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            p: 3,
            borderRadius: 2,
          }}
        >
          Swimming Center Chennai
        </Typography>
      </Box>

      {/* Content Section */}
      <Box sx={{ flex: 1, p: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="text.secondary" fontSize={"18px"} paragraph>
              Swimming Academy, OMR, Near MKT Tower, Near Supreme Hospital, Padur, Chennai
            </Typography>
            <Typography variant="body1" color="text.secondary" fontSize={"18px"} paragraph>
              Our swimming center features Olympic-size pools, modern changing facilities, and high-tech water purification systems. We offer classes for all age groups and competitive training programs.
            </Typography>
            <Typography variant="body1" color="text.secondary" fontSize={"18px"} paragraph>
              Dive into our swimming community for the best aquatic experience and enjoy our flexible membership options and expert coaching.
            </Typography>
          <br></br>
            {/* Map Section */}
            <Box
              sx={{
                mt: 4,
                height: '300px',
                width: '200%',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              }}
            >
              <MapContainer center={[13.0, 80.0]} zoom={15} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
                  contributors'
                />
                <Marker position={[13.0, 80.0]} icon={defaultIcon}>
                  <Popup>
                    Swimming Center
                    <br />
                    Chennai
                  </Popup>
                </Marker>
              </MapContainer>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 0 }}>
              <Typography variant="h6" component="div" gutterBottom>
                Book Your Slot
              </Typography>
              <Grid container spacing={2}>
                {slots.map((slot, index) => (
                  <Grid item key={index} xs={4}>
                    <Card
                      variant="outlined"
                      sx={{
                        border: '1px solid #ddd',
                        borderRadius: '12px',
                        p: 1,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s',
                        ':hover': {
                          transform: 'translateY(-5px)',
                        },
                        overflow: 'hidden',
                        backgroundColor: slot.available ? '#eafaf1' : '#f8d7da',
                        position: 'relative',
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                          {slot.time}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {slot.date} | {slot.lane}
                        </Typography>
                      </CardContent>
                      <Box sx={{ mt: 'auto', textAlign: 'center' }}>
                        <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.1rem',color:'black' }}>
                          {slot.price}
                        </Typography>
                        <Button
                          variant="contained"
                          color={slot.available ? 'success' : 'error'}
                          disabled={!slot.available}
                          sx={{ width: '100%', borderRadius: '8px', padding: '12px', fontSize: '1rem' }}
                          onClick={() => handleBookNow(slot)}
                        >
                          {slot.available ? 'Book Now' : 'Unavailable'}
                        </Button>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default City;
