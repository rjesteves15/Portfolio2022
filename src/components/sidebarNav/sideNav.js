import './sideNav.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
function SideNav() {

   const hamburger = () =>{
         alert(1)
   }
  return (
<>
   <div className='nav__toggle' id="nav-toggle">
      <GiHamburgerMenu onClick={hamburger} />
   </div>
   <div className='sidebar'>
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
               <AiOutlineClose />
            </div>


    </div>
    </>
  );
}

export default SideNav;
