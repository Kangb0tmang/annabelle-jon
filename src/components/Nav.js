import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Box, Text } from 'rebass';
import { RemoveScroll } from 'react-remove-scroll';
import { theme } from '../styles/theme';
import Logo from '../assets/logo.svg';
import Leaf from '../assets/leaf.svg';

export const navItems = [
  {
    title: 'The Day',
    url: '/the-day',
  },
  {
    title: 'FAQS',
    url: '/faq',
  },
  {
    title: 'RSVP',
    url: '/rsvp',
  },
];

const Header = ({ ...props }) => (
  <Box
    as="header"
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: ['center', '', 'space-between'],
      width: '100%',
      '@media only screen and (max-width: 450px)': {
        justifyContent: 'space-between',
      },
    }}
  >
    {props.children}
  </Box>
);

const SiteLogo = () => (
  <Box
    as={Link}
    to="/"
    sx={{
      zIndex: '190',
      height: 'auto',
      width: 'auto',
      mt: ['20px', '', '', '40px'],
      ml: ['20px', '', '', '40px'],
      svg: {
        width: ['200px', '', '', 'auto'],
      },
      '@media only screen and (max-width: 450px)': {
        ml: '10px',
      },
    }}
  >
    <Logo />
  </Box>
);

const HeaderLeaf = () => (
  <Box
    sx={{
      display: ['none', '', 'block'],
      width: ['', '', '125px', '200px'],
      height: 'auto',
      m: ['', '', '30px 0 -40px 50px', '30px 0 -75px 100px'],
      transform: 'rotate(-115deg)',
    }}
  >
    <Leaf />
  </Box>
);

// Transition: https://codepen.io/shieldsma91/pen/zLpbLX
const NavBar = ({ mobileMenuOpen, ...props }) => (
  <Box
    as="nav"
    sx={{
      position: ['fixed', '', 'relative'],
      zIndex: '100',
      transform: [mobileMenuOpen ? 'none' : 'translateX(-100%)', '', 'none'],
      width: ['100vw', '', 'auto'],
      height: ['100vh', '', 'auto'],
      mt: ['20px', '', '40px', '60px'],
      bg: [theme.colours.white, '', 'transparent'], // Temporary
      transition: 'transform 0.5s ease-in-out 0.5s',
    }}
  >
    <RemoveScroll enabled={mobileMenuOpen}>
      <Box
        as="ul"
        sx={{
          display: 'flex',
          flexDirection: ['column', '', 'row'],
          flex: '1 0 auto',
          justifyContent: ['flex-start', '', 'center'],
          height: 'auto',
          transform: ['translateY(100%)', '', 0],
        }}
      >
        {props.children}
      </Box>
    </RemoveScroll>
  </Box>
);

const NavItem = ({ item }) => (
  <Box
    as="li"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto',
      mb: ['40px', '', 0],
      '&:nth-of-type(3)': {
        display: ['flex', '', 'none'],
        mb: 0,
      },
    }}
  >
    <Text
      as={Link}
      to={item.url}
      sx={{
        position: 'relative',
        alignSelf: 'center',
        p: ['15px', '', '15px 20px', '15px 30px'],
        textDecoration: 'none',
        lineHeight: ['18px', '', '22px'],
        fontSize: ['20px', '', '', '24px'],
        fontWeight: theme.fontWeights.bold,
        color: theme.colours.navy, // Temporary
        '&:after': {
          content: '""',
          position: 'absolute',
          left: '20px',
          bottom: '6px',
          width: '0px',
          height: '2px',
        },
        '&:hover': {
          color: theme.colours.black, // Temporary
          '&:after': {
            width: 'calc(100% - 40px)',
            transition: 'width 0.2s ease',
            bg: theme.colours.purple, // Temporary
          },
        },
        '&:focus': {
          color: theme.colours.black, // Temporary
        },
      }}
    >
      {item.title}
    </Text>
  </Box>
);

const RSVPNavItem = () => (
  <Box
    as="li"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mx: '20px',
    }}
  >
    <Text
      as={Link}
      to="/rsvp"
      sx={{
        display: ['none', '', 'block'],
        position: 'relative',
        width: 'auto',
        p: ['15px', '', '', '15px 20px'],
        textDecoration: 'none',
        lineHeight: ['18px', '', '22px'],
        border: `1px solid ${theme.colours.black}`,
        borderRadius: '5px',
        fontSize: ['20px', '', '', '24px'],
        fontWeight: theme.fontWeights.bold,
        color: theme.colours.navy, // Temporary
        transition: 'background 0.3s ease',
        '&:after': {
          content: '""',
          position: 'absolute',
          left: '20px',
          bottom: '6px',
          width: '0px',
          height: '2px',
        },
        '&:hover': {
          bg: theme.colours.navy, // Temporary
          color: theme.colours.white, // Temporary
        },
        '&:focus': {
          bg: theme.colours.navy, // Temporary
          color: theme.colours.white, // Temporary
        },
      }}
    >
      RSVP
    </Text>
  </Box>
);

// Transition: https://codepen.io/designcouch/pen/hyFAD/
const MobileTrigger = ({ mobileMenuOpen, setMobileMenuOpen }) => (
  <Box
    sx={{
      display: ['block', '', 'none'],
      position: 'absolute',
      top: '20px',
      right: '30px',
      zIndex: 200,
    }}
  >
    <Box
      sx={{
        position: 'relative',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
      }}
      onClick={(e) => {
        e.preventDefault();
        setMobileMenuOpen(!mobileMenuOpen);
      }}
    >
      {/* Hamburger */}
      <Box
        sx={{
          position: 'absolute',
          top: '30px',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: mobileMenuOpen ? 0 : '40px',
            height: '4px',
            m: '7px 0',
            bg: theme.colours.navy, // Temporary
            transitionProperty: 'all',
            transitionDuration: '0.25s',
            transitionTimingFunction: 'ease-in-out',
            transitionDelay: mobileMenuOpen ? '0s' : '0.5s',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            width: mobileMenuOpen ? 0 : '40px',
            height: '4px',
            m: '7px 0',
            bg: theme.colours.navy, // Temporary
            transitionProperty: 'all',
            transitionDuration: '0.25s',
            transitionTimingFunction: 'ease-in-out',
            transitionDelay: mobileMenuOpen ? '0.125s' : '0.625s',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            width: mobileMenuOpen ? 0 : '40px',
            height: '4px',
            m: '7px 0',
            bg: theme.colours.navy, // Temporary
            transitionProperty: 'all',
            transitionDuration: '0.25s',
            transitionTimingFunction: 'ease-in-out',
            transitionDelay: mobileMenuOpen ? '0.25s' : '0.75s',
          }}
        />
      </Box>
      {/* Cross */}
      <Box
        sx={{
          position: 'absolute',
          top: '30px',
          width: '100%',
          height: '100%',
          transform: 'rotate(45deg)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '0%',
            left: '18px',
            width: '4px',
            height: mobileMenuOpen ? '100%' : 0,
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
            top: '18px',
            left: '0%',
            width: mobileMenuOpen ? '100%' : 0,
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

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Header>
      <SiteLogo />
      <MobileTrigger
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <HeaderLeaf />
      <NavBar mobileMenuOpen={mobileMenuOpen}>
        {navItems.map((item, index) => {
          return <NavItem key={index} index={index} item={item}></NavItem>;
        })}
        <RSVPNavItem />
      </NavBar>
    </Header>
  );
};

export default Nav;
