
import project1 from '../assets/images/pattern-original.png';
import project2 from '../assets/images/photo3.jpg';
import project3 from '../assets/images/3D-game.jpg';
import project4 from '../assets/images/breakfast.jpg';


export default function Projects() {
    return (
      <div>
        {/* Projects */}
        <h2>Projects</h2>
          <div className="projects-container">
            <div class="project">
              <img src={project1} alt="project1" className="project1" />
              <p className="description">Illustration</p>
            </div> 
            <div class="project">
              <img src={project2} alt="project1" className="project2" />
              <p className="description">Photography</p>
            </div> 
            <div class="project">
              <img src={project3} alt="project1" className="project3" />
              <p className='description'>Game Design</p>
            </div> 
            <div class="project">
              <img src={project4} alt="project1" className="project4" />
              <p className="description">3D Modelling</p>
            </div>
          </div> 
      </div>
    );
  }