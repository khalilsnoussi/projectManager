import React from 'react';
import { useState } from 'react';
import { Card, Avatar, Divider, Box, Typography, CardHeader, Popover } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Task';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const MyCardtaskComponent = ({ allEvents }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {allEvents.map((event, index) => {
        // Create a new event object with the desired start format
        const newEvent = { ...event }; // Create a copy of the event object
        newEvent.start = formatDate(newEvent.start); // Format the start date
        newEvent.end =  formatDate(newEvent.end);
        return (
          <div>
            <Card key={index} variant="outlined" sx={{
              maxWidth: 500, 
              bgcolor: '#bc4749', 
              color: 'white', 
              height:"100%",
              marginBottom: 1,
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Base shadow
              '&:hover': {
                boxShadow: '-5px -5px 5px rgba(0.5, 0.5, 0.5, 0.5)', // Hover shadow
              }
            }}>
              <CardHeader sx={{ color: 'white' }}
                avatar={<FavoriteIcon />}
                action={
                  <IconButton aria-label="settings" onClick={handleSettingsClick}>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={newEvent.title}
                subheader={newEvent.start+"|"+newEvent.end}
                subheaderTypographyProps={{ style: { color: 'white' } }}
              />
            </Card>
          </div>
        );
      })}
            <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {/* <DialogTitle>Settings for khalil</DialogTitle>
        <DialogContent>
          <DialogContentText>
            // Your dialog content here
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions> */}
        <Typography sx={{ p: 2 }}>Tache effectue</Typography>
        <Typography sx={{ p: 2 }}>Tache supprime</Typography>
      </Popover>
    </div>
  );
};

// Function to format the date (replace with your desired formatting logic)
const formatDate = (timestamp) => {
  // ... your date formatting logic here
  // For example, you can use the same logic as in your previous response:
  const eventDate = new Date(timestamp);
  const year = eventDate.getFullYear();
  const month = String(eventDate.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
  const day = String(eventDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default MyCardtaskComponent;
