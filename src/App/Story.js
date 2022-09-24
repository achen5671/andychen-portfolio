import React from 'react';
import styled from 'styled-components';
import StoryItem from '../components/StoryItem';
import expData from '../data/expData';

export default function Story()  {
  return (expData.length > 0 && (
    <StoryContainer>
      {expData.map((item, idx) => (
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
