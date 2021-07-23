import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectsAll-item {
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    border-radius: 12px;
    img {
      height: 100%;
    }
  }

  .projectItem-info {
    margin-top: 1rem;
    padding: 1rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
  }
  .project-title {
    font-size: 2.2rem;
  }
  .projectItem-desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectsAll-item {
      height: 350px;
    }
  }
`;

const ProjectsAll = ({
  img = projectImg,
  title = 'Project title',
  description = 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
}) => (
  <ProjectItemStyles>
    <Link to="/projects" className="projectsAll-item">
      <img src={img} alt="project img" />
    </Link>
    <div className="projectItem-info">
      <Link to="#">
        <h3 className="project-title">{title}</h3>
      </Link>
      <p className="projectItem-desc">{description}</p>
    </div>
  </ProjectItemStyles>
);

export default ProjectsAll;
