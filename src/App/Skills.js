import '../App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useInView } from 'react-intersection-observer';
import SkillBar from '../components/SkillBar';

export default function Skills() {
  // Handles animation depending on scroll position, using react-intersection-oberser
  //  See Doc: https://github.com/thebuilder/react-intersection-observer#readme
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <div>
      <section>
        <h1 ref={myRef} className="about-me-title">
          <span className={`about-me-text ${myElementIsVisible ? 'animateAboutMe' : ''}`}>
            Skills
          </span>
        </h1>

        {true && (
          <Container>
            {/* TODO: Map with object entries */}
            {/* Languages */}
            <Row>
              <Col>
                <h1>TECH</h1>
                <h6>Technology Stack</h6>
              </Col>
              <Col>
                <h3>Language</h3>
                <SkillBar name="HTML/CSS" width="90%" />
                <SkillBar name="Javascript" width="80%" />
                <SkillBar name="Typescript" width="20%" />
                <SkillBar name="PosgresSQL" width="80%" />
                <SkillBar name="Python" width="80%" />
                <SkillBar name="Ruby" width="20%" />
              </Col>
              <Col>
                <h3>Libraries</h3>
                <SkillBar name="ReactJS" width="100%" />
                <SkillBar name="NodeJS" width="0%" />
              </Col>
            </Row>

            <Row>
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
            </Row>

            <hr />

            {/* Team */}
            <Row>
              <Col>
                <h1>TEAM</h1>
                <h6>Teamwork skills and tools</h6>
              </Col>
              <Col>
                <h3>Workflow</h3>
                <SkillBar name="Agile/Scrum" width="100%" />
                <SkillBar name="Interpersonal" width="100%" />
              </Col>
              <Col>
                <h3>Tools</h3>
                <SkillBar name="Git" width="100%" />
                <SkillBar name="Github" width="100%" />
                <SkillBar name="Trello/Shortcut.com" width="100%" />
              </Col>
            </Row>
          </Container>
        )}
      </section>
    </div>
  );
}
