// components/Navbar.jsx
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Typography, Button, IconButton, Sheet, Stack } from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const NavbarContainer = styled(Box)`
  position: fixed;
  margin: 10px;
  top: 0;
  width: 94%;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(12px);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  z-index: 1000;
`;

const NavLinks = styled(Box)`
  display: flex;
  gap: 5px;

  @media (max-width: 890px) {
    display: none;
  }
`;

const MobileMenu = styled(Sheet)`
  position: fixed;
  top: 64px;
  right: 16px;
  width: 180px;
  background-color: rgba(30, 30, 30, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 16px;
  z-index: 999;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavbarContainer>
        <Typography level="h2" fontWeight="lg" sx={{color:'#00FF41'}}>
          Made By FiRi
        </Typography>

        <NavLinks>
          <Button variant="plain" color="neutral" sx={{color:'#00FF41'}} component={Link} to="/">Home</Button>
          <Button variant="plain" color="neutral" sx={{color:'#00FF41'}} component={Link} to="/about">About</Button>
          <Button variant="plain" color="neutral" sx={{color:'#00FF41'}} component={Link} to="/projects">Projects</Button>
          <Button variant="plain" color="neutral" sx={{color:'#00FF41'}} component={Link} to="/contact">Contact</Button>
        </NavLinks>

        <IconButton
          sx={{ display: { xs: 'inline-flex', md: 'none', marginRight: '20px', color:'#00FF41'} }}
          variant="plain"
          color="neutral"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </NavbarContainer>

      {menuOpen && (
        <MobileMenu>
          <Stack spacing={1}>
            <Button variant="plain" color="neutral" sx={{color:'#00FF41'}} component={Link} to="/" onClick={() => setMenuOpen(false)}>Home</Button>
            <Button variant="plain" color="neutral" sx={{color:'#00FF41'}} component={Link} to="/about" onClick={() => setMenuOpen(false)}>About</Button>
            <Button variant="plain" color="neutral" sx={{color:'#00FF41'}} component={Link} to="/projects" onClick={() => setMenuOpen(false)}>Projects</Button>
            <Button variant="plain" color="neutral" sx={{color:'#00FF41'}} component={Link} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Button>
          </Stack>
        </MobileMenu>
      )}
    </>
  );
};

export default Navbar;
