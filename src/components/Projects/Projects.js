import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from '../AboutSection/SectionTitle';
import ProjectsAll from '../ProjectsAll/ProjectsAll';
import ProjectInfo from '../../assets/data/projects';

const ProjetStyles = styled.div`
  padding: 10rem 0;
  .projects-all-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 3rem;
  }
  .searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 8px;
    border: none;
    outline: none;
  }
  .searchBar .search-icon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .searchBar .search-icon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .searchBar,
    .searchBar form,
    .searchBar input {
      width: 100%;
    }
  }
`;

const Projects = () => {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  };
  return (
    <ProjetStyles>
      <div className="container">
        <SectionTitle
          subheading="some of my recent projects"
          heading="Projects"
        />
        <div className="searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="project name"
            />
            <MdSearch className="search-icon" />
          </form>
        </div>
        <div className="projects-all-items">
          {projectData.map((item) => (
            <ProjectsAll
              key={item.id}
              title={item.name}
              description={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </ProjetStyles>
  );
};

export default Projects;
