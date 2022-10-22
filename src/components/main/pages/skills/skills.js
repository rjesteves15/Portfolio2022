
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './skills.css';
import { FaReact } from 'react-icons/fa';
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { SiRedux } from 'react-icons/si';
import { SiWebpack } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { BsBootstrapFill } from 'react-icons/bs';
import { FaNode } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';





function Skills() {
  return (
    <>
   <div className="skills section" id="skills">
        <h2 data-heading="Technologies I’ve been working with" className='section__title'>My Skills</h2>

        <Container className="skills__container">
            <Row className="row">
                <Col xs={6} md={4} className='skills__card'>
                <div className='skills__icon'>
                    <ImHtmlFive />
                    <h2 className='skills__title'>HTML</h2>
                    </div> 
                </Col>
                <Col xs={6} md={4} className='skills__card'>
                <div className='skills__icon'>
                    <SiCss3 />
                    <h2 className='skills__title'>CSS</h2>
                    </div> 
                </Col>
                <Col xs={6} md={4} className='skills__card'>
                <div className='skills__icon'>
                    <SiJavascript />
                    <h2 className='skills__title'>Javascript</h2>
                    </div> 
                </Col>
             </Row>

             <Row className="row">
                <Col xs={6} md={4} className='skills__card'>
                <div className='skills__icon'>
                    <FaReact />
                    <h2 className='skills__title'>React Js</h2>
                    </div> 
                </Col>
                <Col xs={6} md={4} className='skills__card'>
                <div className='skills__icon'>
                    <FaNode />
                    <h2 className='skills__title'>NodeJs</h2>
                    </div> 
                </Col>
                <Col xs={6} md={4} className='skills__card'>
                <div className='skills__icon'>
                    <SiRedux />
                    <h2 className='skills__title'>Redux</h2>
                    </div> 
                </Col>
             </Row>

             <Row className="row">
                <Col xs={12} md={3} className='skills__card'>
                <div className='skills__icon'>
                    <IoLogoSass />
                    <h2 className='skills__title'>SaSS</h2>
                    </div> 
                </Col>
                <Col xs={12} md={3} className='skills__card'>
                <div className='skills__icon'>
                    <BsBootstrapFill />
                    <h2 className='skills__title'>Bootstrap</h2>
                    </div> 
                </Col>
                <Col xs={12} md={3} className='skills__card'>
                <div className='skills__icon'>
                    <SiTailwindcss />
                    <h2 className='skills__title'>Tailwind</h2>
                    </div>  
                </Col>
             </Row>

             <Row>
             <Col xs={12} md={3} className='skills__card'>
                <div className='skills__icon'>
                    <SiWebpack />
                    <h2 className='skills__title'>Webpack</h2>
                    </div> 
                </Col>
                <Col xs={6} md={3} className='skills__card'>
                <div className='skills__icon'>
                    <SiTypescript />
                    <h2 className='skills__title'>Typescript</h2>
                    </div> 
                </Col>
                <Col xs={6} md={3} className='skills__card'>
                <div className='skills__icon'>
                    <SiMysql />
                    <h2 className='skills__title'>MySQL</h2>
                    </div> 
                </Col>
             </Row>

        </Container>
   </div>
   </>
  );
}

export default Skills;
