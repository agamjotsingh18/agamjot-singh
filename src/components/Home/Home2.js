import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import agam from "../../Assets/github-r.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            This is <i><b class="purple">Agamjot</b></i>, a tech enthusiast with a passion for <i><b class="purple"> Front-End Development and Community Building.</b></i> With an expertise in <i><b class="purple">ReactJS</b></i>, i have created stunning web designs and developed user-friendly interfaces. Currently been working with <i><b class="purple">Newton School</b></i> as an Intern and have worked as Devrel at <i><b class="purple">Keploy</b></i>, Community Builder at <i><b class="purple">Scalers Academy</b></i>(representing 100k+ community on discord),<i><b class="purple">LumosLabs, Binance, Apli.ai.</b></i> Additionally, I have <i><b class="purple">Judged Hack A Miner, Unihack2021</b></i> and have <i><b class="purple">Mentored at 15+ Hackathons</b></i>, Open Source Events like <i><b class="purple">GWoC'21, SWoC'21, GSSoC'22, GSSoC'23 HacktoberFest</b></i>(Community Led Initiative) and for organizations like GDSC, Girscript Foundation, Script Foundation.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={agam} className="img-fluid" alt="avatar" width="300px" style={{borderRadius:"100% 100% 100% 100%"}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/agamjotsingh18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/_agamjotsingh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/agamjot-singh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_agamjotsingh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
