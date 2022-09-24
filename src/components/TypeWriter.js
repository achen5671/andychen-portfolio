import styled, { keyframes } from 'styled-components';

export default function TypeWriter(props) {
  return (
      <Text>{props.text}</Text>
  );
}

// See: https://www.youtube.com/watch?v=9LHr3ER0qtY
// for typing affect with hooks
const animateTypeWriter = keyframes`
    to {
        left: 100%;
    }
`;

const blink = keyframes`
    to {
         background: transparent;
    }
`;

const Text = styled.h3`
  position: absolute;
  z-index: 100;
  width: max-content;
  /* display: grid; */
  &::before,
  &::after {
    content: '';
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute; //absolute to the parent which is relative.
  }

  &::before {
    background: white;
    animation: ${animateTypeWriter} 1s ease forwards;

    // TODO: Make steps to length of the string.
    animation-timing-function: steps(4);
  }

  &::after {
    /* width: 0.120em; */
    width: 25%;
    position: absolute;
    height: 1px;
    background: black;
    bottom: 10px;
    margin-top: 20px;

    // TODO: Stop blinking after it's done
    animation: ${animateTypeWriter} 1s ease forwards, ${blink} 500ms infinite;

    // TODO: Make steps to length of the string. Use a var
    animation-timing-function: steps(4);
  }
`;
