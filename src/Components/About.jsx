
// import React from 'react';
// import { Box, Typography, Grid, Card, CardContent, Avatar, Divider } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import { FaHandshake, FaTrophy, FaUser } from 'react-icons/fa'; // Icons for visual appeal
// import a1 from '../Images/a1.jpg'
// import a2 from '../Images/a2.jpg'
// import a3 from '../Images/a3.jpg'



// const AboutUs = () => {
//   const theme = useTheme();

//   return (
//     <Box sx={{ p: 4, backgroundColor: theme.palette.background.default }}>
//       <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
//         {/* Company Story Section */}
//         <Box sx={{ position: 'relative', backgroundColor: theme.palette.grey[200], p: 4, mb: 4, borderRadius: 2, boxShadow: `0 4px 8px ${theme.palette.grey[400]}` }}>
//           <Typography variant="h3" component="div" gutterBottom align="center" sx={{ mb: 2 }}>
//             About Us
//           </Typography>
//           <Typography variant="h5" component="div" gutterBottom align="center" sx={{ mb: 3 }}>
//             Our Story
//           </Typography>
//           <Typography variant="body1" paragraph align="center" sx={{ fontSize: '1.1rem', color: 'black' }}>
//             At TurfBooking, we are passionate about providing top-notch sports facilities for everyone. Our journey began with a simple idea: to make booking sports venues as easy as a few clicks. We believe in bringing people together through sports and recreation, and our platform is designed to offer a seamless experience for booking football, cricket, basketball, and swimming facilities.
//           </Typography>
//           <Box
//             sx={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               background: `url('/path-to-background-image.jpg') no-repeat center center`,
//               backgroundSize: 'cover',
//               opacity: 0.1,
//               zIndex: -1,
//             }}
//           />
//         </Box>

//         {/* Timeline Section */}
//         <Box sx={{ mb: 4 }}>
//           <Typography variant="h5" component="div" gutterBottom align="center" sx={{ mb: 3 }}>
//             Our Journey
//           </Typography>
//           <Box sx={{ position: 'relative', p: 4 }}>
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 borderLeft: `2px solid ${theme.palette.primary.main}`,
//                 zIndex: 1,
      
//               }}
//             />
//             <Grid container spacing={4} justifyContent="center">
//               {[
//                 { year: '2019', event: 'Company Founded' },
//                 { year: '2020', event: 'Launched First Version' },
//                 { year: '2021', event: 'Reached 10,000 Users' },
//                 { year: '2022', event: 'Expanded to New Cities' },
//               ].map((item, index) => (
//                 <Grid item xs={12} sm={6} md={3} key={index}>
//                   <Card variant="outlined" sx={{ p: 2, position: 'relative', boxShadow: `0 4px 8px ${theme.palette.grey[400]}` }}>
//                     <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: theme.palette.primary.main }} />
//                     <CardContent>
//                       <Typography variant="h6" component="div" align="center"  sx={{ mb: 1 }}>
//                         {item.year}
//                       </Typography>
//                       <Typography variant="body2" align="center" color={"black"}>
//                         {item.event}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Box>

//         {/* Team Section */}
//         <Box sx={{ mb: 4 }}>
        
//           <Typography variant="h5" component="div" gutterBottom align="center" sx={{ mb: 3 }}>
//             Meet Our Team
          
//           </Typography>
//           <Grid container spacing={4} justifyContent="center" >
//             {[
//               { name: 'Smrithi', role: 'Co-Founder & CEO', image: a1, description: 'Smrithi leads our team with a vision to revolutionize sports facility booking. With a background in tech and a passion for sports, she ensures we deliver the best experience for our users.' },
//               { name: 'John', role: 'Co-Founder & CTO', image: a2, description: 'John brings his expertise in technology to build and maintain our robust platform. His focus is on innovation and ensuring our technology meets the needs of our users.' },
//               { name: 'Vijay', role: 'Head of Customer Service', image: a3, description: 'Vijay is dedicated to providing exceptional support and ensuring our users have a smooth booking experience. She is always here to assist with any inquiries or issues.' },
//             ].map((member, index) => (
//               <Grid item xs={12} sm={4} key={index}>
//                 <Card variant="outlined" sx={{ position: 'relative', overflow: 'visible', boxShadow: `0 4px 8px ${theme.palette.grey[400]}` }}>
//                   <Avatar
//                     sx={{ width: 100, height: 100, margin: '0 auto', mt: -2, mb: 2, border: `4px solid ${theme.palette.primary.main}`, boxShadow: `0 4px 8px ${theme.palette.grey[400]}` }}
//                     src={member.image}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" align="center" sx={{ mb: 1 }}>
//                       {member.name}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" align="center" sx={{ mb: 2 }}>
//                       {member.role}
//                     </Typography>
//                     <Box sx={{ textAlign: 'center' }}>
//                       <Typography variant="body2"  color={"black"}>
//                         {member.description}
//                       </Typography>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Core Values Section */}
//         <Box sx={{ backgroundColor: theme.palette.grey[200], p: 4, borderRadius: 2, boxShadow: `0 4px 8px ${theme.palette.grey[400]}` }}>
//           <Typography variant="h5" component="div" gutterBottom align="center" sx={{ mb: 3 }}>
//             Our Core Values
//           </Typography>
//           <Grid container spacing={4} justifyContent="center" >
//             {[
//               { icon: <FaHandshake size={40} />, title: 'Integrity', description: 'We believe in honesty and transparency in all our dealings. Our users trust us to provide accurate information and reliable services.' },
//               { icon: <FaTrophy size={40} />, title: 'Excellence', description: 'We strive for excellence in everything we do. From the quality of our facilities to the usability of our platform, we aim to exceed expectations.' },
//               { icon: <FaUser size={40} />, title: 'Customer-Centric', description: 'Our users are at the heart of our business. We listen to their feedback and continuously improve our services to meet their needs.' },
//             ].map((value, index) => (
//               <Grid item xs={12} sm={4} key={index}>
//                 <Card variant="outlined" sx={{ p: 3, textAlign: 'center', boxShadow: `0 4px 8px ${theme.palette.grey[400]}` }}>
//                   <Box sx={{ mb: 2, color: theme.palette.primary.main }}>
//                     {value.icon}
//                   </Box>
//                   <Typography variant="h6" sx={{ mb: 1 }}>
//                     {value.title}
//                   </Typography>
//                   <Typography variant="body2" color={"black"}>
//                     {value.description}
//                   </Typography>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AboutUs;


import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FaHandshake, FaTrophy, FaUser } from 'react-icons/fa'; // Icons for visual appeal
import a1 from '../Images/a1.jpg'
import a2 from '../Images/a2.jpg'
import a3 from '../Images/a3.jpg'
import Footer from './Footer';

const AboutUs = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 4, backgroundColor: theme.palette.background.default }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Company Story Section */}
        <Box sx={{ position: 'relative', backgroundColor: '#e0f7e9', p: 4, mb: 4, borderRadius: 2, boxShadow: `0 4px 8px ${theme.palette.grey[400]}` }}>
          <Typography variant="h3" component="div" gutterBottom align="center" sx={{ mb: 2 }}>
            About Us
          </Typography>
          <Typography variant="h5" component="div" gutterBottom align="center" sx={{ mb: 3 }}>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ fontSize: '1.1rem', color: 'black' }}>
            At TurfBooking, we are passionate about providing top-notch sports facilities for everyone. Our journey began with a simple idea: to make booking sports venues as easy as a few clicks. We believe in bringing people together through sports and recreation, and our platform is designed to offer a seamless experience for booking football, cricket, basketball, and swimming facilities.
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `url('/path-to-background-image.jpg') no-repeat center center`,
              backgroundSize: 'cover',
              opacity: 0.1,
              zIndex: -1,
            }}
          />
        </Box>

        {/* Timeline Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="div" gutterBottom align="center" sx={{ mb: 3 }}>
            Our Journey
          </Typography>
          <Box sx={{ position: 'relative', p: 4 }}>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderLeft: `2px solid ${theme.palette.primary.main}`,
                zIndex: 1,
              }}
            />
            <Grid container spacing={4} justifyContent="center">
              {[
                { year: '2019', event: 'Company Founded' },
                { year: '2020', event: 'Launched First Version' },
                { year: '2021', event: 'Reached 10,000 Users' },
                { year: '2022', event: 'Expanded to New Cities' },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card variant="outlined" sx={{ p: 2, position: 'relative', boxShadow: `0 4px 8px ${theme.palette.grey[400]}` }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: theme.palette.primary.main }} />
                    <CardContent>
                      <Typography variant="h6" component="div" align="center" sx={{ mb: 1 }}>
                        {item.year}
                      </Typography>
                      <Typography variant="body2" align="center" color={"black"}>
                        {item.event}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="div" gutterBottom align="center" sx={{ mb: 3 }}>
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { name: 'Smrithi', role: 'Co-Founder & CEO', image: a1, description: 'Smrithi leads our team with a vision to revolutionize sports facility booking. With a background in tech and a passion for sports, she ensures we deliver the best experience for our users.' },
              { name: 'John', role: 'Co-Founder & CTO', image: a2, description: 'John brings his expertise in technology to build and maintain our robust platform. His focus is on innovation and ensuring our technology meets the needs of our users.' },
              { name: 'Vijay', role: 'Head of Customer Service', image: a3, description: 'Vijay is dedicated to providing exceptional support and ensuring our users have a smooth booking experience. She is always here to assist with any inquiries or issues.' },
            ].map((member, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card variant="outlined" sx={{ position: 'relative', overflow: 'visible', boxShadow: `0 4px 8px ${theme.palette.grey[400]}` }}>
                  <Avatar
                    sx={{ width: 100, height: 100, margin: '0 auto', mt: -2, mb: 2, border: `4px solid ${theme.palette.primary.main}`, boxShadow: `0 4px 8px ${theme.palette.grey[400]}` }}
                    src={member.image}
                  />
                  <CardContent>
                    <Typography variant="h6" align="center" sx={{ mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center" sx={{ mb: 2 }}>
                      {member.role}
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="body2" color={"black"}>
                        {member.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Core Values Section */}
        <Box sx={{ backgroundColor: '#e0f7e9', p: 4, borderRadius: 2, boxShadow: `0 4px 8px ${theme.palette.grey[400]}` }}>
          <Typography variant="h5" component="div" gutterBottom align="center" sx={{ mb: 3 }}>
            Our Core Values
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { icon: <FaHandshake size={40} />, title: 'Integrity', description: 'We believe in honesty and transparency in all our dealings. Our users trust us to provide accurate information and reliable services.' },
              { icon: <FaTrophy size={40} />, title: 'Excellence', description: 'We strive for excellence in everything we do. From the quality of our facilities to the usability of our platform, we aim to exceed expectations.' },
              { icon: <FaUser size={40} />, title: 'Customer-Centric', description: 'Our users are at the heart of our business. We listen to their feedback and continuously improve our services to meet their needs.' },
            ].map((value, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card variant="outlined" sx={{ p: 3, textAlign: 'center', boxShadow: `0 4px 8px ${theme.palette.grey[400]}` }}>
                  <Box sx={{ mb: 2, color: theme.palette.primary.main }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color={"black"}>
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
             {/* <Footer /> */}
          </Grid>
        </Box>
      </Box>
    </Box>
    
  );
};

export default AboutUs;

