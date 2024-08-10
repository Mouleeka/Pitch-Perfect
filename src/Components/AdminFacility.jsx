import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, TextField, Card, CardContent, List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Facility = () => {
  const [facilities, setFacilities] = useState([]);
  const [newFacility, setNewFacility] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  // Fetch facilities from the server (mocked here)
  useEffect(() => {
    // Example: Fetch facilities from the backend
    const fetchFacilities = async () => {
      // Replace with actual API call
      const data = await Promise.resolve(['Football Field', 'Basketball Court']);
      setFacilities(data);
    };

    fetchFacilities();
  }, []);

  const handleAddFacility = () => {
    if (newFacility.trim() !== '') {
      setFacilities([...facilities, newFacility]);
      setNewFacility('');
    }
  };

  const handleEditFacility = (index) => {
    setEditIndex(index);
    setEditValue(facilities[index]);
  };

  const handleUpdateFacility = () => {
    const updatedFacilities = facilities.map((facility, index) =>
      index === editIndex ? editValue : facility
    );
    setFacilities(updatedFacilities);
    setEditIndex(-1);
    setEditValue('');
  };

  const handleDeleteFacility = (index) => {
    const updatedFacilities = facilities.filter((_, i) => i !== index);
    setFacilities(updatedFacilities);
  };

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Manage Facilities
        </Typography>
        <List>
          {facilities.map((facility, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid #e0e0e0' }}>
              {editIndex === index ? (
                <TextField
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  sx={{ mr: 2 }}
                />
              ) : (
                <ListItemText primary={facility} />
              )}
              <IconButton onClick={() => (editIndex === index ? handleUpdateFacility() : handleEditFacility(index))}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteFacility(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Card sx={{ mt: 4, p: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Add New Facility
            </Typography>
            <TextField
              label="Facility Name"
              value={newFacility}
              onChange={(e) => setNewFacility(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleAddFacility}>
              Add Facility
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Facility;
