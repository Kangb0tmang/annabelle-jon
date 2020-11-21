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
        width: ['250px', '', '424px'],
        m: ['0', '', '0 auto'],
        py: ['15px', '', '30px'],
        '@media only screen and (min-width: 500px) and (max-width: 740px)': {
          width: '300px',
        },
        '@media only screen and (max-width: 740px)': {
          ml: '20px',
        },
      }}
    >
      <Logo />
    </Box>
  );
};

// Transition: https://codepen.io/shieldsma91/pen/zLpbLX
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
        transform: [mobileMenuOpen ? 'none' : 'translateX(-100%)', '', 'none'],
        width: ['100vw', '', 'auto'],
        height: ['100%', '', 'auto'],
        bg: [theme.colours.white, '', theme.colours.navy], // Temporary
        transition: 'transform 0.5s ease-in-out 0.5s',
      }}
    >
      <Box
        as="ul"
        sx={{
          display: 'flex',
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
        justifyContent: 'center',
        width: 'auto',
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
            color: ['', '', theme.colours.white], // Temporary
            '&:after': {
              width: 'calc(100% - 40px)',
              transition: 'width 0.2s ease',
              bg: theme.colours.gold, // Temporary
            },
          },
          '&:focus': {
            color: ['', '', theme.colours.white], // Temporary
          },
        }}
      >
        {item.title}
      </Text>
    </Box>
  );
};

// Transition: https://codepen.io/designcouch/pen/hyFAD/
const MobileTrigger = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <Box
      sx={{
        display: ['block', '', 'none'],
        alignSelf: 'flex-end',
        position: 'absolute',
        top: '20px',
        right: '20px',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
        onClick={(e) => {
          e.preventDefault();
          setMobileMenuOpen(!mobileMenuOpen);
        }}
      >
        {/* Hamburger */}
        <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
          <Box
            sx={{
              position: 'relative',
              width: mobileMenuOpen ? 0 : '30px',
              height: '4px',
              m: '7px 0',
              bg: theme.colours.navy, // Temporary
              transitionProperty: 'all',
              transitionDuration: '0.25s',
              transitionTimingFunction: 'ease-in-out',
              transitionDelay: mobileMenuOpen ? '0s' : '0.5s',
            }}
          ></Box>
          <Box
            sx={{
              position: 'relative',
              width: mobileMenuOpen ? 0 : '30px',
              height: '4px',
              m: '7px 0',
              bg: theme.colours.navy, // Temporary
              transitionProperty: 'all',
              transitionDuration: '0.25s',
              transitionTimingFunction: 'ease-in-out',
              transitionDelay: mobileMenuOpen ? '0.125s' : '0.625s',
            }}
          ></Box>
          <Box
            sx={{
              position: 'relative',
              width: mobileMenuOpen ? 0 : '30px',
              height: '4px',
              m: '7px 0',
              bg: theme.colours.navy, // Temporary
              transitionProperty: 'all',
              transitionDuration: '0.25s',
              transitionTimingFunction: 'ease-in-out',
              transitionDelay: mobileMenuOpen ? '0.25s' : '0.75s',
            }}
          ></Box>
        </Box>
        {/* Cross */}
        <Box
          sx={{
            position: 'absolute',
            top: '5px',
            width: '100%',
            height: '100%',
            transform: 'rotate(45deg)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '13px',
              width: '4px',
              height: mobileMenuOpen ? '80%' : 0,
              borderRadius: '5px',
              bg: theme.colours.navy, // Temporary
              transitionProperty: 'all',
              transitionDuration: '0.25s',
              transitionTimingFunction: 'ease-in-out',
              transitionDelay: mobileMenuOpen ? '0.625s' : '0s',
            }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              top: '13px',
              left: '10%',
              width: mobileMenuOpen ? '80%' : 0,
              height: '4px',
              borderRadius: '5px',
              bg: theme.colours.navy, // Temporary
              transitionProperty: 'all',
              transitionDuration: '0.25s',
              transitionTimingFunction: 'ease-in-out',
              transitionDelay: mobileMenuOpen ? '0.375s' : '0.25s',
            }}
          ></Box>
        </Box>
      </Box>
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
