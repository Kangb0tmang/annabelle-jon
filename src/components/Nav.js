import React, { useState } from 'react';
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
        m: ['0', '', '0 auto'],
        py: ['15px', '', '30px'],
        '@media only screen and (max-width: 740px)': {
          ml: '20px',
        },
      }}
    >
      <Logo />
    </Box>
  );
};

const NavBar = ({ mobileMenuOpen, ...props }) => {
  return (
    <Box
      as="nav"
      sx={{
        display: 'flex',
        flex: '1 0 auto',
        flexDirection: 'row',
        alignItems: ['flex-start', '', 'center'],
        position: ['fixed', '', 'relative'],
        zIndex: '100',
        transform: [mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)'],
        height: ['100%', '', 'auto'],
        width: ['100vw', '', 'auto'],
        bg: [theme.colours.white, '', theme.colours.navy], // Temporary
        transition: 'transform 0.5s ease',
      }}
    >
      <Box
        as="ul"
        sx={{
          display: [mobileMenuOpen ? 'flex' : 'none', '', 'flex'],
          flexDirection: ['column', '', 'row'],
          flex: '1 0 auto',
          justifyContent: ['flex-start', '', 'center'],
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
        width: ['auto'],
      }}
    >
      <Text
        as={Link}
        to={item.url}
        sx={{
          position: 'relative',
          alignSelf: 'center',
          p: ['15px', '', '15px 30px'],
          textDecoration: 'none',
          lineHeight: ['18px', '', '22px'],
          fontSize: ['20px', '', '24px'],
          fontWeight: theme.fontWeights.bold,
          color: [theme.colours.navy, '', theme.colours.white], // Temporary
          '&:after': {
            content: '""',
            position: 'absolute',
            left: '20px',
            bottom: '6px',
            width: '0px',
            height: '2px',
          },
          '&:hover': {
            color: ['', '', theme.colours.white], // Temporary,
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

const MobileTrigger = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <Box
      sx={{
        display: ['block', '', 'none'],
        alignSelf: 'flex-end',
        position: 'absolute',
        top: '30px',
        right: '20px',
      }}
    >
      <Text
        as="a"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setMobileMenuOpen(!mobileMenuOpen);
        }}
      >
        {mobileMenuOpen ? 'Close' : 'Open'}
      </Text>
    </Box>
  );
};

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Header>
      <SiteLogo />
      <MobileTrigger
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <NavBar mobileMenuOpen={mobileMenuOpen}>
        {navItems.map((item, index) => {
          return <NavItem key={index} index={index} item={item}></NavItem>;
        })}
      </NavBar>
    </Header>
  );
};

export default Nav;
