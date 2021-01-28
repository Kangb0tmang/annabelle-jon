import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Box, Text } from 'rebass';
import { RemoveScroll } from 'react-remove-scroll';
import { useMediaQuery } from 'react-responsive';
import { theme } from '../styles/theme';
import Branch from '../assets/branch.svg';
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
      justifyContent: ['center', '', '', 'space-between'],
      width: '100%',
    }}
  >
    {props.children}
  </Box>
);

const SiteLogo = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 899px)' });

  return (
    <Box
      as={Link}
      to="/"
      sx={{
        zIndex: '190',
        height: 'auto',
        width: 'auto',
        mt: ['40px', '', '', '', '40px'],
        ml: [0, '', '', '20px', '40px'],
        textAlign: 'center',
        textDecoration: 'none',
      }}
    >
      {isDesktop && (
        <Text
          sx={{
            lineHeight: ['', '', '', '35px'],
            textTransform: 'uppercase',
            letterSpacing: '10px',
            fontFamily: theme.fontFamily.baskervville,
            fontSize: ['', '', '', '35px'],
            color: theme.colours.lightnavy,
          }}
        >
          Annabelle
          <br />
          <Text
            as="span"
            sx={{ textAlign: 'center', fontSize: ['20px', '', '', '25px'] }}
          >
            &amp;
          </Text>
          <br />
          Jonathan
        </Text>
      )}
      {isMobile && (
        <Text
          sx={{
            lineHeight: '60px',
            textTransform: 'uppercase',
            letterSpacing: '10px',
            fontFamily: theme.fontFamily.baskervville,
            fontSize: '70px',
            color: theme.colours.lightnavy,
          }}
        >
          A
          <Text as="span" sx={{ textAlign: 'center', fontSize: '40px' }}>
            &amp;
          </Text>
          J
        </Text>
      )}
    </Box>
  );
};

// Leaf for header
const HeaderLeaf = () => (
  <Box
    sx={{
      display: ['none', '', '', 'block'],
      height: 'auto',
      m: ['', '', '30px 0 -40px', '', '30px 0 -25px'],
      svg: {
        width: ['', '', '175px', '', '302px'],
        height: ['', '', '175px', '', '272px'],
      },
    }}
  >
    <Branch />
  </Box>
);

// Leafs for mobile menu
const MobileMenuLeaf = ({ styles }) => (
  <Box
    sx={{
      display: ['block', '', '', 'none'],
      alignSelf: styles.alignSelf,
      width: '50px',
      height: 'auto',
      transform: styles.transform,
    }}
  >
    <Leaf />
  </Box>
);

// Transition: https://codepen.io/shieldsma91/pen/zLpbLX
const NavBar = ({ mobileMenuOpen, ...props }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 899px)' });

  return (
    <>
      {isDesktop && <MainNav>{props.children}</MainNav>}
      {isMobile && (
        <MobileNav mobileMenuOpen={mobileMenuOpen}>{props.children}</MobileNav>
      )}
    </>
  );
};

const MainNav = ({ ...props }) => (
  <Box
    as="nav"
    sx={{
      display: ['none', '', '', 'block'],
      position: 'relative',
      width: 'auto',
      height: 'auto',
    }}
  >
    <Box
      as="ul"
      sx={{
        display: 'flex',
        flexDirection: ['column', '', '', 'row'],
        flex: '1 0 auto',
        justifyContent: ['flex-start', '', '', 'center'],
        height: 'auto',
        transform: ['translateY(70%)', '', '', 0],
      }}
    >
      {props.children}
    </Box>
  </Box>
);

const MobileNav = ({ mobileMenuOpen, ...props }) => (
  <Box
    as="nav"
    sx={{
      display: ['', '', '', 'none'],
      position: 'fixed',
      zIndex: '100',
      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
      width: '100vw',
      height: '100vh',
      mt: '20px',
      bg: theme.colours.white,
      transition: 'transform 0.5s ease-in-out 0.5s',
    }}
  >
    <RemoveScroll enabled={mobileMenuOpen} style={{ height: 0 }}>
      <Box
        as="ul"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 0 auto',
          justifyContent: 'flex-start',
          height: 'auto',
          transform: 'translateY(70%)',
        }}
      >
        <MobileMenuLeaf
          styles={{
            alignSelf: 'flex-start',
            transform: [
              'translate(50%, -50px) rotate(-111deg)',
              'translate(100%, -75px) rotate(-111deg)',
            ],
          }}
        />
        {props.children}
        <MobileMenuLeaf
          styles={{
            alignSelf: 'flex-end',
            transform: [
              'translate(-50%, 50px) rotate(70deg)',
              'translate(-100%, 75px) rotate(70deg)',
            ],
          }}
        />
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
      mb: ['40px', '', '', 0],
      '&:nth-of-type(3)': {
        display: ['flex', '', '', 'none'],
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
        p: ['15px', '', '', '', '15px 30px'],
        textDecoration: 'none',
        lineHeight: ['18px', '', '', '22px'],
        fontSize: ['20px', '', '', '', '24px'],
        fontWeight: theme.fontWeights.bold,
        color: theme.colours.navy,
        '&:after': {
          content: '""',
          position: 'absolute',
          left: '20px',
          bottom: '6px',
          width: '0px',
          height: '2px',
        },
        '&:hover': {
          color: theme.colours.black,
          '&:after': {
            width: 'calc(100% - 40px)',
            transition: 'width 0.2s ease',
            bg: theme.colours.navy,
          },
        },
        '&:focus': {
          color: theme.colours.black,
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
      mr: '40px',
      ml: '20px',
    }}
  >
    <Text
      as={Link}
      to="/rsvp"
      sx={{
        display: ['none', '', '', 'block'],
        position: 'relative',
        width: 'auto',
        p: ['15px', '', '', '15px 20px'],
        textDecoration: 'none',
        lineHeight: ['18px', '', '22px'],
        border: `1px solid ${theme.colours.black}`,
        borderRadius: '5px',
        fontSize: ['20px', '', '', '24px'],
        fontWeight: theme.fontWeights.bold,
        color: theme.colours.navy,
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
          bg: theme.colours.navy,
          color: theme.colours.white,
        },
        '&:focus': {
          bg: theme.colours.navy,
          color: theme.colours.white,
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
      display: ['block', '', '', 'none'],
      position: 'absolute',
      top: '10px',
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
            bg: theme.colours.navy,
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
            bg: theme.colours.navy,
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
            bg: theme.colours.navy,
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
            bg: theme.colours.navy,
            transitionProperty: 'all',
            transitionDuration: '0.25s',
            transitionTimingFunction: 'ease-in-out',
            transitionDelay: mobileMenuOpen ? '0.625s' : '0s',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '18px',
            left: '0%',
            width: mobileMenuOpen ? '100%' : 0,
            height: '4px',
            borderRadius: '5px',
            bg: theme.colours.navy,
            transitionProperty: 'all',
            transitionDuration: '0.25s',
            transitionTimingFunction: 'ease-in-out',
            transitionDelay: mobileMenuOpen ? '0.375s' : '0.25s',
          }}
        />
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
          return <NavItem key={index} index={index} item={item} />;
        })}
        <RSVPNavItem />
      </NavBar>
    </Header>
  );
};

export default Nav;
