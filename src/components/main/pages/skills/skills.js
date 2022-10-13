import './skills.css'


function Skills() {
  return (
    <>
   <div className="skills section" id="skills">
        <h2 data-heading="My Abilities" className='section__title'>My Experience</h2>

        <div className='skills__container container grid'>
            <div className='skills__tabs'>
                <span className='skills__icon'>ICON</span>

                <div>
                    <h1 className='skills__title'>Frontend Developer</h1>
                    <span className='skills__subtitle'>More than 4 years</span>
                    <span className='skills__arrow'>ICON</span>
                </div>
                <div>
                    <h1 className='skills__title'>Frontend Developer</h1>
                    <span className='skills__subtitle'>More than 4 years</span>
                    <span className='skills__arrow'>ICON</span>
                </div>
                <div>
                    <h1 className='skills__title'>Frontend Developer</h1>
                    <span className='skills__subtitle'>More than 4 years</span>
                    <span className='skills__arrow'>ICON</span>
                </div>
            </div>

            <div className='skills_content'>
                <div className='skills__group'>
                    <div className='skills__list grid'>
                        <div className='skills__data'>
                            <div className='skills__titles'>
                                    <h3>HTML</h3>
                                    <span className='skills__number'>90%</span>
                            </div>

                            <div className='skills__bar'>
                                {/* <span className='skills__percentage' style="width= 90%"></span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
   </>
  );
}

export default Skills;
