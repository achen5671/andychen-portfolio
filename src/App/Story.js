import React from 'react';
import styled from 'styled-components';
import StoryItem from '../components/StoryItem';
import data from '../data/story';

export default function Story()  {
  return (data.length > 0 && (
    <StoryContainer>
      {data.map((item, idx) => (
        <StoryItem item={item} key={idx} />
      ))}
    </StoryContainer>
  ))
}

const StoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
`