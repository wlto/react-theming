import React from "react"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }

  :root {
    font-size: 14px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <GlobalStyle />
  </Layout>
)

export default IndexPage
