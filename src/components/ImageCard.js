import React, { useContext } from "react"
import styled from "styled-components"

import ThemeContext from "../contexts/themes/ThemeContext"

const ImageCardWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${props => props.theme.colourTheme.accent};
  overflow: hidden;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 12.1rem;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
  }
`

const ImageCaption = styled.p`
  width: 70%;
  padding-top: 0.7rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.colourTheme.primary};

  time {
    display: inline-block;
    padding-top: 0.57rem;
    font-size: 0.8rem;
    font-weight: 400;
  }
`

const ImageCard = (props) => {
  const { img } = props
  const { theme } = useContext(ThemeContext)

  return (
    <div className="ImageCard">
      <ImageCardWrapper theme={theme} >
        <ImageWrapper>
          <img src={img.src} />
        </ImageWrapper>
        <ImageCaption theme={theme} >
          {img.description}
          <br />
          <time>{img.date}</time>
        </ImageCaption>
      </ImageCardWrapper>
    </div>
  )
}

export default ImageCard