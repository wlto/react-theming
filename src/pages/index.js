import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ImageCard from "../components/ImageCard"

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

const imagesDescription = [
  {
    description: `feel like summer and i don't wanna miss you`,
    date: `April 04, 2020`
  },
  {
    description: `with or without i've waited my whole life`,
    date: 'March 27, 2020'
  },
]

const IndexPage = () => {
  const { allImageSharp } = useStaticQuery(graphql`
    query AllImages {
      allImageSharp {
        edges {
          node {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }  
  `)
  const images = allImageSharp.edges.map((img, index) => {
    return {
      ...imagesDescription[index],
      src: img.node.fluid
    }
  })

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
