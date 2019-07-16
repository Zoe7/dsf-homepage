import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { darken } from "polished";
import NavigationLink from "./NavigationLink";
import logo from "./dsf-logo.png";

const query = graphql`
  query AllPages {
    allSitePage(
      filter: { isCreatedByStatefulCreatePages: { eq: false } }
      skip: 1
    ) {
      nodes {
        path
        context {
          title
          id
        }
      }
    }
  }
`;

export default () => {
  const Header = styled.nav`
    background-color: ${props => props.theme.color.lightgrey};
    border-bottom: 1px solid
      ${props => darken(0.05, props.theme.color.lightgrey)};
  `;

  const StyledContent = styled.div`
    margin: auto;
    max-width: ${props => props.theme.width};
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    justify-content: space-between;
  `;

  const NavigationItem = styled.li`
    padding: 1rem;
    margin: 0;
    list-style: none;
    display: inline;
  `;

  const Logo = styled(NavigationLink)`
    &:hover,
    &:focus,
    &.active {
      &:after {
        width: 0;
      }
    }
  `;

  const Title = styled(NavigationLink)`
    text-transform: capitalize;
    font-size: 1.5rem;
    margin-left: 1.5rem;
    line-height: 4rem;

    &:after {
      bottom: 20px;
    }
  `;

  const data = useStaticQuery(query);

  return (
    <Header>
      <StyledContent>
        <div style={{ display: "flex", alignContent: "center" }}>
          <Logo>
            <img src={logo} alt="dsf-logo" style={{ height: "4rem" }} />
          </Logo>
          <Title>Dansk Speedcubing Forening</Title>
        </div>
        <ul>
          {data.allSitePage.nodes.map(({ path, context }) => (
            <NavigationItem key={context.id}>
              <NavigationLink to={path}>{context.title}</NavigationLink>
            </NavigationItem>
          ))}
        </ul>
      </StyledContent>
    </Header>
  );
};
