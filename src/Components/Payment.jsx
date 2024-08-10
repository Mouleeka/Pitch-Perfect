// import React, { useState } from 'react';
// import { Box, Typography, Card, CardContent, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, TextField } from '@mui/material';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { AiOutlineCreditCard, AiOutlineBank, AiOutlineWallet, AiOutlineGoogle } from 'react-icons/ai';

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { slot } = location.state || {};
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };

//   const handlePayment = () => {
//     // Add payment processing logic here

//     // Redirect to confirmation page with slot details and transaction ID
//     navigate('/confirmation', {
//       state: {
//         slot: slot,
//         transactionId: Math.floor(Math.random() * 1000000), // Mock transaction ID
//       }
//     });
//   };

//   return (
//     <Box sx={{ p: 2 }}>
//       <Box sx={{ mt: 4, maxWidth: '800px', margin: '0 auto' }}>
//         <Typography variant="h4" component="div" gutterBottom>
//           Payment for {slot?.court || 'Selected Slot'}
//         </Typography>
//         <Typography variant="h6" component="div" gutterBottom>
//           Date: {slot?.date}
//         </Typography>
//         <Typography variant="h6" component="div" gutterBottom>
//           Time: {slot?.time}
//         </Typography>
//         <Typography variant="h6" component="div" gutterBottom>
//           Price: {slot?.price}
//         </Typography>
//         <Box sx={{ mt: 4 }}>
//           <Card variant="outlined" sx={{ p: 3, mb: 2 }}>
//             <CardContent>
//               <FormControl component="fieldset">
//                 <FormLabel component="legend">Select Payment Method</FormLabel>
//                 <RadioGroup
//                   aria-label="payment-method"
//                   name="payment-method"
//                   value={paymentMethod}
//                   onChange={handlePaymentMethodChange}
//                 >
//                   <FormControlLabel
//                     value="credit-card"
//                     control={<Radio />}
//                     label={<Box sx={{ display: 'flex', alignItems: 'center' }}><AiOutlineCreditCard size={24} /> Credit Card</Box>}
//                   />
//                   <FormControlLabel
//                     value="bank-transfer"
//                     control={<Radio />}
//                     label={<Box sx={{ display: 'flex', alignItems: 'center' }}><AiOutlineBank size={24} /> Bank Transfer</Box>}
//                   />
//                   <FormControlLabel
//                     value="wallet"
//                     control={<Radio />}
//                     label={<Box sx={{ display: 'flex', alignItems: 'center' }}><AiOutlineWallet size={24} /> Wallet</Box>}
//                   />
//                   <FormControlLabel
//                     value="google-pay"
//                     control={<Radio />}
//                     label={<Box sx={{ display: 'flex', alignItems: 'center' }}><AiOutlineGoogle size={24} /> Google Pay</Box>}
//                   />
//                 </RadioGroup>
//               </FormControl>
//             </CardContent>
//           </Card>

//           {paymentMethod === 'credit-card' && (
//             <Card variant="outlined" sx={{ p: 3, mb: 2 }}>
//               <CardContent>
//                 <Typography variant="h6" component="div" gutterBottom>
//                   Enter Payment Details
//                 </Typography>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Card Number"
//                       variant="outlined"
//                       placeholder="1234 5678 9012 3456"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={3}>
//                     <TextField
//                       fullWidth
//                       label="Expiry Date"
//                       variant="outlined"
//                       placeholder="MM/YY"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={3}>
//                     <TextField
//                       fullWidth
//                       type='password'
//                       label="CVV"
//                       variant="outlined"
//                       placeholder="123"
//                     />
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>
//           )}

//           {paymentMethod === 'bank-transfer' && (
//             <Card variant="outlined" sx={{ p: 3, mb: 2 }}>
//               <CardContent>
//                 <Typography variant="h6" component="div" gutterBottom>
//                   Bank Transfer Instructions
//                 </Typography>
//                 <Typography variant="body1">
//                   Please transfer the payment to the following bank account:
//                   <br />
//                   Account Name: XYZ
//                   <br />
//                   Account Number: 123456789
//                   <br />
//                   Bank Name: ABC Bank
//                   <br />
//                   IFSC Code: ABCD1234
//                 </Typography>
//               </CardContent>
//             </Card>
//           )}

//           {paymentMethod === 'wallet' && (
//             <Card variant="outlined" sx={{ p: 3, mb: 2 }}>
//               <CardContent>
//                 <Typography variant="h6" component="div" gutterBottom>
//                   Wallet Payment Instructions
//                 </Typography>
//                 <Typography variant="body1">
//                   Please complete your payment through your preferred wallet app.
//                 </Typography>
//               </CardContent>
//             </Card>
//           )}

//           {paymentMethod === 'google-pay' && (
//             <Card variant="outlined" sx={{ p: 3, mb: 2 }}>
//               <CardContent>
//                 <Typography variant="h6" component="div" gutterBottom>
//                   Complete Payment with Google Pay
//                 </Typography>
//                 <Button variant="contained" color="primary" onClick={() => { /* Redirect to Google Pay */ }}>
//                   Pay with Google Pay
//                 </Button>
//               </CardContent>
//             </Card>
//           )}

//           <Box sx={{ textAlign: 'center', mt: 3 }}>
//             <Button variant="contained" color="primary" onClick={handlePayment}>
//               Confirm Payment
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Payment; 

import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineCreditCard, AiOutlineBank, AiOutlineWallet, AiOutlineGoogle } from 'react-icons/ai';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slot } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayment = () => {
    // Add payment processing logic here

    // Redirect to confirmation page with slot details and transaction ID
    navigate('/confirmation', {
      state: {
        slot: slot,
        transactionId: Math.floor(Math.random() * 1000000), // Mock transaction ID
      }
    });
  };

  const handleGooglePay = () => {
    // This is where you would integrate with Google Pay API or redirect the user to complete the payment
    window.location.href = 'https://pay.google.com';
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mt: 4, maxWidth: '800px', margin: '0 auto' }}>
        <Typography variant="h4" component="div" gutterBottom>
          Payment for {slot?.court || 'Selected Slot'}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Date: {slot?.date}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Time: {slot?.time}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Price: {slot?.price}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Card variant="outlined" sx={{ p: 3, mb: 2 }}>
            <CardContent>
              <FormControl component="fieldset">
                <FormLabel component="legend">Select Payment Method</FormLabel>
                <RadioGroup
                  aria-label="payment-method"
                  name="payment-method"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                >
                  <FormControlLabel
                    value="credit-card"
                    control={<Radio />}
                    label={<Box sx={{ display: 'flex', alignItems: 'center' }}><AiOutlineCreditCard size={24} /> Credit Card</Box>}
                  />
                  <FormControlLabel
                    value="bank-transfer"
                    control={<Radio />}
                    label={<Box sx={{ display: 'flex', alignItems: 'center' }}><AiOutlineBank size={24} /> Bank Transfer</Box>}
                  />
                  <FormControlLabel
                    value="wallet"
                    control={<Radio />}
                    label={<Box sx={{ display: 'flex', alignItems: 'center' }}><AiOutlineWallet size={24} /> Wallet</Box>}
                  />
                  <FormControlLabel
                    value="google-pay"
                    control={<Radio />}
                    label={<Box sx={{ display: 'flex', alignItems: 'center' }}><AiOutlineGoogle size={24} /> Google Pay</Box>}
                  />
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>

          {paymentMethod === 'credit-card' && (
            <Card variant="outlined" sx={{ p: 3, mb: 2 }}>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  Enter Payment Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Card Number"
                      variant="outlined"
                      placeholder="1234 5678 9012 3456"
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      fullWidth
                      label="Expiry Date"
                      variant="outlined"
                      placeholder="MM/YY"
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      fullWidth
                      type='password'
                      label="CVV"
                      variant="outlined"
                      placeholder="123"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}

          {paymentMethod === 'bank-transfer' && (
            <Card variant="outlined" sx={{ p: 3, mb: 2 }}>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  Bank Transfer Instructions
                </Typography>
                <Typography variant="body1" style={{color:'black'}}>
                  Please transfer the payment to the following bank account:
                  <br />
                  Account Name: XYZ
                  <br />
                  Account Number: 123456789
                  <br />
                  Bank Name: ABC Bank
                  <br />
                  IFSC Code: ABCD1234
                </Typography>
              </CardContent>
            </Card>
          )}

          {paymentMethod === 'wallet' && (
            <Card variant="outlined" sx={{ p: 3, mb: 2 }}>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  Wallet Payment Instructions
                </Typography>
                <Typography variant="body1" style={{color:'black'}}>
                  Please complete your payment through your preferred wallet app.
                </Typography>
              </CardContent>
            </Card>
          )}

          {paymentMethod === 'google-pay' && (
            <Card variant="outlined" sx={{ p: 3, mb: 2 }}>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  Complete Payment with Google Pay
                </Typography>
                <Button variant="contained" color="primary" onClick={handleGooglePay}>
                  Pay with Google Pay
                </Button>
              </CardContent>
            </Card>
          )}

          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button variant="contained" color="primary" onClick={handlePayment}>
              Confirm Payment
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
