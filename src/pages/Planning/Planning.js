
import MainBanner from '../MainBanner';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { getAllEvents } from '../../utils/SheetApiHelper';
import Event from './Event';
import Map from './Map';


export default function Planning() {

    const mainBanner = {
        title: 'Les evenements à venir',
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
        image: 'https://www.piedmontchurch.org/wp-content/uploads/2019/11/calendar-banner.png',
        imageText: 'main image description'
    };

    const [error, setError] = useState();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        document.title = "Aux Dix Dès - Planning"
    }, [])

    
    useEffect(() => {
        (async () => {
          try {
            const res = await getAllEvents();
    
            console.log(res.data);
    
    
            let events = res.data.valueRanges[0].values;
            
            events = events.map(function (i, index) {
              return {
                "id": index,
                "display" : i[0],
                "date": i[1],
                "lieu": i[2],
                "description": i[3],
                "long": i[4],
                "lat": i[5]
              }
            });
            
            events.shift();
    
            setEvents(events);
    
          } catch (error) {
            setError(error);
            console.log(error);
          }
        })();
      }, []);
    
  return (
    <Grid container>
        <MainBanner post={mainBanner} />
        <Grid item  xs={12} md={6}>
          <Map events={events}/>
        </Grid>
        <Grid item xs={12} md={6} sx={{ 
            paddingLeft: { xs : 0, md:'50px'}
          }}
          >
          {events.map((event) => (
              (event.display) && 
              <Event key={event.id} event={event} />
          ))}
        </Grid>
    </Grid>
  );
}