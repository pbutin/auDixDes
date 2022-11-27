
import MainBanner from '../MainBanner';
import Game from './Game';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { getAllGames } from '../../utils/SheetApiHelper';


export default function Games() {

    const mainBanner = {
        title: 'Bienvenue chez Aux Dix Dès',
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
        image: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        imageText: 'main image description'
    };

    const [allGames, setAllGames] = useState([]);
    const [error, setError] = useState();
    const [games, setGames] = useState([]);

    useEffect(() => {
    document.title = "Aux Dix Dès - Les Jeux"
    }, [])

    
    useEffect(() => {
        (async () => {
          try {
            const res = await getAllGames();
    
            console.log(res.data);
    
    
            let games = res.data.valueRanges[0].values;
            
            games = games.map(function (i, index) {
              return {
                "id": index,
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
            
            games.shift();
    
            setAllGames(games);
            setGames(games);
    
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
        {games.map((game) => (
            (game.display) && 
            <Game key={game.id} game={game} />
        ))}
        </Grid></div>
  );
}