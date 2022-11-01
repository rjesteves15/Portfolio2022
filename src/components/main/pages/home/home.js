import profile from './profile.png'
import { FaViber, FaTelegramPlane, FaLinkedin, FaGithubSquare, FaInstagramSquare, FaTwitterSquare, FaDownload} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

import resume from './Esteves_Rochelle_P_CV.pdf'
import './home.css'

function Home() {
  return (
   <div className="home" id="home">
        <div className="home__container container grid">
            <div className="home__social">
                  <span className="home__social-follow">Follow me</span>  
                  <div className="home__social-links">
                        <a href="https://www.linkedin.com/in/rochelle-joan-esteves-471966204/" target="_blank" className="home__social-link"><FaLinkedin /></a>
                        <a href="https://github.com/rjesteves15" target="_blank" className="home__social-link"><FaGithubSquare /></a>
                        <a href="" target="_blank" className="home__social-link"><FaTwitterSquare /></a>
                  </div>
            </div>

            <div className='home__intro'>
              

                <div className='home__data'>
                    <h1 className='home__title'>Hi, I am Rochelle</h1>
                    <h3 className='home__subtitle'>Frontend Developer</h3>
                    <p className='home__description'>High level experience in web development, work quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time.</p>
                    <a href={resume} target="_blank" rel="noreferrer" className='button'>
                        <span className='button__icon'> Download CV <FaDownload/> </span>
                    </a>
                </div>
                <img src={profile} className="home__img" />
            </div>

            <div className='my__info'>
                    <div className='info__item'>
                            <p className='info__icon'><FaViber /></p>
                            <div>
                                <h3 className='info__title'>Viber </h3>
                                <span className='info__subtitle'>+639562781430</span>
                            </div>          
                    </div>
                    <div className='info__item'>
                            <p className='info__icon'><FaTelegramPlane /></p>
                            <div>
                                <h3 className='info__title'>Telegram </h3>
                                <span className='info__subtitle'>@rjesteves</span>
                            </div>          
                    </div>
                    <div className='info__item'>
                            <p className='info__icon'><SiGmail /></p>
                            <div>
                                <h3 className='info__title'>Gmail </h3>
                                <span className='info__subtitle'>rochellejoan.p.esteves@gmail.com</span>
                            </div>          
                    </div>
            </div>
        </div>
   </div>
  );
}

export default Home;
