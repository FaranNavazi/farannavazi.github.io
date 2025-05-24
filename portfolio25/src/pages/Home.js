import { useState, useEffect } from 'react';
import MatrixBackground from "../components/MatrixBackground";
import { Box, Typography } from '@mui/joy';




const Home = () => {


  // Image rotation logic for Section 1
  const images = [
    '/assets/images/web1.png',
    '/assets/images/web2.png',
    '/assets/images/web3.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1300); // 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MatrixBackground />
      <Box
        sx={{
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          level="h1"
          fontWeight="xlg"
          sx={{
            color: '#008F19', fontFamily: 'Orbitron', textTransform: "uppercase", fontSize: {
              xs: '2.5rem',   // for mobile
              sm: '3rem',     // small tablets
              md: '5.4rem',     // medium devices and up 
            }
          }}
        >
          Empowering your digital journey
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          px: { xs: 3, md: 8 },
          py: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          color: 'white',
        }}
      >
        {/* Section 1: Web Design */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 4 }}>
          <Typography level="h2" sx={{ fontWeight: 'bold', color: '#A5D6A7' }}>
            Beautiful, Purposeful Websites
          </Typography>
          <Typography level="body1" sx={{ fontSize: '1.2rem', maxWidth: 700, lineHeight: 1.7 }}>
            Your website is your first impression—and we make sure it’s a strong one. We craft custom websites tailored to your business goals, whether you're just starting out or ready to scale. Fast loading, mobile-ready, and built with love, your site will do more than just look good—it'll work hard for you.
          </Typography>
          <Box
  component="img"
  src={images[currentImage]}
  alt="Web Design"
  sx={{
    width: '100%',
    maxWidth: 600,
    height: 360,
    objectFit: 'cover',
    borderRadius: 6,
    boxShadow: '0 0 20px #66bb6a',
    transition: 'opacity 0.8s ease-in-out',
  }}
/>
        </Box>

        {/* Section 2: Deployment */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '0 0 auto',
              width: { xs: '100%', md: 280 },
            }}
          >
            <Box
              component="img"
              src="/images/deployment-large.jpg"
              alt="Deployment"
              sx={{
                width: 240,
                height: 240,
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 0 20px #81c784',
              }}
            />
          </Box>
          <Box sx={{ maxWidth: 700, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography level="h2" sx={{ fontWeight: 'bold', color: '#C8E6C9' }}>
              Seamless Setup & Deployment
            </Typography>
            <Typography level="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
              We handle all the heavy lifting—buying your domain, setting up secure DNS, managing hosting, and deploying your website. No confusing tech talk, no stress. Just a smooth, worry-free experience that gets your site live and reliable with zero guesswork on your part.
            </Typography>
          </Box>
        </Box>

        {/* Section 3: SEO & Marketing - Image on Right */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '0 0 auto',
              width: { xs: '100%', md: 280 },
            }}
          >
            <Box
              component="img"
              src="/images/seo-marketing-large.jpg"
              alt="SEO & Marketing"
              sx={{
                width: 260,
                height: 260,
                borderRadius: 12,
                objectFit: 'cover',
                boxShadow: '0 0 20px #A5D6A7',
              }}
            />
          </Box>
          <Box sx={{ maxWidth: 700, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography level="h2" sx={{ fontWeight: 'bold', color: '#AED581' }}>
              Smart SEO & Honest Marketing
            </Typography>
            <Typography level="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
              It’s not about gaming algorithms—it’s about real strategy. From search engine optimization to targeted ads on Google, Instagram, and Facebook, we help the right people find you. With clear reporting and authentic content creation, we grow your visibility without the gimmicks.
            </Typography>
          </Box>
        </Box>
      </Box>

    </>
  );
};

export default Home;