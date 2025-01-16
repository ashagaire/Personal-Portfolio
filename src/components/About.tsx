import React from "react";
// import profileImage from "../assets/profile_image.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
      </div>
      <div className="about-content container mx-auto flex flex-wrap gap-8">
        {/* Text Section */}
        <div className="flex-1 single-about-txt">
          <h3>
            I am a Professional UI/UX Designer and Web Developer. Consectetur an adipisi elita, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="single-about-add-info">
              <h3>Phone</h3>
              <p>987-123-6547</p>
            </div>
            <div className="single-about-add-info">
              <h3>Email</h3>
              <p>browny@info.com</p>
            </div>
            <div className="single-about-add-info">
              <h3>Website</h3>
              <p>www.brownsine.com</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 single-about-img">
        <div className="flex items-center justify-center">
            <img src={require("../assets/profile_image.jpg")} alt="Profile" className="block max-w-full h-auto" />
        </div>
          {/* <img src={require("../assets/profile_image.jpg")} alt="Profile" /> */}
          <div className="about-list-icon">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
