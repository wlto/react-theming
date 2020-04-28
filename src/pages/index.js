import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ImageCard from "../components/ImageCard"
import ThemeProvider from "../contexts/themes/ThemeProvider"

import images from "../images"

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 3rem 0;
  padding-top: 2.4rem;
`

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Layout>
        <SEO title="Home" />
        <StyledMain>
          {
            images.map((img, index) => (
              <ImageCard img={img} key={`image-${index}`} />
            ))
          }
        </StyledMain>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
