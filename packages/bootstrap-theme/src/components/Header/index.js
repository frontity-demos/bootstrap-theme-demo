import React from "react";
import { connect } from "frontity";

import Nav from '../Nav/'
import MobileMenu from '../MobileMenu/'

import {Container, Title, Description, StyledLink} from './styles'

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

export default connect(Header);

