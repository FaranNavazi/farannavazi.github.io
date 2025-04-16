import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/joy';
import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Box)`
  width: 98%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  padding: 24px 16px;
  margin-top: auto;
  border-top: 1px solid rgba(0, 255, 65, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #00FF41;
`;

const SocialIcons = styled(Stack)`
  margin-top: 16px;
  flex-direction: row;
  gap: 12px;

  button {
    color: #00FF41;

    &:hover {
      color: #00ff80;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Typography level="body-md" fontWeight="lg">
        © {new Date().getFullYear()} Media Alchemy. All rights reserved.
      </Typography>

      <SocialIcons>
        <IconButton component="a" href="https://github.com/FaranNavazi" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton component="a" href="https://www.linkedin.com/in/farannavazi/" target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton component="a" href="mailto:faran.navazi@gmail.com">
          <EmailIcon />
        </IconButton>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
