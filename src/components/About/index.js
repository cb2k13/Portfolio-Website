import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import './index.scss'; 
import AnimatedLetters from '../AnimatedLetters'
import {
    faCss3,
    faHtml5,
    faJsSquare, 
    faReact, 
    faGitAlt,
    faPython

} from '@fortawesome/free-brands-svg-icons'


const About = () => {
    
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters 
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                idx={15}
                />
                </h1> 
                
                <p>
                    I'm a senior at California State University, Fresno
                    looking to work and improve my skills in web and
                    software development. 
                </p>
                <p>
                    {' '}
                    I'm always looking forward to learning new technologies
                    and like to work in a team environment to solve new 
                    challenges. 
                </p>

                    </div>

                    <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faPython} color="#DD0031" />
                        </div>

                </div>


        </div>
        </div>
        <Loader type="pacman" />
        </>
    );

}; 

export default About; 