import React from 'react';
import styled from "styled-components"

import { Container } from "react-bootstrap";

import { FiGithub, FiPhone } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import {HiOutlineMail} from "react-icons/hi";
import { GrDocumentPdf } from "react-icons/gr";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterTitle><span>Want to know more?</span></FooterTitle>
            <FooterBody>
                <Bodyli>
                    <HiOutlineMail style={{display: 'inline-block', marginRight: '0.2em', fontSize: '1.2em'}} />
                    <Anchor href="#" onClick={(e) => e.preventDefault()}>andychen5671@gmail.com</Anchor>
                </Bodyli>
                <Bodyli>
                    <FiGithub style={{display: 'inline-block', marginRight: '0.2em', fontSize: '1.2em'}} />
                    <Anchor href="https://github.com/achen5671" target="_blank" rel="noopener noreferrer">achen5671</Anchor>
                </Bodyli>
                <Bodyli>
                    <RiLinkedinLine style={{display: 'inline-block', marginRight: '0.2em', fontSize: '1.2em'}} />
                    <Anchor href="https://www.linkedin.com/in/achen5671/" target="_blank" rel="noopener noreferrer">in/achen5671</Anchor>
                </Bodyli>
                <Bodyli>
                    <GrDocumentPdf style={{display: 'inline-block', marginRight: '0.2em', fontSize: '1.2em'}} />
                    <Anchor href="https://www.dropbox.com/scl/fi/o4pf4c890a8o7ur2c3beq/Andy_Chen_Resume.pdf?rlkey=a1lxntcwdmxm4xki5kvnqkmv6&dl=0" download target="_blank" rel="noopener noreferrer">pdf/resume</Anchor>
                </Bodyli>
                <Bodyli>
                    <FiPhone style={{display: 'inline-block', marginRight: '0.2em', fontSize: '1.2em'}} />
                    <Anchor href="" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer">+1 646.240.6258</Anchor>
                </Bodyli>
            </FooterBody>
        </FooterContainer>
    )
}

const FooterContainer = styled(Container)`
    padding: 0 5.46875vw;
    padding-bottom: 7.5rem;
    display: flex;
`

const FooterTitle = styled.h3`
    //
`

const FooterBody = styled.ul`
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  /* transform: translate3d(0px, 64px, 0px); */
  padding-left: 100px;
  list-style-type: none;
`
const Bodyli = styled.li`
    font-weight: 400;
    margin-bottom: 0.3em;
    line-height: 1.2em;
    font-size: 1.125rem;
`

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  /* scale on hover */
  /* &:hover {
    transition: scale 2 1s ease;
  } */
`
