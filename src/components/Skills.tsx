// src/components/Experience.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { skillsList } from '../data/skills';

const Skills = () => {
  return (
    <section className="section">
      <div className="section-title">
      <Typography variant="h2" >Skills</Typography>
      </div>
        <div className="container mx-auto py-4 sm:py-6 px-4  sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-6  gap-4">
            {skillsList.map((skill, index) => (
              <Card 
                key={index}
                className="relative group overflow-hidden transition-transform duration-300 hover:scale-105"
                sx={{ 
                  backgroundColor: '#f9f9f9',
                  boxShadow: 'none',
                  
                  '&:hover': { boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }
                }}
              >
                <CardContent className="text-center p-5">
                  <img src={skill.src} alt={skill.alt} width="30" height="30" className="mx-auto" />
                  <div className="mt-2 text-lg capitalize text-[#4a4a4a]">
                    {skill.alt}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      
    </section>
  );
};

export default Skills;
