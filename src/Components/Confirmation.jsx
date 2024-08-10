

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, Typography, Button, Container, Card, CardContent, Grid, Divider } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Confirmation from '../Styles/Confirmation.css';

// const Confirmationn = () => {
//   const navigate = useNavigate();
//   const bookingId = Math.floor(Math.random() * 1000000);
//   const turfName = 'Turf Name'; // Replace with actual turf name
//   const bookingDate = 'Booking Date'; // Replace with actual booking date
//   const bookingTime = 'Booking Time'; // Replace with actual booking time
//   const duration = 'Duration'; // Replace with actual duration
//   const price = 'Price'; // Replace with actual price

//   return (
//     <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//       <Card sx={{ borderRadius: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', p: 3 }}>
//         <Box sx={{ textAlign: 'center', mb: 3 }}>
//           <CheckCircleIcon sx={{ fontSize: 60, color: '#4caf50' }} />
//           <Typography variant="h4" component="h1" color={'black'} sx={{ mt: 2, mb: 1 }}>
//             Booking Confirmed!
//           </Typography>
//           <Typography variant="h6" color="textSecondary">
//             Thank you for booking {turfName}!
//           </Typography>
//         </Box>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <Card sx={{ color: 'black', borderRadius: 2, p: 2, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', mb: 2 }}>
//               <CardContent className="confirmation-card-content">
//                 <Typography variant="h6" gutterBottom>
//                   Booking Summary
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Booking ID:</strong> #{bookingId}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Turf:</strong> {turfName}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Date:</strong> {bookingDate}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Time:</strong> {bookingTime}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Duration:</strong> {duration}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Price:</strong> ${price}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Card sx={{ borderRadius: 2, p: 2, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
//               <CardContent className="confirmation-additional-details">
//                 <Typography variant="h6" gutterBottom>
//                   Additional Details
//                 </Typography>
//                 <Divider sx={{ mb: 2 }} />
//                 <Typography variant="body1" gutterBottom>
//                   <strong>Number of players:</strong> X
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   <strong>Equipment rental:</strong> Yes/No
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   <strong>Additional services:</strong> X
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//         <Box className="confirmation-button-container" sx={{ textAlign: 'center', mt: 4 }}>
//           <Button 
//             variant="contained" 
//             color="primary" 
//             sx={{ mr: 2 }} 
//             onClick={() => navigate('/')}
//           >
//             Back to Home
//           </Button>
//           <Button 
//             variant="outlined" 
//             color="primary" 
//             onClick={() => navigate('/bookings')}
//           >
//             View Booking History
//           </Button>
//         </Box>
//       </Card>
//     </Container>
//   );
// };

// export default Confirmationn;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  Grid,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../Styles/Confirmation.css'; // Import CSS

const Confirmationn = () => {
  const navigate = useNavigate();
  const bookingId = Math.floor(Math.random() * 1000000);
  const turfName = 'Turf Name'; // Replace with actual turf name
  const bookingDate = 'Booking Date'; // Replace with actual booking date
  const bookingTime = 'Booking Time'; // Replace with actual booking time
  const duration = 'Duration'; // Replace with actual duration
  const price = 'Price'; // Replace with actual price

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          p: 4,
          backgroundColor: '#f4f9f4',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <CheckCircleIcon sx={{ fontSize: 70, color: '#4caf50' }} />
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mt: 2,
              mb: 1,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              color: '#2e7d32',
            }}
          >
            Booking Confirmed!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              color: '#333',
            }}
          >
            Thank you for booking {turfName}!
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 2,
                p: 3,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                mb: 3,
                backgroundColor: '#fff',
              }}
            >
              <CardContent className="confirmation-card-content">
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Booking Summary
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color:'black'}}>
                  <strong>Booking ID:</strong> #{bookingId}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' ,color:'black' }}>
                  <strong>Turf:</strong> {turfName}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif',color:'black' }}>
                  <strong>Date:</strong> {bookingDate}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif',color:'black' }}>
                  <strong>Time:</strong> {bookingTime}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' ,color:'black'}}>
                  <strong>Duration:</strong> {duration}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' ,color:'black'}}>
                  <strong>Price:</strong> ${price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 2,
                p: 3,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
              }}
            >
              <CardContent className="confirmation-additional-details">
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Additional Details
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontFamily: 'Roboto, sans-serif' ,color:'black'}}
                >
                  <strong>Number of players:</strong> X
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontFamily: 'Roboto, sans-serif',color:'black' }}
                >
                  <strong>Equipment rental:</strong> Yes/No
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontFamily: 'Roboto, sans-serif',color:'black' }}
                >
                  <strong>Additional services:</strong> X
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box className="confirmation-button-container" sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              backgroundColor: '#2e7d32',
              color: '#fff',
              '&:hover': { backgroundColor: '#1b5e20' },
              fontFamily: 'Poppins, sans-serif',
            }}
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#2e7d32',
              color: '#2e7d32',
              '&:hover': { backgroundColor: '#e8f5e9' },
              fontFamily: 'Poppins, sans-serif',
            }}
            onClick={() => navigate('/bookings')}
          >
            View Booking History
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default Confirmationn;

