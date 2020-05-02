import React from "react"
import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'

const ImageCardWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  background-color: var(--colour-accent);
  overflow: hidden;
`

const ImageWrapper = styled(BackgroundImage)`
  width: 100%;
  height: 12.1rem;
  border-radius: 5px;
  overflow: hidden;
  background-size: cover;
`

const ImageCaption = styled.p`
  width: 70%;
  padding-top: 0.7rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--colour-primary);

  time {
    display: inline-block;
    padding-top: 0.57rem;
    font-size: 0.8rem;
    font-weight: 400;
  }
`

const ImageCard = (props) => {
  const { img } = props

  return (
    <>
      <ImageCardWrapper>
        <ImageWrapper fluid={img.src} fadeIn="soft" />
        <ImageCaption>
          {img.description}
          <br />
          <time>{img.date}</time>
        </ImageCaption>
      </ImageCardWrapper>
    </>
  )
}

export default ImageCard