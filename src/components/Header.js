import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeader = styled('header')`
  background-color: ${(props) => props.theme.navy};
`;

const StyledNav = styled('nav')`
  display: flex;
  padding: 10px;
  a {
    margin-right: 10px;
  }
`;

const Header = () => {
  const navItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'RSVP',
      url: 'rsvp',
    },
    {
      title: 'The Day',
      url: 'the-day',
    },
    {
      title: 'Registry',
      url: 'registry',
    },
    {
      title: 'FAQ',
      url: 'faq',
    },
  ];

  return (
    <StyledHeader>
      <StyledNav>
        {navItems.map((item, index) => {
          return (
            <Link key={index} to={item.url}>
              {item.title}
            </Link>
          );
        })}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
