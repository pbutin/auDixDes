
import MainBanner from '../MainBanner';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { getAllEvents } from '../../utils/SheetApiHelper';


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
            
            events = events.map(function (i, key) {
              return {
                "id": i,
                "display": i[0],
                "title": i[1],
                "description": i[2],
                "categorie": i[3],
                "age": i[4],
                "duration": i[5],
                "nbJoueurs" : i[6],
                "image": i[7],
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
    <div>    
        <MainBanner post={mainBanner} />
        <Grid container spacing={4}>
       
        </Grid>
    </div>
  );
}