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
    width: "1200px"
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
