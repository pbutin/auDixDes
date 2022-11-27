import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';


function Event({event, selected}) {

  return (
    <Grid item xs={12} sx={{paddingBottom: '25px'}}>
        <Card sx={{ 
          borderRadius: '0.7rem',
          border:
              selected === event.id
                ? 'black solid 2px'
                : 'none'
          }}>
            <CardContent>
              <Box  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Typography component="h2" variant="h5">
                    {event.lieu}
                </Typography>
                <Typography component="h2" variant="h5" paragraph align="justify">
                    {event.date}
                </Typography>
              </Box>
                <Typography variant="subtitle1" paragraph align="justify" sx={{marginBottom:0}}>
                    {event.description}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  );
}


export default Event;