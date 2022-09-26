import '../App.css';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useInView } from 'react-intersection-observer';
import SkillBar from '../components/SkillBar';

export default function Skills() {
  // Handles animation depending on scroll position, using react-intersection-oberser
  //  See Doc: https://github.com/thebuilder/react-intersection-observer#readme
  // This rough lol. Needs refactor. Too many statements
  // Work around to animate each SkillBar when it's on screen
  const { ref: skillOneRef, inView: mySkillOneIsVisible } = useInView();
  const { ref: skillTwoRef, inView: mySkillTwoIsVisibleTwo } = useInView();
  const { ref: skillThreeRef, inView: mySkillThreeIsVisibleTwo } = useInView();

  return (
    // TODO: Animate on HOVER. Probably need a hook
    <Container>
      {/* TODO: Map with object entries. ise skill.js dict */}
      {/* Languages */}
      <div ref={skillOneRef}>
        {mySkillOneIsVisible &&
        <Row>
          <Col>
            <h1>TECH</h1>
            <h6>Technology Stack</h6>
          </Col>
          <Col>
            <h3>Language</h3>
            <SkillBar name="HTML/CSS" width="90%" />
            <SkillBar name="Javascript" width="80%" />
            <SkillBar name="Typescript" width="80%" />
            <SkillBar name="PosgresSQL" width="70%" />
            <SkillBar name="Python" width="80%" />
          </Col>
          <Col>
            <h3>Libraries</h3>
            <SkillBar name="ReactJS" width="90%" />
            <SkillBar name="NodeJS" width="80%" />
          </Col>
        </Row>}
      </div>

      <div ref={skillTwoRef}>
        {mySkillTwoIsVisibleTwo &&
        <Row>
          {/* First col is for spacing */}
          {/* I think using flex display here might be better */}
          <Col></Col>
          <Col>
            <h3>Dev Tools</h3>
            <SkillBar name="Eslint" width="100%" />
            <SkillBar name="Pylint" width="100%" />
          </Col>
          <Col>
            <h3>Tools</h3>
            <SkillBar name="Visual Studio Code" width="100%" />
          </Col>
        </Row>}
      </div>

      <hr />

      {/* Team */}
      <div ref={skillThreeRef}>
        {mySkillThreeIsVisibleTwo &&
        <Row>
          <Col>
            <h1>TEAM</h1>
            <h6>Teamwork skills and tools</h6>
          </Col>
          <Col>
            <h3>Workflow</h3>
            <SkillBar name="Agile/Scrum" width="100%" />
          </Col>
          <Col>
            <h3>Tools</h3>
            <SkillBar name="Git/Github" width="100%" />
            <SkillBar name="Trello/Shortcut.com" width="100%" />
          </Col>
        </Row>}
      </div>
    </Container>
  );
}
