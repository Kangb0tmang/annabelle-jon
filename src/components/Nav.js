import React from 'react';
import { Link } from 'gatsby';
import { Box, Text } from 'rebass';
import { theme } from '../styles/theme';
import Logo from '../assets/logo.svg';

export const navItems = [
  {
    title: 'RSVP',
    url: '/rsvp',
  },
  {
    title: 'The Day',
    url: '/the-day',
  },
  {
    title: 'FAQ',
    url: '/faq',
  },
  {
    title: 'Registry',
    url: '/registry',
  },
];

const Header = ({ ...props }) => {
  return (
    <Box
      as="header"
      sx={{
        width: '100%',
      }}
    >
      {props.children}
    </Box>
  );
};

const SiteLogo = () => {
  return (
    <Box
      as={Link}
      to="/"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: ['auto'],
        width: ['300px', '', '424px'],
        margin: '0 auto',
        py: ['15px', '', '30px'],
      }}
    >
      <Logo />
    </Box>
  );
};

const NavBar = ({ ...props }) => {
  return (
    <Box
      as="nav"
      sx={{
        display: 'flex',
        flex: '1 0 auto',
        flexDirection: 'row',
        alignItems: 'center',
        height: 'auto',
        background: theme.colours.navy, // Temporary
      }}
    >
      <Box
        as="ul"
        sx={{
          display: 'flex',
          flex: '1 0 auto',
          justifyContent: 'center',
          height: 'auto',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

const NavItem = ({ item, index }) => {
  return (
    <Text as="li" sx={{ m: 0, p: 0, listStyle: 'none', width: ['auto'] }}>
      <Box
        as={Link}
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          p: '15px',
          textDecoration: 'none',
          fontSize: '20px',
          fontWeight: theme.fontWeights.medium,
          color: theme.colours.white, // Temporary
          '&:hover': {
            color: theme.colours.white, // Temporary,
          },
          '&:focus': {
            color: theme.colours.white, // Temporary,
          },
        }}
        to={item.url}
      >
        {item.title}
      </Box>
    </Text>
  );
};

const Nav = () => {
  return (
    <Header>
      <SiteLogo />
      <NavBar>
        {navItems.map((item, index) => {
          return <NavItem key={index} index={index} item={item}></NavItem>;
        })}
      </NavBar>
    </Header>
  );
};

export default Nav;
