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
            <Link to="https://www.linkedin.com/in/asha-gaire-2b532217b"><LinkedInIcon /></Link>
            <Link to="https://asha-gaire.medium.com/"><FontAwesomeIcon icon={faMedium} className="medium-icon" /></Link>
            <Link to="https://github.com/ashagaire"><GitHubIcon /></Link>
        </div>
        <p> &copy; 2023 github.com/ashagaire </p>
    </div>
  )
}

export default Footer;