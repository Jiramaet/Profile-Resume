import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import Com from '../../assets/Com.png'
import Gallery from '../../assets/Gallery.png'
//import viberr from '../../assets/viberr.png';
//import freshBurger from '../../assets/fresh-burger.png';
//import hipsster from '../../assets/Gallery.png';
//import fitLift from '../../assets/fitlift.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Com}
          link="https://github.com/Jiramaet/Computer-Graphics-Project.git"
          h3="Computer Graphics"
          p="Dino"
        />
         <ProjectCard
          src={Gallery}
          link="https://github.com/Jiramaet/Web-Gallery.git"
          h3="Web Gallery"
          p="CRUD"
        />
      </div>
    </section>
  );
}

export default Projects;
