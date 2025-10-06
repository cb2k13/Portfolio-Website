import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import LogoC from '../../assets/images/logo-C.png'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faComputer, faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={`nav-bar ${open ? 'open' : ''}`}>
      <Link className='logo' to='/' onClick={() => setOpen(false)}>
        <img src={LogoC} alt="logo" />
      </Link>

      {/* Hamburger is visible only on mobile via CSS */}
      <button
        className="hamburger"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >☰</button>

      <nav onClick={() => setOpen(false)}>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faComputer} color="#4d4d4e" />
        </NavLink>

        <NavLink exct="true" activeclassname="active" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faBars} color="4d4d43" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carlos-briceno-a87a71167/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/cb2k13">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar

