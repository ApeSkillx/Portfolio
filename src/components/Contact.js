import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                 <h2>Get In Touch</h2>
                <p>
                  I'm actively seeking new opportunities. 
                  Feel free to reach out with any 
                  <a href="mailto:mrkant19@gmail.com" target="_blank" rel="noopener noreferrer" class="email-link"> questions </a> 
                  or just to 
                  <a href="https://www.linkedin.com/in/chhavi-kant-343010203/" target="_blank" rel="noopener noreferrer" class="linkedin-link"> connect </a>
                  — I'll make sure to respond as soon as I can!
                </p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
