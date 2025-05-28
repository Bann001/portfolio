import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import valiantImage from '../assets/valiant.png';
import intertwineImage from '../assets/intertwine.png';

const projects = [
  {
    title: 'Valiant',
    description: 'A fully Functional Payroll, HR management with automated reports and analytics of delivery and collection of goods',
    image: valiantImage,
    technologies: ['React', 'Node.js', 'MongoDB', 'Javascript'],
    github: 'https://github.com/Bann001/valiant',
    live: 'http://o0soo4sg0k40s44k0ccwcksw.88.198.171.23.sslip.io/',
  },
  {
    title: 'InterTwine',
    description: 'A Social Platform for capturing moments with family and friends',
    image: intertwineImage,
    technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
    github: 'https://github.com/Bann001/intertwine',
    live: 'https://bann001.github.io/intertwine/',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
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
            Projects
          </Typography>
        </motion.div>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
          gap: 4,
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {projects.map((project, index) => (
            <Box key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'background.paper',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      width: '100%'
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ color: 'text.primary' }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, minHeight: '60px' }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'primary.main',
                            color: 'background.default',
                            '&:hover': {
                              bgcolor: 'primary.dark',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'text.primary' }}
                    >
                      Code
                    </Button>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'text.primary' }}
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 