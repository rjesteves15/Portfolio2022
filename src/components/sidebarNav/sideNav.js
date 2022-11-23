import React, {useState} from 'react';
import './sideNav.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink as Link } from "react-router-dom";
import classnames from "classnames";
import resume from './Esteves_Rochelle_P_CV.pdf'


function SideNav() {
   const [active, setActive] = useState(false);
   const hamburger = () =>{
         setActive(!active);
   }
  return (
<>
   <div className='nav__toggle' id="nav-toggle">
      <GiHamburgerMenu onClick={hamburger} />
   </div>
   <div className={classnames('sidebar', {["show-sidebar"]: active})}>
            <div className='nav'>
                <div className='nav__logo'>
                    <a href='' className='nav__logo-text'>RJ</a>
                </div>

                <div className='nav__menu'>
                    <div className='menu'>
                        <ul className='nav__list'>
                             <li className='nav__item'>
                                 <Link to="/" className="nav__link" activeclassname="active">Home</Link>
                             </li>
                             <li className='nav__item'>
                                  <Link to="/about" className="nav__link" activeclassname="active">About</Link>
                             </li>
                             <li className='nav__item'>
                                  <Link to="/skills" className="nav__link" activeclassname="active">Skills</Link>
                             </li>
                             <li className='nav__item'>
                                  <Link to="/projects" className="nav__link" activeclassname="active">Project</Link>
                             </li>
                             <li className='nav__item'>
                                <a href={resume} target="_blank" rel="noreferrer" className='nav__link'>Resume</a>
                             </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div className='btn__share'>
                <i className='uil uil-share-alt social__share'></i>
            </div> */}
            <div className="nav__close" id="nav-close">
               <AiOutlineClose onClick={hamburger}/>
            </div>


    </div>
    </>
  );
}

export default SideNav;
