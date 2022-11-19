import * as React from 'react';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainBanner from './MainBanner';
import Game from './Game';
import Footer from './Footer';

import getAllGames from './SheetApiHelper';

const sections = [
  { title: 'Les jeux', url: '#' },
  { title: 'Planning', url: '#' },
  { title: 'Tarif', url: '#' },
  { title: 'Accomplissement', url: '#' },
  { title: 'Info utile', url: '#' },
];

const mainBanner = {
  title: 'Bienvenue chez Aux Dix Dès',
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
  image: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
  imageText: 'main image description'
};


const theme = createTheme();

export default function Blog() {

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
            
            games = games.map(function (i, key) {
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
            
            games.shift();
    
            setAllGames(games);
            setGames(games);
    
          } catch (error) {
            setError(error);
          }
        })();
      }, []);
    
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Aux Dix Dès" sections={sections} />
        <main className='main'>
          <MainBanner post={mainBanner} />
          <Grid container spacing={4}>
            {games.map((game) => (
              (game.display) && 
                <Game key={game.id} game={game} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Au Dix Dès"
        description="Tout droits reservé"
      />
    </ThemeProvider>
  );
}