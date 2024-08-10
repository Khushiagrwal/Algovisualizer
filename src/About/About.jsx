import React from 'react';
import aboutImage from '../../public/Images/about.avif'; // Adjust the path as needed
import { FaRegCircleCheck } from "react-icons/fa6";
import { Box, Typography, Card, CardContent } from '@mui/material';

const About = () => {
  return (
    <>
      <section>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: { xs: '2rem', md: '4rem' },
            // marginTop: { xs: '3rem', md: '5rem' }, 
            gap: { xs: '2rem', md: '3rem' },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              Are you a visual learner looking to better understand important algorithms?
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>
              I made AlgoVis for all the people who want to learn about algorithms, but don't feel like studying textbooks for hours just to understand them.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <FaRegCircleCheck /> Short explanations on how the algorithms work.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <FaRegCircleCheck /> Pseudocode implementations with dynamically highlighted lines.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <FaRegCircleCheck /> High-quality visualizations on all devices.
            </Typography>
            <Typography variant="body1">
              I made sure to create visualizations with the highest degree of interactivity. Every visualization comes with the option to test the algorithm on your own data, be it a list of unsorted numbers.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <img src={aboutImage} alt="About" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            padding: { xs: '2rem', md: '4rem' },
            gap: { xs: '2rem', md: '3rem' },
          }}
        >
          {['No advertisements', 'High Quality Visualization', 'Completely free'].map((feature, index) => (
            <Card
              key={index}
              sx={{
                flex: 1,
                minHeight: '250px', // Slightly increased minimum height
                boxShadow: '5px 5px 15px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#B90E0A',
                  color: 'white',
                  transform: 'scale(1.05) translateY(-5px)', // Slight upward bounce effect
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </Typography>
                <Typography 
                  variant="h6" 
                  component="h5" 
                  gutterBottom
                  sx={{
                    fontSize: '1.5rem',  // Larger font size for the heading
                    // fontWeight: 'bold',   // Bold font weight for the heading
                  }}
                >
                  {feature}
                </Typography>
                <Typography 
                  variant="body2" 
                  component="p"
                  sx={{
                    fontSize: '1rem',     // Smaller font size for the paragraph
                    marginTop: '0.5rem',  // Margin between the heading and paragraph
                    color:"grey"
                  }}
                >
                  {feature === 'No advertisements'
                    ? "Ads are annoying. In fact, they're so annoying that I refrain from having them on my site at all. I'm sure your ad-blocker appreciates that break."
                    : feature === 'High Quality Visualization'
                    ? "All visualizations have been coded by me, touching them up until it's clear on first sight how an algorithm works."
                    : "I believe in free education. AlgoVis is and will stay free - forever. Also, there's no need to create an account. All features are available for everyone."}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </section>
    </>
  );
};

export default About;
