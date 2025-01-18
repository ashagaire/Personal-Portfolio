// src/components/Experience.tsx
import { Typography, Card, CardContent, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="section">
      <div className="section-title-wrapper">
      <div className="section-title">
        <Typography variant="h2">Contact Me</Typography>
      </div>
      </div>
      

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 py-4 sm:px-6">
          {/* Contact Form */}
          <div className="px-4 py-4 lg:px-10 lg:py-8 w-auto">
            <Card className="  lg:px-2 xl:px-8">
              <CardContent>
                <form onSubmit={handleSubmit} className="">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="form-group mb-6">
                      <TextField
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        label="Name"
                        required
                      />
                    </div>
                    <div className="form-group mb-6">
                      <TextField
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group mb-6">
                    <TextField
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                      label="Subject"
                      required

                    />
                  </div>

                  <div className="form-group mb-6">
                    <TextField
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full"
                      label="Message"
                      multiline
                      rows={4}
                      required

                    />
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="flex justify-center items-center h-12 w-full"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Address */}
          <div className="w-auto ">
            <div className=" px-4 py:4 lg:py-8 lg:px-16 bg-white ">
              <div className=" mb-8">
                <h3 className=" text-2xl text-[#3c4258]">Browny Star</h3>
                <p className=" text-sm text-[#636a82] font-light mt-2">UI/UX Designer</p>
              </div>
              <div className=" mb-8">
                <div className=" mb-6">
                  <h3 className="text-[#636a82] font-medium">Phone</h3>
                  <p className="text-[#999fb3] text-sm mt-2">987-123-6547</p>
                </div>
                <div className=" mb-6">
                  <h3 className="text-[#636a82] font-medium">Email</h3>
                  <p className="text-[#999fb3] text-sm mt-2">browny@info.com</p>
                </div>
                <div className=" mb-6">
                  <h3 className="text-[#636a82] font-medium">Website</h3>
                  <p className="text-[#999fb3] text-sm mt-2">www.brownsine.com</p>
                </div>
              </div>
              
                <div className="flex flex-wrap gap-4 m-0">
                  <div className="flex items-center justify-start">
                    <a href="https://www.linkedin.com/in/asha-gaire-2b532217b" className="icons-list-contacts">
                      <LinkedInIcon />
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <a href="https://github.com/ashagaire" className="icons-list-contacts">
                      <GitHubIcon />
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <a href="https://asha-gaire.medium.com/" className="icons-list-contacts">
                    <FontAwesomeIcon icon={faMedium} className="medium-icon" />
                    </a>
                  </div>
                </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
