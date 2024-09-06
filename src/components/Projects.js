import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import appleProj from "../assets/img/apple-proj.png";
import minderProj from "../assets/img/minder-proj.png";
import icarProj from "../assets/img/ICAR Discussion Forum.png";
import projImg1 from "../assets/img/sample-project-img1.png";
import projImg2 from "../assets/img/sample-project-img2.png";
import projImg3 from "../assets/img/sample-project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Apple - UI/UX clone",
      description: "An attempt to learn Animation and 3D website development. UI/UX clone of the Apple iPhone 15 website, developed using React, React Three Fiber, and GSAP. Integrates High-Fidelity UI, Interactive Elements and Responsive Design.",
      imgUrl: appleProj,
      link: "https://welcome-iphone15pro.netlify.app/",
    },
    {
      title: "Minder Note App",
      description: "This is a simple and elegant note-taking application built with React, allowing you to jot down your thoughts, ideas, and reminders with ease.",
      imgUrl: minderProj,
      link: "https://mindernotes.netlify.app/",
    },
    {
      title: "ICAR Discussion Forum",
      description: "Built for ICAR government organisation under Ministry of Agriculture to help improve the communication between between various ICAR divisions, groups, organisations and departments. ",
      imgUrl: icarProj,
      link: "https://example.com/project1",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    //   link: "https://example.com/project1",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    //   link: "https://example.com/project1",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    //   link: "https://example.com/project1",
    // },
  ];

  const tab2Projects = [
    {
      title: "Sample-Project A",
      description: "Coming Soon...",
      imgUrl: projImg1,
      link: "https://example.com/projectA",
    },
    {
      title: "sample-Project B",
      description: "Coming Soon...",
      imgUrl: projImg2,
      link: "https://example.com/projectB",
    },
    {
      title: "sample-Project C",
      description: "Coming Soon...",
      imgUrl: projImg3,
      link: "https://example.com/projectC",
    },
    // {
    //   title: "Project D",
    //   description: "Description for Project D",
    //   imgUrl: projImg1,
    //   link: "https://example.com/projectD",
    // },
    // {
    //   title: "Project E",
    //   description: "Description for Project E",
    //   imgUrl: projImg2,
    //   link: "https://example.com/projectE",
    // },
    // {
    //   title: "Project F",
    //   description: "Description for Project F",
    //   imgUrl: projImg3,
    //   link: "https://example.com/projectF",
    // },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These projects mark the evolution of my development journey. I began with basic HTML and CSS, gradually incorporating JavaScript to enhance functionality. As I progressed, I embraced React.js and delved into UI/UX and front-end development. My learning expanded to backend technologies with Node.js and Express.js, from hosting locally to deploying projects. This journey led me to full-stack development, where I explored databases like PostgreSQL and MongoDB, transitioning from local to cloud storage. Each project represents a significant step towards learning new skills and technologies.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                        <Row>
                          {
                            tab2Projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <p>More Projects Coming Soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
