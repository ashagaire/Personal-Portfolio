import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import GitHubIcon   from "@material-ui/icons/GitHub";

import { Link } from 'react-router-dom' 

import "../styles/Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <Link to="https://www.linkedin.com/in/asha-gaire-2b532217b" target="_blank"><LinkedInIcon /></Link>
            <Link to="https://asha-gaire.medium.com/" target="_blank"><FontAwesomeIcon icon={faMedium} className="medium-icon" /></Link>
            <Link to="https://github.com/ashagaire" target="_blank"><GitHubIcon className="svg_icons" /></Link>
        </div>
        <p> &copy; 2024 github.com/ashagaire </p>
    </div>
  )
}

export default Footer;