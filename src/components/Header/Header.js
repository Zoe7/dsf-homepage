import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { darken } from "polished";
import NavigationLink from "./NavigationLink";

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
    height: 4rem;
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

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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
  `);

  return (
    <Header>
      <StyledContent>
        <div style={{ display: "flex", alignContent: "center" }}>
          <Logo to="/">
            <Img
              fixed={data.file.childImageSharp.fixed}
              alt="dsf-logo"
              width={"64"}
              height={"64"}
            />
          </Logo>
          <Title to="/">Dansk Speedcubing Forening</Title>
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
