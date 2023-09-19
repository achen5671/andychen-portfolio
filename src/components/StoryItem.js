import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { TbCopy } from 'react-icons/tb'
import { getToolImage } from '../helper';
import { Col, Container, Image, Row } from 'react-bootstrap';

const parse = require('html-react-parser');

// TODO: Start using typescript
function useDelayUnmount(isMounted, delayTime) {
  const [ shouldRender, setShouldRender ] = useState(false);

  useEffect(() => {
      let timeoutId;
      if (isMounted && !shouldRender) {
          setShouldRender(true);
      }
      else if(!isMounted && shouldRender) {
          timeoutId = setTimeout(
              () => setShouldRender(false),
              delayTime
          );
      }
      return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}

// Story Item will take an entire section / page
export default function StoryItem ({ item }) {
    const { title, position, text, image, date, detail: {tag, completion }, tools} = item;

    const [isDetailVisible, toggleDetail] = useState(false);
    const [projectDetails, updateProject] = useState('');

    // Not working as intended yet
    const shouldRenderChild = useDelayUnmount(isDetailVisible, 500);

    
    return (
    <StoryContainer fluid>
      <Row>
        <Col>
          <Text>{date}</Text>
          <Title>{title}</Title>
          <Text style={{ fontWeight:'bold'}}>{position}</Text>
          <Text>{text}</Text>

          <Row style={{ width: '75%', marginBottom: '20px'}}>
            {(tools ?? []).map((tool, index) => (
              <Col>
                <Image style={{ width: '50px' }} key={tool} src={getToolImage(tool)}/>
              </Col>
            ))}
          </Row>

          {completion.length != 0 && completion.map((proj, idx) => {
            const {name, link, type } = proj;
            return(
              <div key={idx}>
                <span><TbCopy /></span>
                {/* This is terrible. TODO: Move to a function */}
                <DetailButton onClick={() => {
                  if(type === 'link') return window.open(link, '_blank', 'resizable=yes')
                  updateProject(proj);
                  toggleDetail(!isDetailVisible);
                }}>{name}</DetailButton>
              </div>
            )
          })}
        </Col>
        <Col>

          {!isDetailVisible && <ImageContainer>
            <StoryImage src={image} />
            <ImageOverlay>
              <span>{tag}</span>
            </ImageOverlay>
          </ImageContainer>}

          {/* Should use mount and unmount */}
          {/* See: https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component
              Animate on mount and unmount */}
          {shouldRenderChild &&
          <DetailInfo>
            {projectDetails.type === 'link' && window.open(projectDetails, '_blank', 'resizable=yes')}
            {projectDetails.type === 'image' && <StoryImage src={projectDetails.link} />}
            {projectDetails.type === 'iframe' && parse(projectDetails.link)}
          </DetailInfo>}
        </Col>
      </Row>

    </StoryContainer>
    )
}

const StoryContent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 50%;
  z-index: 100;
  padding: 25px;
`

const StoryContainer = styled(Container)`
  background-color: #ffffff;
  min-height: 100vh;
  padding: 70px;
  /* font-size: calc(10px + 2vmin);
  color: black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 50px;
  position: relative; */
`

const ImageContainer = styled.div`
  position: relative;
`

const StoryImage = styled.img`
  /* display: block; */
  height: 100%;
  width: 100%;
  /* align-items: flex-end; */
  /* margin-left: 50%; */
  /* min-height: 100vh; */
`

// Can you mount, then call animation?
const renderDetails = keyframes`
  from {
    transform: translateX(500px);;
  }
  to{
    transform: translateX(0px);;
  }
`

const DetailInfo = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  animation: ${renderDetails} 2s ease forwards;
`

const ImageOverlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-end;
  /* margin-left: 50%; */
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
  > * {
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
  background-color: #ffffff;
  font-size: 15px;
`
