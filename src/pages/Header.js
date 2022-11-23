import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {Link as  RouterLink} from 'react-router-dom';

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">LOGO</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <RouterLink
            to={section.url}
            >
            <Link
              className='hover-underline-animation'
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              to={section.url}
              sx={{ p: 1, flexShrink: 0, fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', padding: 0, paddingTop: '0.75rem'}}
            >
            {section.title}
          </Link>

          </RouterLink>

        ))}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;