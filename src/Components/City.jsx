

// import React from 'react';
// import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Image from '../Images/cc1.jpg';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Default icon for Leaflet markers
// const defaultIcon = new L.Icon({
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//   shadowSize: [41, 41]
// });

// const slots = [
//   { time: '8:00 AM - 9:00 AM', date: '2024-08-01', available: true, price: '₹500', court: 'Court 1' },
//   { time: '9:00 AM - 10:00 AM', date: '2024-08-01', available: false, price: '₹500', court: 'Court 2' },
//   { time: '10:00 AM - 11:00 AM', date: '2024-08-01', available: true, price: '₹500', court: 'Court 3' },
//   // Add more slots as needed
// ];

// const City = () => {
//   const navigate = useNavigate();

//   const handleBookNow = (slot) => {
//     navigate('/payment', { state: { slot } });
//   };

//   const filterSlots = (slots) => {
//     const today = new Date().toISOString().split('T')[0];
//     return slots.filter(slot => slot.date >= today);
//   };

//   const filteredSlots = filterSlots(slots);

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, minHeight: '100vh' }}>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '60vh',
//           backgroundImage: `url(${Image})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           position: 'relative',
//           color: '#fff',
//           textShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
//           mb: 4
//         }}
//       >
//         <Typography
//           variant="h2"
//           component="div"
//           sx={{
//             backgroundColor: 'rgba(0, 0, 0, 0.6)',
//             p: 3,
//             borderRadius: 2
//           }}
//         >
//           Badminton Court Chennai
//         </Typography>
//       </Box>
//       {/* Content Section */}
//       <Box sx={{ flex: 1, p: 2 }}>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <Typography variant="body1" color="text.secondary" paragraph>
//               Badminton Academy, OMR, Near MKT Tower, Near Supreme Hospital, Padur, Chennai
//             </Typography>
//             <Typography variant="body1" color="text.secondary" paragraph>
//               Our badminton court offers world-class facilities including high-quality flooring, professional lighting, and air conditioning to ensure the best playing conditions. We also provide rental services for badminton equipment and have a well-maintained changing room and shower area for your convenience.
//             </Typography>
//             <Typography variant="body1" color="text.secondary" paragraph>
//               Whether you are a beginner looking to learn the basics or a seasoned player aiming to improve your skills, our coaching staff is available to provide training and tips. Join our community and take advantage of our membership plans for regular access and exclusive benefits.
//             </Typography>
//             {/* Map Section */}
//             <br></br>
//             <Box sx={{ mt: 4, height: '300px', width: '200%' }}>
//               <MapContainer center={[13.000, 80.000]} zoom={15} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 <Marker position={[13.000, 80.000]} icon={defaultIcon}>
//                   <Popup>
//                     Badminton Court<br />Chennai
//                   </Popup>
//                 </Marker>
//               </MapContainer>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box sx={{ mt: 0 }}>
//               <Typography variant="h6" component="div" gutterBottom>
//                 Book Your Slot
//               </Typography>
//               <Grid container spacing={2}>
//                 {filteredSlots.map((slot, index) => (
//                   <Grid item key={index} xs={12} sm={6} md={4}>
//                     <Card
//                       variant="outlined"
//                       sx={{
//                         border: '1px solid #ddd',
//                         borderRadius: '12px',
//                         p: 2,
//                         height: '100%',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'space-between',
//                         boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
//                         overflow: 'hidden',
//                         position: 'relative',
//                         backgroundColor: slot.available ? '#eafaf1' : '#f8d7da'
//                       }}
//                     >
//                       <CardContent>
//                         <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//                           {slot.time}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           {slot.date} | {slot.court}
//                         </Typography>
//                       </CardContent>
//                       <Box sx={{ mt: 'auto', textAlign: 'center' }}>
//                         <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
//                           {slot.price}
//                         </Typography>
//                         <Button
//                           variant="contained"
//                           color={slot.available ? 'success' : 'error'}
//                           disabled={!slot.available}
//                           sx={{ width: '100%', borderRadius: '8px', padding: '12px', fontSize: '1rem' }}
//                           onClick={() => handleBookNow(slot)}
//                         >
//                           {slot.available ? 'Book Now' : 'Unavailable'}
//                         </Button>
//                       </Box>
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default City;

import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Image from '../Images/cc1.jpg'; 
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
  { time: '8:00 AM - 9:00 AM', date: '2024-08-01', available: true, price: '₹300', court: 'Court A' },
  { time: '9:00 AM - 10:00 AM', date: '2024-08-01', available: false, price: '₹300', court: 'Court B' },
  { time: '10:00 AM - 11:00 AM', date: '2024-08-01', available: true, price: '₹300', court: 'Court C' },
  // Add more slots as needed
];

const BadmintonCity = () => {
  const navigate = useNavigate();

  const handleBookNow = (slot) => {
    navigate('/payment', { state: { slot } });
  };

  // Temporarily display all slots for testing
  const filterSlots = (slots) => slots; // This line is changed for testing
  const filteredSlots = filterSlots(slots);
  
  console.log('Filtered Slots:', filteredSlots); // Debug to see the output of the filter

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
          Badminton Center Chennai
        </Typography>
      </Box>

      {/* Content Section */}
      <Box sx={{ flex: 1, p: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="text.secondary" fontSize={"18px"} paragraph>
              Badminton Center, OMR, Near MKT Tower, Near Supreme Hospital, Padur, Chennai
            </Typography>
            <Typography variant="body1" color="text.secondary" fontSize={"18px"}paragraph>
              Our badminton center offers top-notch facilities, including professional courts, high-quality netting,
              and optimal lighting to ensure the best playing conditions. We also provide equipment rental services
              and have a well-equipped changing room and refreshment area for your convenience.
            </Typography>
            <Typography variant="body1" color="text.secondary" fontSize={"18px"}paragraph>
              Whether you're a casual enthusiast or a competitive player, our staff is here to provide coaching
              and support. Join our community for regular access and exclusive benefits.
            </Typography>
                <br></br>
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
                  attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[13.0, 80.0]} icon={defaultIcon}>
                  <Popup>
                    Badminton Center
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
                {filteredSlots.map((slot, index) => (
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
                          {slot.date} | {slot.court}
                        </Typography>
                      </CardContent>
                      <Box sx={{ mt: 'auto', textAlign: 'center' }}>
                        <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.1rem'  , color: 'black'}}>
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

export default BadmintonCity;
