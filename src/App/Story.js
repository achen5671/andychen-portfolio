import React from 'react';
import StoryItem from '../components/StoryItem';
import data from '../data/story';
import { useInView } from 'react-intersection-observer';

export default function Story()  {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (data.length > 0 && (
    <>
      <h1 ref={myRef} className="about-me-title">
        <span className={`about-me-text ${myElementIsVisible ? 'animateAboutMe' : ''}`}>
          My Story
        </span>
      </h1>
      <div className='timeline-container'>
        {data.map((story, idx) => (
          <StoryItem story={story} key={idx} />
        ))}
      </div>
    </>
  ))
}
