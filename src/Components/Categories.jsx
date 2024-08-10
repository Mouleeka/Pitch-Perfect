import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import { Zoom } from '@mui/material';
import { FaTableTennis, FaFootballBall, FaBasketballBall, FaSwimmer, FaBaseballBall, FaVolleyballBall } from 'react-icons/fa'; // Updated icons
import c1Image from '../Images/c1.jpg';
import c2Image from '../Images/c2.jpeg';
import c3Image from '../Images/c3.jpg';
import Footer from '../Components/Footer';
import '../Styles/Categories.css';

import c11 from '../Images/c11.jpeg';
import c12 from '../Images/c12.jpg';
import c13 from '../Images/c13.jpeg';

const places = [
  {
    name: 'Badminton Court Chennai',
    description: 'Pavans Badminton Academy, Badminton Academy, Near Supreme Hospital, Chennai',
    image: c1Image,
    link: '/city',
    badge: 'New',
    icon: <FaTableTennis size={24} />, // Icon for Badminton
  },
  {
    name: 'Cricket Court Royalty Bangalore',
    description: 'Evergreen Cricket, Cricket, Chellimman Koil Street, Madhavaram, Bangalore',
    image: c2Image,
    link: '/city2',
    badge: 'Popular',
    icon: <FaBaseballBall size={24} />, // Using Baseball icon for Cricket
  },
  {
    name: 'Sky Football turf in the city Coimbatore',
    description: 'Chettiar Thottam, Near Canara Bank, Badaga’s Colony, K. Vadamadurai, Coimbatore, Tamil Nadu',
    image: c3Image,
    link: '/city3',
    icon: <FaFootballBall size={24} />, // Icon for Football
  },
  {
    name: 'Basketball Court Chennai',
    description: 'Dribble Academy, Near Central Park, Chennai',
    image: c13,
    link: '/city4',
    badge: 'New',
    icon: <FaBasketballBall size={24} />, // Icon for Basketball
  },
  {
    name: 'Tennis Court Bangalore',
    description: 'Ace Tennis Academy, 5th Block, Koramangala, Bangalore',
    image: c12,
    link: '/city5',
    badge: 'New',
    icon: <FaVolleyballBall size={24} />, // Using Volleyball icon for Tennis
  },
  {
    name: 'Swimming Pool Coimbatore',
    description: 'Olympic Pool, Saravanampatti, Coimbatore, Tamil Nadu',
    image: c11,
    link: '/city6',
    badge: 'Popular',
    icon: <FaSwimmer size={24} />, // Icon for Swimming
  },
];

const Categories = () => {
  return (
    <>

      <div className="categories-banner-container">
        <div className="categories-banner-gradient">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNPcmDwOzDc5uxHMpeoT9-VYVAY8M4vIGdw&s' alt="Sports Banner" className="categories-banner-image" />
          <Typography variant="h2" component="h1" className="categories-banner-text" >
            Explore Our Sports Categories
          </Typography>
        </div>
      </div>
      <div className="categories-background">
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {places.map((place, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Tooltip title={place.description} arrow TransitionComponent={Zoom}>
                  <Badge
                    badgeContent={place.badge}
                    color={place.badge === 'New' ? 'primary' : 'secondary'}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    overlap="circular"
                  >
                    <Card className="categories-hover-card">
                      <Link to={place.link} className="categories-card-link">
                        <CardMedia
                          component="img"
                          height="250"
                          image={place.image}
                          alt={place.name}
                          className="categories-card-media"
                        />
                        <CardContent>
                          <Typography variant="h5" component="div">
                            {place.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {place.description}
                          </Typography>
                          <div className="icon-container">{place.icon}</div>
                        </CardContent>
                      </Link>
                    </Card>
                  </Badge>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
