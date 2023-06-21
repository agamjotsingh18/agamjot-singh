import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useForm } from 'react-hook-form';
import emailjs from "emailjs-com";
import './Experience.css'
import { ReactComponent as WorkIcon } from "../../Assets/work.svg"

import timelineElements from "./Timeline"

import {
VerticalTimeline,
VerticalTimelineElement,
} from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"
const Experience = () => {
  let workIconStyles = { background: "#C95BF5" }

  return (
    <Container fluid className="project-section">
    <Particle />
    <Container>
    <h1 className="project-heading">
          My <strong className="purple">Experiences </strong>
        </h1>
    <div>
      <VerticalTimeline>
        {timelineElements.map(element => {
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== ""

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="datee"
              iconStyle={workIconStyles}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {/* {showButton && (
                <a
                  className={`button ${
                    "workButton"
                  }
`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )} */}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
    </Container>
    </Container>
  );
};

export default Experience;