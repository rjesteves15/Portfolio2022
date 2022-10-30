import './about.css'
import avatar from './profile.jpg'
import { TbFileCertificate } from 'react-icons/tb';
import { BsTrophy } from 'react-icons/bs';
import { MdComputer } from 'react-icons/md';



function About() {
  return (
    <>
   <div className="about section" id="about">
        <h2 data-heading="My Intro" className='section__title'>About Me</h2>

        <div className='about__container container grid'>
            <img src={avatar} className="about__img" />

            <div className='about__data'>
                    <h3 className='about__heading'>Hi, I'm Rochelle Joan Esteves from Philippines</h3>
                    <p className='about__description'>I graduated at AMA Computer College with a degree of Bachelor of Science in Information Technology
                        and has a Full Stack Web Development certificate in Zuiit Coding Bootcamp Philippines.
                        With my passion for learning, I will be able to take part in empowering your team 
                        with my extensive knowledge and years of experience working in web development while making significant contribution to the success of the company.
                    </p>

                    <div className='about__info grid'>
                            <div className='about__box'>
                                <span className='about__icon'><MdComputer /></span>
                                <h3 className='about__title'>Experience</h3>
                                <span className='about__subtitle'> 4 + Years</span>
                            </div>

                            <div className='about__box'>
                                <span className='about__icon'><BsTrophy /></span>
                                <h3 className='about__title'>Completed</h3>
                                <span className='about__subtitle'> 10 + Projects</span>
                            </div>

                            <div className='about__box'>
                                <span className='about__icon'><TbFileCertificate /></span>
                                <h3 className='about__title'>Certificate</h3>
                                <span className='about__subtitle'> 4 + Certificates</span>
                            </div>
                    </div>
                    <a href='https://www.linkedin.com/in/rochelle-joan-esteves-471966204/' target="_blank" className='button'>
                        <span className='button__icon'></span>
                        Contact Me
                    </a>
            </div>
        </div>
   </div>

   <div className='qualification section'>
         <h2 data-heading="My Journey" className='section__title'>Qualification</h2>
        
        <div className='qualification__container container grid'>
            <div className='education'>
                    <h3 className='qualification__title'>Education</h3>
          
            <div className='timeline'>
                    <div className='timeline__item'>
                        <div className='circle__dot'>
                            <h3 className='timeline__title'>Full Stack Web Development</h3>
                            <p className='timeline__text'>Zuiit Coding Bootcamp, Philippines</p>
                            <span className='timeline__date'>December 2020 - April 2021</span>
                        </div>
                    </div>

                    <div className='timeline__item'>
                        <div className='circle__dot'>
                            <h3 className='timeline__title'>Web Development</h3>
                            <p className='timeline__text'>Mindtech, Pasig</p>
                            <span className='timeline__date'>July 2018 - October 2018</span>
                        </div>
                    </div>

                    <div className='timeline__item'>
                        <div className='circle__dot'>
                            <h3 className='timeline__title'>AMA Computer College</h3>
                            <p className='timeline__text'>BS in Information Technology</p>
                            <span className='timeline__date'>May 2013 - May 2017</span>
                        </div>
                    </div>
            </div>

             </div>
       
             <div className='experience'>
                    <h3 className='qualification__title'>Experience</h3>
          
            <div className='timeline'>
            <div className='timeline__item'>
                        <div className='circle__dot'>
                            <h3 className='timeline__title'>Frontend Development Engineer</h3>
                            <p className='timeline__text'>Innovations Group, Pasay</p>
                            <span className='timeline__date'>April 2022 - Present</span>
                        </div>
                    </div>

                    <div className='timeline__item'>
                        <div className='circle__dot'>
                            <h3 className='timeline__title'>Software Developer</h3>
                            <p className='timeline__text'>Equitable Computer Services, Makati</p>
                            <span className='timeline__date'>October 2021 - April 2022</span>
                        </div>
                    </div>

                    <div className='timeline__item'>
                        <div className='circle__dot'>
                            <h3 className='timeline__title'>Data Analyst</h3>
                            <p className='timeline__text'>Accenture, BGC</p>
                            <span className='timeline__date'>January 2018 - September 2021</span>
                        </div>
                    </div>
            </div>

             </div>
        </div>

   </div>
   </>
  );
}

export default About;
