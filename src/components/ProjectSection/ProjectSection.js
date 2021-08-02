import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SectionTitle from '../AboutSection/SectionTitle';
import projects from '../../assets/data/projects';
import ProjectsAll from '../ProjectsAll/ProjectsAll';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const ProjectSectionStyles = styled.div`
  padding: 10rem 0;
  .projects-all-items {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    right: 60px;
    z-index: 10;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  .font-icons {
    font-size: 3.4rem;
    padding: 10px;
    margin: 10px;
    align-items: center;
    justify-content: center;
  }

  .font-icons a {
    padding: 5px;
  }
  .font-icons button {
    background-color: var(--black);
    border: 2px solid var(--gray-1);
    padding: 8px;
    border-radius: 15px;
    cursor: pointer;
    background-color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects-all-items {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
    }
  }
`;

const ProjectSection = () => (
  <ProjectSectionStyles>
    <div className="container">
      <div data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000">
        <SectionTitle
          subheading="some of my recent projects"
          heading="Projects"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        className="projects-all-items"
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => {
            if (index >= 5) return;
            return (
              <SwiperSlide key={project.id}>
                <ProjectsAll
                  img={project.img}
                  title={project.name}
                  description={project.desc}
                  link={project.link}
                />
                <div className="font-icons">
                  <Link to={project.preview}>
                    <button type="button">preview</button>
                  </Link>
                  <a href="https://github.com/noorhossain809/doctors-portal">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://www.linkedin.com/feed/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  </ProjectSectionStyles>
);

export default ProjectSection;
