import React, {useState} from 'react';
import './sideNav.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import classnames from "classnames";
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
                                <a href='#home' className='nav__link active-link'>Home</a>
                             </li>
                             <li className='nav__item'>
                                <a href='#about' className='nav__link' >About</a>
                             </li>
                             <li className='nav__item'>
                                <a href='#skills' className='nav__link'>Skills</a>
                             </li>
                             <li className='nav__item'>
                                <a href='#projects' className='nav__link'>Projects</a>
                             </li>
                             <li className='nav__item'>
                                <a href='' className='nav__link'>Contact</a>
                             </li>
                             <li className='nav__item'>
                                <a href='' className='nav__link'>Resume</a>
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
