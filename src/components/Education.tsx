// src/components/Education.tsx
import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { educationList } from "../data/education";

const Education = () => {
  return (
    <section className="section">
      <div className="section-title">
        <Typography variant="h2">Education</Typography>
      </div>
      <div className="container mx-auto py-4 sm:py-6 px-4  sm:px-6 lg:px-0 lg:py-20">
        <Stack
          spacing={4}
          direction={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
        >
          {educationList.map((education, index) => (
            <Card elevation={3} sx={{ flex: 1 }} key={index}>
              <CardContent>
                <Box>
                  <Typography variant="h5" className="text-gray-500">
                    {education.date}
                  </Typography>
                  <Typography variant="h4" className="text-gray-800">
                    {education.title}
                  </Typography>
                </Box>
                <div className="flex items-center py-6 ">
                  <span className="inline-block bg-[#b2c1ce] h-0.5 w-full"></span>
                </div>
                <Box>
                  <Typography variant="h4" className="text-gray-800">
                    {education.from}
                  </Typography>
                  {/* need margin top here */}
                  <Typography
                    variant="body2"
                    className="text-gray-800 "
                    style={{
                      lineHeight: "1.6",
                      overflowWrap: "break-word",
                      textAlign: "justify",
                    }}
                  >
                    {education.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </div>
    </section>
  );
};

export default Education;
