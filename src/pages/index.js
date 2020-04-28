import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ImageCard from "../components/ImageCard"

import images from "../images"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Helvetica, 'Segoe UI', Arial, sans-serif;
  }

  :root {
    font-size: 14px;
  }
`

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 3rem 0;
  padding-top: 2.4rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledMain>
      {
        images.map((img, index) => (
          <ImageCard img={img} key={`image-${index}`} />
        ))
      }
    </StyledMain>
    <GlobalStyle />
  </Layout>
)

export default IndexPage
