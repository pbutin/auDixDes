import React from "react";
import {Outlet} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const sections = [
    { title: 'Les jeux', url: '/' },
    { title: 'Planning', url: '/planning' },
    { title: 'Tarif', url: '#' },
    { title: 'Accomplissement', url: '#' },
    { title: 'Info utile', url: '#' },
  ];
  
const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Aux Dix Dès" sections={sections} />
        <main className='main'>
        <Outlet />
        </main>
      </Container>
      <Footer
        title="Au Dix Dès"
        description="Tout droits reservé"
      />
    </ThemeProvider>
  );
};

export default Layout;