import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from "styled-components";
import Header from "./Header/Header";

export default ({ pageContext: { content } }) => {
  const theme = {
    color: {
      main: "#403d3d",
      primary: "#db2516",
      lightgrey: "#f4f7f6"
    },
    width: "1080px"
  };

  const GlobalStyle = createGlobalStyle`
  @import url("https://rsms.me/inter/inter.css");

  body {
    font-family: "Inter", sans-serif;
    margin: 0;
    
    color: ${theme.color.main};
  }
  `;

  const Content = styled.div`
    margin: auto;
    max-width: ${theme.width};

    h1 {
      font-size: 2.2rem;
      font-weight: 500;
    }

    h2 {
      font-size: 2rem;
      font-weight: 500;
    }

    p {
      max-width: 900px;
    }

    a {
      color: ${theme.color.main};
      text-decoration: none;
      position: relative;

      :after {
        content: "";

        width: 100%;
        position: absolute;
        left: 0;
        bottom: -2px;

        border-bottom: 2px solid ${theme.color.primary};
      }

      &:hover,
      &:focus {
        color: ${theme.color.primary};
      }
    }

    pre {
      font-family: inherit;
      background: ${theme.color.lightgrey};
      padding: 30px 40px;
      width: fit-content;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Content>
          {<ReactMarkdown source={content} escapeHtml={false} />}
        </Content>
      </>
    </ThemeProvider>
  );
};
