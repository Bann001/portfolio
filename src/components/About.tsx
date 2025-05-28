import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              mb: 6,
              textAlign: 'center',
              '&::after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '4px',
                background: 'primary.main',
                margin: '20px auto',
              },
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, alignItems: 'center' }}>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Hello! I'm a passionate software developer with a keen eye for creating
                beautiful and functional digital experiences. My journey in web development
                started with a curiosity about how things work on the internet, which led
                me to dive deep into the world of programming.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                I specialize in building responsive web applications using modern
                technologies like React, TypeScript, and Node.js. I'm constantly learning
                and exploring new technologies to stay at the forefront of web development.
              </Typography>
            </motion.div>
          </Box>

          <Box>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
                  Here are a few technologies I've been working with recently:
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                  {[
                    'JavaScript (ES6+)',
                    'TypeScript',
                    'React',
                    'Node.js',
                    'Material-UI',
                    'Git',
                  ].map((skill) => (
                    <Box key={skill}>
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          display: 'flex',
                          alignItems: 'center',
                          '&::before': {
                            content: '"▹"',
                            color: 'primary.main',
                            mr: 1,
                          },
                        }}
                      >
                        {skill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 