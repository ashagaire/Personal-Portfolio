import React from 'react'; 
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
            <p>© copyright {currentYear} Asha Gaire. Design and developed by <a href="http://ashagaire.com.np">ashagaire.com.np</a></p>
        </footer>
    );
}

export default Footer;