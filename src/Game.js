import * as React from 'react';
import PropTypes from 'prop-types';
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


function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image={post.image}
                alt={post.imageLabel}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                  {post.title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                  {post.description}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center'}}>
                  <CategoryIcon />
                  <Typography variant="subtitle1">
                      {post.categorie}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center'}}>
                  <CakeIcon />
                  <Typography variant="subtitle1">
                      {post.age}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center'}}>
                  <GroupIcon />
                  <Typography variant="subtitle1">
                      {post.nbJoueurs}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center'}}>
                  <TimelapseIcon />
                  <Typography variant="subtitle1">
                      {post.duration}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
        </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;