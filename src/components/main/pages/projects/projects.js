
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import './projects.css';
import capstone1 from '../projects/capstone1.png';
import capstone2 from '../projects/capstone2.png';
import capstone3 from '../projects/capstone3.png';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);


function Projects() {
  const images = [
    {
      url: capstone2,
      title: "Course Booking App",
      alternativeText: "Capstone 2",
      description: "Technologies used: HTML, CSS, Bootstrap, Javascript, Express.JS, Node.Js and MongoDB",
      link: "https://rchllstvs.gitlab.io/booking-system-capstone-2/"
    },
    {
      url: capstone3,
      title: "Budget Tracking App",
      alternativeText: "Sweden Photo Three",
      description: "Technologies used: HTML, CSS, Bootstrap, Javascript, Express.JS, Node.Js and MongoDB",
      link: "https://budget-tracker-cs3-fb9636x4h-rchllstvs.vercel.app/"
    },
    {
      url: capstone1,
      title: "First Portfolio",
      alternativeText: "Capstone 1",
      description: "Technologies used: HTML, CSS and Bootstrap",
      link: "https://rochelle-portfolio.vercel.app/"
    }
  ];
  return (
    <>
   <div className="projects section" id="projects">
        <h2 data-heading="Some Things I’ve Built" className='section__title'>My Projects</h2>

       <div className="projects__container">
       <Swiper
        id="main"
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {images.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className="project__card">
              <div className="text-block">
                <div className="description">
                  {/* <h4>{photo.title} </h4>
                  <p>{photo.description}</p> */}
                  <a href={photo.link} target="_blank">View Live</a>
                </div>
              </div>
              <img
                src={photo.url}
                alt={photo.alternativeText}
                style={{ width: "70vw" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      </div>


   </div>
   </>
  );
}

export default Projects;
