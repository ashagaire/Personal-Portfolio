import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon   from "@material-ui/icons/GitHub";
import "../styles/Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <LinkedInIcon />
            <FacebookIcon />
            <GitHubIcon />
        </div>
        <p> &copy; 2023 github.com/ashagaire </p>
    </div>
  )
}

export default Footer;