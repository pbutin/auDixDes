import * as React from 'react';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import FacebookIcon from '@mui/icons-material/Facebook';
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

const games = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];



const theme = createTheme();

export default function Blog() {

    const [allGames, setAllGames] = useState([]);
    const [error, setError] = useState();
    const [games, setGames] = useState([]);

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
        <main>
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