import React, { useState } from 'react';
import styled from 'styled-components';
const parse = require('html-react-parser');

// Story Item will take an entire section / page
export default function StoryItem ({ item }) {
    const { title, position, text, image, date, detail: { tag }} = item;

    const [isDetailVisible, toggleDetail ] = useState(false)
    return (
    <StorySection>
        <StoryContent>
            <Text>{date}</Text>
            <Title>{title}</Title>
            <Text style={{ fontWeight:'bold'}}>{position}</Text>
            <Text>{text}</Text>
            {tag != '' && <DetailButton onClick={() => {toggleDetail(!isDetailVisible)}}>Learn more</DetailButton>}
        </StoryContent>
        <ImageContainer>
          <StoryImage src={image} />
          <ImageOverlay>
            <span>This is my team</span>
          </ImageOverlay>
        </ImageContainer>
        {isDetailVisible && parse(tag)}
    </StorySection>
    )
}

const StoryContent = styled.div`
    min-height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 50%;
`
const StorySection = styled.section`
  background-color: #ffffff;
  min-height: 100vh;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; */
  font-size: calc(10px + 2vmin);
  color: black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 50px;
  position: relative;
`

const ImageContainer = styled.div`
  position: relative;
`

const StoryImage = styled.img`
  display: block;
  height: 50%;
  width: 50%;
  align-items: flex-end;
  margin-left: 50%;
  /* min-height: 100vh; */
`

const ImageOverlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 50%;
  align-items: flex-end;
  margin-left: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.25s;
  backdrop-filter: blur(5px);

  &:hover {
    opacity: 1;
  }

  /* hover > * child component */
  &:hover > * {
    transform: translateY(0);
  }

  /* target all child component */
  >* {
    transform: translateY(20px);
    transition: transform 0.25s;
  }
`

const Title = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
`

const Text = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
`

const DetailButton = styled.button`
  text-decoration: none;
  border: none;
  /* background-color: #ffffff; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin-top: 20px;
`
