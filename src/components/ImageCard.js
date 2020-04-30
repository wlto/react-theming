import React from "react"
import styled from "styled-components"

const ImageCardWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  background-color: var(--colour-accent);
  overflow: hidden;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 12.1rem;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
        <ImageWrapper>
          <img src={img.src} alt={`${img.description}`} />
        </ImageWrapper>
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