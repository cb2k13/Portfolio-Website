import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import {
    faCss3,
    faHtml5,
    faJsSquare, 
    faReact, 
    faGitAlt,
    faPython,
    faNode

} from '@fortawesome/free-brands-svg-icons'


const Skills = () => {


    return (
            <>
                <div className="container skills-page">
                    <div className="text-zone">
                    <h1>
                <AnimatedLetters 
                strArray={['S', 'k', 'i', 'l', 'l', 's']}
                idx={15}
                />
                </h1> 
                <p>
                    Expert in software development in technologies such as
                    HTML, CSS, Javascript, React, Python, Node JS, SQL
                    and Git. 
                </p>
                <p>
                    {' '}
                    Learning new skills to improve my software development skills
                    is something I often do. I want to broaden my skillset
                    and be the best I can be. 
                </p>
                <p>
                Visit my <a 
            href="https://www.linkedin.com/in/carlos-briceno-a87a71167/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin"
                    >
                LinkedIn
  </a> for more details.
                </p>
                    </div>
                    <div className="skills-icons">
  <FontAwesomeIcon icon={faHtml5} title="HTML5" color="#F06529" />
  <FontAwesomeIcon icon={faCss3} title="CSS3" color="#28A4D9" />
  <FontAwesomeIcon icon={faJsSquare} title="JavaScript" color="#EFD81D" />
  <FontAwesomeIcon icon={faReact} title="React" color="#5ED4F4" />
  <FontAwesomeIcon icon={faPython} title="Python" color="#DD0031" />
  <FontAwesomeIcon icon={faNode} title="Node.js" color="#90ee90" />
  <FontAwesomeIcon icon={faGitAlt} title="Git" color="#EC4D28" />
</div>
                </div>

                <Loader type="pacman" />
            </>

    ); 

}

export default Skills; 