import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technical Skills</h2>
                        <p>Explore the technologies I have worked with, including programming languages, frameworks, libraries, and databases:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">                                
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt='Java-icon'/>          
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='JavaScript-icon'/>
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">                                
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='React.js-icon' />          
                                <h5>React .js</h5>
                            </div>
                            <div className="item">                                
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt='Node.js-icon'/>
                                <h5>Node .js</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt='Express.js-icon'/>
                            <h5>Express .js</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt='PostgreSql-icon' />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt='MongoDB-icon'/>
                              <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt='Python-icon' />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt='Cpp-icon'/>
                                <h5>C++</h5>
                            </div>
                            

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="bgImage" />
    </section>
  )
}
