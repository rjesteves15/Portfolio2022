
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './projects.css';
import capstone2 from '../projects/capstone2.png'






function Projects() {
  return (
    <>
   <div className="projects section" id="projects">
        <h2 data-heading="Some Things I’ve Built" className='section__title'>My Projects</h2>

       <Container className="projects__container">
            <Row  xl={12}>
                <Col >
                  <img  src={capstone2}/>
                </Col>
                <Col>
                    <h2> capstone2</h2>
                </Col>
            </Row>

      </Container>


   </div>
   </>
  );
}

export default Projects;
