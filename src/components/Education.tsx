// src/components/Education.tsx
import React from 'react';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { Box } from '@mui/material';

const Education = () => {
  return (
    <section className="section">
      <div className="section-title">
      <Typography variant="h2" >
        Education
        </Typography>
      </div>
      <div className="container mx-auto py-4 sm:py-6 px-4  sm:px-6">
        <Stack spacing={4} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
          {/* Education 1 */}
          <Card elevation={3} sx={{ flex: 1 }}>
            <CardContent>
              <Box className="experience-time">
                <h2 className="text-lg font-semibold">2008 - 2010</h2>
                <h3 className="capitalize">
                  master <span className="lowercase">of</span> computer science
                </h3>
              </Box>
              <div className="flex items-center py-6 md:py-8">
                <i className="fa fa-circle text-[#d92cf9] text-xs mr-2" aria-hidden="true"></i>
                <span className="inline-block bg-[#b2c1ce] h-0.5 w-full"></span>
              </div>
              <Box className="timeline-content">
                <h4 className="text-xl font-semibold">University of North Carolina</h4>
                <h5 className="text-md my-4">North Carolina, USA</h5>
                <p className="text-[#999fb3] mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari.
                </p>
              </Box>
            </CardContent>
          </Card>

          {/* Education 2 */}
          <Card elevation={3} sx={{ flex: 1 }}>
            <CardContent>
              <Box className="experience-time">
                <h2 className="text-lg font-semibold">2004 - 2008</h2>
                <h3 className="capitalize">
                  bachelor <span className="lowercase">of</span> computer science
                </h3>
              </Box>
              <div className="flex items-center py-6 md:py-8">
                <i className="fa fa-circle text-[#d92cf9] text-xs mr-2" aria-hidden="true"></i>
                <span className="inline-block bg-[#b2c1ce] h-0.5 w-full"></span>
              </div>
              <Box className="timeline-content">
                <h4 className="text-xl font-semibold">University of North Carolina</h4>
                <h5 className="text-md my-4">North Carolina, USA</h5>
                <p className="text-[#999fb3] mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari.
                </p>
              </Box>
            </CardContent>
          </Card>

          {/* Education 3 */}
          <Card elevation={3} sx={{ flex: 1 }}>
            <CardContent>
              <Box className="experience-time">
                <h2 className="text-lg font-semibold">2004 - 2008</h2>
                <h3 className="capitalize">
                  bachelor <span className="lowercase">of</span> creative design
                </h3>
              </Box>
              <div className="flex items-center py-6 md:py-8">
                <i className="fa fa-circle text-[#d92cf9] text-xs mr-2" aria-hidden="true"></i>
                <span className="inline-block bg-[#b2c1ce] h-0.5 w-full"></span>
              </div>
              <Box className="timeline-content">
                <h4 className="text-xl font-semibold">University of Bolton</h4>
                <h5 className="text-md my-4">Bolton, United Kingdom</h5>
                <p className="text-[#999fb3] mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari.
                </p>
              </Box>
            </CardContent>
          </Card>
        </Stack>
      </div>
    </section>
  );
};

export default Education;
