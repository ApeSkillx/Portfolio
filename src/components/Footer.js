import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIconLI from '../assets/img/nav-icon1-li.svg';
import navIconGH from '../assets/img/nav-icon-github.svg';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
               <a href="https://www.linkedin.com/in/chhavi-kant-343010203/" target="_blank" rel="noopener noreferrer"><img src={navIconLI} alt="LinkedIn" /></a>  
              <a href="https://github.com/ApeSkillx" target="_blank" rel="noopener noreferrer"><img src={navIconGH} alt="GitHub" /></a>
            </div>
            <p>&copy; Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
