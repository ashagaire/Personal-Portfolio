// src/components/Experience.tsx
import React from 'react';
import Grid from '@mui/material/Grid';



const Skills = () => {
  const skills = [
    { name: 'Themeforest', icon: 'flaticon-themeforest', link: '#' },
    { name: 'Dribbble', icon: 'flaticon-dribbble', link: '#' },
    { name: 'Behance', icon: 'flaticon-behance-logo', link: '#' },
    { name: 'GitHub', icon: 'flaticon-github-logo', link: '#' },
    { name: 'Flickr', icon: 'flaticon-flickr-website-logo-silhouette', link: '#' },
    { name: 'SmungMung', icon: 'flaticon-smug', link: '#' },
    { name: 'SquareSpace', icon: 'flaticon-squarespace-logo', link: '#' },
    { name: 'BitBucket', icon: 'flaticon-bitbucket-logotype-camera-lens-in-perspective', link: '#' },
  ];
  return (
    <section id="profiles" className="profiles py-10 px-4">
      <div className="profiles-details">
        <div className="section-heading text-center mb-8">
          <h2 className="text-3xl font-bold uppercase">Profiles</h2>
        </div>
        <div className="profiles-content container mx-auto">
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            
            {skills.map((profile, index) => (
              <Grid item xs={4} sm={4} md={3} key={index}>
                <div className="single-profile relative group">
                  <div className="profile-txt text-center">
                    <a href={profile.link} className="text-4xl text-gray-700 hover:text-gray-900">
                      <i className={profile.icon}></i>
                    </a>
                    <div className="profile-icon-name mt-2 text-lg capitalize">{profile.name}</div>
                  </div>
                  <div className="single-profile-overlay absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="profile-txt text-center text-white">
                      <a href={profile.link} className="text-4xl">
                        <i className={profile.icon}></i>
                      </a>
                      <div className="profile-icon-name mt-2 text-lg capitalize">{profile.name}</div>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Skills;
