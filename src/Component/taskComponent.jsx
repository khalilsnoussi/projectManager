import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MyCardtaskComponent = ({ allEvents }) => {
  return (
    <Card>
      <CardContent>
        {allEvents.map((event, index) => (
          <Typography key={index} variant="h6" component="h2">
             -> Tache : {event.title} 
             <br />
             -> Date :{event.start}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};
export default MyCardtaskComponent ; 