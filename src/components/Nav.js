import React from 'react';
import { Link } from 'gatsby';
import { Box, Text } from 'rebass';
import { theme } from '../styles/theme';

export const navItems = [
  {
    title: 'RSVP',
    url: 'rsvp',
  },
  {
    title: 'The Day',
    url: 'the-day',
  },
  {
    title: 'FAQ',
    url: 'faq',
  },
  {
    title: 'Registry',
    url: 'registry',
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
        background: theme.colors.navy, // Temporary
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
    <Text
      as="li"
      sx={{ m: 0, p: 0, listStyle: 'none', width: ['100%', 'auto'] }}
    >
      <Box
        as={Link}
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          p: '15px',
          textDecoration: 'none',
          fontSize: '20px',
          fontWeight: 'semiBold',
          color: theme.colors.white, // Temporary
          '&:hover': {
            color: theme.colors.white, // Temporary,
          },
          '&:focus': {
            color: theme.colors.white, // Temporary,
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
      <NavBar>
        {navItems.map((item, index) => {
          return <NavItem key={index} index={index} item={item}></NavItem>;
        })}
      </NavBar>
    </Header>
  );
};

export default Nav;
