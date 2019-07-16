import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  color: ${props => props.theme.color.main};
  text-decoration: none;
  text-transform: capitalize;
  padding-bottom: 5px;
  position: relative;

  &:after {
    background: ${props => props.theme.color.primary};
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    transition: width 0.3s ease-out;
  }

  &:hover,
  &:focus,
  &.active {
    &:after {
      width: 100%;
    }
  }
`;

export default props => (
  <StyledLink
    to={props.to}
    className={props.className}
    activeClassName="active"
  >
    {props.children}
  </StyledLink>
);
