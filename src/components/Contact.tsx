// src/components/Experience.tsx
import React, { useState } from 'react';



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
    <section id="contact" className="bg-[#f9fbfd] py-12 px-0 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-[#3c4258]">Contact Me</h2>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Contact Form */}
          <div className="w-full lg:w-5/12 xl:w-5/12 lg:mr-6 mb-6 lg:mb-0">
            <div className="py-24 px-8 bg-white rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control w-full px-6 py-4 text-sm border border-white rounded-none shadow-none outline-none bg-white text-[#636a82]"
                      placeholder="Name*"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control w-full px-6 py-4 text-sm border border-white rounded-none shadow-none outline-none bg-white text-[#636a82]"
                      placeholder="Email*"
                      required
                    />
                  </div>
                </div>

                <div className="form-group mb-6">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control w-full px-6 py-4 text-sm border border-white rounded-none shadow-none outline-none bg-white text-[#636a82]"
                    placeholder="Subject"
                  />
                </div>

                <div className="form-group mb-6">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control w-full px-6 py-4 text-sm border border-white rounded-none shadow-none outline-none bg-white text-[#636a82]"
                    rows={8}
                    placeholder="Message"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#b636ff] text-white py-3 px-6 rounded-md border border-[#b636ff] shadow-lg transition-all duration-500 hover:bg-[#9f00ff] hover:border-[#9f00ff] hover:shadow-xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Address */}
          <div className="w-full lg:w-5/12 xl:w-5/12">
            <div className="py-24 px-8 bg-white rounded-lg shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl text-[#3c4258]">Browny Star</h3>
                <p className="text-[#636a82] text-sm font-light mt-2">UI/UX Designer</p>
              </div>
              <div className="mb-8">
                <div className="mb-6">
                  <h3 className="text-[#636a82] font-medium">Phone</h3>
                  <p className="text-[#999fb3] text-sm mt-2">987-123-6547</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-[#636a82] font-medium">Email</h3>
                  <p className="text-[#999fb3] text-sm mt-2">browny@info.com</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-[#636a82] font-medium">Website</h3>
                  <p className="text-[#999fb3] text-sm mt-2">www.brownsine.com</p>
                </div>
              </div>

              <div>
                <ul className="flex space-x-6">
                  <li>
                    <a href="#" className="text-[#636a82] hover:text-[#b636ff]">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#636a82] hover:text-[#b636ff]">
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#636a82] hover:text-[#b636ff]">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#636a82] hover:text-[#b636ff]">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#636a82] hover:text-[#b636ff]">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
