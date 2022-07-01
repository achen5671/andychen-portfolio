import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { useInView } from 'react-intersection-observer';

export default function Skills() {
    // Handles animation depending on scroll position, using react-intersection-oberser
    //  See Doc: https://github.com/thebuilder/react-intersection-observer#readme
    const { ref: myRef, inView: myElementIsVisible } = useInView();
    return (
    <div>
        <section>
            <h1 ref={myRef} className='about-me-title'><span className={`about-me-text ${(myElementIsVisible ? 'animateAboutMe' : '')}`}>Skills</span></h1>

            <Container>
                <Row>
                    <Col>
                        <Image src='./skills_icon/react_icon.jpeg' className='skills_icon'/>
                        <p className='icon_name'>ReactJS</p>
                    </Col>
                    <Col>
                        <Image src='./skills_icon/python_icon.webp' className='skills_icon'/>
                        <p className='icon_name'>Python</p>
                    </Col>
                    <Col>
                        <Image src='./skills_icon/git_icon.png' className='skills_icon'/>
                        <p className='icon_name'>Git</p>
                    </Col>
                    <Col>
                        <Image src='./skills_icon/html5.png' className='skills_icon'/>
                        <p className='icon_name'>HTML5</p>
                    </Col>
                    <Col>
                        <Image src='./skills_icon/CSS_icon.png' className='skills_icon'/>
                        <p className='icon_name'>CSS</p>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
    )
}