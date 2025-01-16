// src/components/Education.tsx
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education bg-[#f9fbfd] pt-12">
      <div className="section-heading text-center">
        <h2 className="text-2xl font-bold">Education</h2>
      </div>
      <div className="container mx-auto">
        <div className="education-horizontal-timeline py-20">
          <div className="flex justify-between">
            {/* Education 1 */}
            <div className="sm:w-1/3 px-2">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2 className="text-lg font-semibold">2008 - 2010</h2>
                  <h3 className="capitalize">
                    master <span className="lowercase">of</span> computer science
                  </h3>
                </div>
                <div className="timeline-horizontal-border flex items-center py-6">
                  <i className="fa fa-circle text-[#d92cf9] text-xs mr-2" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal bg-[#b2c1ce] h-0.5 w-[380px]"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title text-xl font-semibold">University of North Carolina</h4>
                    <h5 className="text-md">North Carolina, USA</h5>
                    <p className="description text-[#999fb3] max-w-[335px] mt-4">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occaecat cupidatat non proident.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education 2 */}
            <div className="sm:w-1/3 px-2">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2 className="text-lg font-semibold">2004 - 2008</h2>
                  <h3 className="capitalize">
                    bachelor <span className="lowercase">of</span> computer science
                  </h3>
                </div>
                <div className="timeline-horizontal-border flex items-center py-6">
                  <i className="fa fa-circle text-[#d92cf9] text-xs mr-2" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal bg-[#b2c1ce] h-0.5 w-[380px]"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title text-xl font-semibold">University of North Carolina</h4>
                    <h5 className="text-md">North Carolina, USA</h5>
                    <p className="description text-[#999fb3] max-w-[335px] mt-4">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occaecat cupidatat non proident.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education 3 */}
            <div className="sm:w-1/3 px-2">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2 className="text-lg font-semibold">2004 - 2008</h2>
                  <h3 className="capitalize">
                    bachelor <span className="lowercase">of</span> creative design
                  </h3>
                </div>
                <div className="timeline-horizontal-border flex items-center py-6">
                  <i className="fa fa-circle text-[#d92cf9] text-xs mr-2" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal spacial-horizontal-line bg-[#b2c1ce] h-0.5 w-[88px]"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title text-xl font-semibold">University of Bolton</h4>
                    <h5 className="text-md">Bolton, United Kingdom</h5>
                    <p className="description text-[#999fb3] max-w-[335px] mt-4">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occaecat cupidatat non proident.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
