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
        bg: theme.colours.navy, // Temporary
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
    <Box
      as="li"
      sx={{
        display: 'flex',
        alignItems: 'center',
        m: 0,
        p: 0,
        listStyle: 'none',
        width: ['auto'],
      }}
    >
      <Text
        as={Link}
        to={item.url}
        sx={{
          position: 'relative',
          alignSelf: 'center',
          p: '15px',
          textDecoration: 'none',
          lineHeight: ['18px', '', '22px'],
          fontSize: ['20px', '', '24px'],
          fontWeight: theme.fontWeights.medium,
          color: theme.colours.white, // Temporary
          '&:after': {
            content: '""',
            position: 'absolute',
            left: '20px',
            bottom: '6px',
            width: '0px',
            height: '1px',
          },
          '&:hover': {
            color: theme.colours.white, // Temporary,
            '&:after': {
              width: 'calc(100% - 40px)',
              transition: 'width 0.2s ease',
              bg: theme.colours.gold, // Temporary
            },
          },
          '&:focus': {
            color: theme.colours.white, // Temporary,
          },
        }}
      >
        {item.title}
      </Text>
    </Box>
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
