import React from 'react';
import { Row,Col } from 'react-bootstrap';
import styled from 'styled-components';

// Story Item will take an entire section / page
export default function StoryItem ({ item }) {
    return (
    <StorySection>
        <StoryContent>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
        </StoryContent>
        <StoryImage src={item.image} />
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

const StoryImage = styled.img`
    height: 50%;
    width: 50%;
    align-items: flex-end;
    margin-left: 50%;
    /* min-height: 100vh; */
`

const Title = styled.h3`

`

const Text = styled.p`
    dis
`