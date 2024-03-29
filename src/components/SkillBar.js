import React from 'react';
import { Container } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { isVisible } from '@testing-library/user-event/dist/utils';

// TODO: Add proptypes
export default function SkillBar({ name, width }) {
    // Handles animation depending on scroll position, using react-intersection-oberser
  //  See Doc: https://github.com/thebuilder/react-intersection-observer#readme
  const { ref: skillRef, inView: mySkillIsVisible } = useInView();

  return (
    <Container>
      <SkillBox ref={skillRef}>
        <SkillTitle>{name}</SkillTitle>
        <Bar>
          <SkillPer isVisible={mySkillIsVisible} width={width}>
            <SkillToolTip>{width}</SkillToolTip>
          </SkillPer>
        </Bar>
      </SkillBox>
    </Container>
  );
}

const SkillBox = styled.div`
  width: 100%;
  margin: 25px 0;
`;

const SkillTitle = styled.span`
  display: 'block';
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const Bar = styled.div`
  height: 8px;
  width: 100%;
  border-radius: 6px;
  margin-top: 6px;
  background: rgba(0, 0, 0, 0.1);
`;

const progress = keyframes`
    0% {
        width: 0;
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
`;

const SkillPer = styled.span`
  position: relative;
  display: block;
  height: 100%;
  width: ${(props) => props.width || 'auto'};
  border-radius: 6px;
  background: crimson;
  animation: ${(props) => props.isVisible && progress} 1s ease-in-out forwards;
  /* background: #39e75f; */
  opacity: 0;
`;

const SkillToolTip = styled.span`
  position: absolute;
  right: -14px;
  top: -28px;
  font-size: 9px;
  font-weight: 500;
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  background: crimson;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px;
    height: 10px;
    width: 10px;
    z-index: -1;
    background-color: crimson;
    transform: translateX(-50%) rotate(45deg);
  }
`;

// const SkillSection = styled(Container)`
//   &:hover {
//     ${SkillPer} {
//       animation: ${progress} 1s ease-in-out forwards;
//     }
//   }
// `
