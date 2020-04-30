import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ImageCard from "../components/ImageCard"

import images from "../images"

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 2.4rem 0;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;

  @media only screen and (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media only screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`

const IndexPage = () => {
  return (
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
  )
}

export default IndexPage
