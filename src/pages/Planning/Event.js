import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';
import CakeIcon from '@mui/icons-material/Cake';
import TimelapseIcon from '@mui/icons-material/Timelapse';


function Event(props) {
  const { event } = props;

  return (
    <Grid item xs={12} md={6}>
        <Card sx={{ 
          display: 'flex',
          borderRadius: '0.7rem' }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                  {event.lieu}
              </Typography>
              <Typography variant="subtitle1" paragraph align="justify">
                  {event.date}
              </Typography>
              <Typography variant="subtitle1" paragraph align="justify">
                  {event.description}
              </Typography>

            </CardContent>
        </Card>
    </Grid>
  );
}


export default Event;