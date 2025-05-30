import { useState, useEffect } from 'react';
import MatrixBackground from "../components/MatrixBackground";
import { Box, Typography } from '@mui/joy';

const Home = () => {
  const images = [
    '/assets/images/web1.png',
    '/assets/images/web2.png',
    '/assets/images/web3.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1300);
    return () => clearInterval(interval);
  }, [images.length]);

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
            color: '#008F19',
            fontFamily: 'Orbitron',
            textTransform: "uppercase",
            fontSize: {
              xs: '2.5rem',
              sm: '3rem',
              md: '5.4rem',
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
          px: { xs: 2, sm: 3, md: 8 },
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
          <Typography level="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, maxWidth: 700, lineHeight: 1.7 }}>
            Your website is your first impression—and we make sure it’s a strong one. We craft custom websites tailored to your business goals, whether you're just starting out or ready to scale. Fast loading, mobile-ready, and built with love, your site will do more than just look good—it'll work hard for you.
          </Typography>
          <Box
            component="img"
            src={images[currentImage]}
            alt="Web Design"
            sx={{
              width: { xs: '100%', sm: '80%', md: '100%' },
              maxWidth: { xs: 400, sm: 600, md: 750 },
              height: 'auto',
              aspectRatio: '16/9',
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
    gap: { xs: 6, md: 10 },
  }}
>
  <Box
    component="img"
    src="/assets/images/full-service-cycle.png"
    alt="Deployment"
    sx={{
      width: { xs: 300, sm: 340, md: 390, lg: 490 },
      height: {
        xs: 300, sm: 340, md: 390, lg: 490, // Match width at each breakpoint
      },
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 0 20px #81c784',
      mx: 'auto',
    }}
  />
  <Box sx={{ maxWidth: 700, textAlign: { xs: 'center', md: 'left' } }}>
    <Typography level="h2" sx={{ fontWeight: 'bold', color: '#A5D6A7' }}>
      Seamless Setup & Deployment
    </Typography>
    <Typography level="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7 }}>
      We handle all the heavy lifting—buying your domain, setting up secure DNS, managing hosting, and deploying your website. No confusing tech talk, no stress. Just a smooth, worry-free experience that gets your site live and reliable with zero guesswork on your part.
    </Typography>
  </Box>
</Box>


        {/* Section 3: SEO & Marketing */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 6, md: 10 },
          }}
        >
          <Box
            component="img"
            src="/assets/images/seo.png"
            alt="SEO & Marketing"
            sx={{
              width: { xs: '100%', sm: 300, md: 360, lg: 400 },
              height: 'auto',
              borderRadius: 4,
              objectFit: 'cover',
              boxShadow: '0 0 20px #A5D6A7',
              mx: 'auto',
            }}
          />
          <Box sx={{ maxWidth: 700, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography level="h2" sx={{ fontWeight: 'bold', color: '#A5D6A7' }}>
              Smart SEO & Honest Marketing
            </Typography>
            <Typography level="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7 }}>
              It’s not about gaming algorithms—it’s about real strategy. From search engine optimization to targeted ads on Google, Instagram, and Facebook, we help the right people find you. We also work with trusted partners for content strategy and editing, so you get a complete solution tailored to your brand.
            </Typography>
          </Box>
        </Box>

        {/* Connect With Me Button */}
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            borderTop: '1px solid #2e7d32',
          }}
        >
          <Typography level="h2" sx={{ fontWeight: 'bold', color: '#A5D6A7', mb: 3 }}>
            Let's bring your VISION to life!
          </Typography>
          <Box>
            <a
              href="https://your-calendly-link.com" // Replace with real link
              style={{
                textDecoration: 'none',
                backgroundColor: '#66bb6a',
                color: '#000',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1rem',
                transition: 'all 0.3s ease-in-out',
                display: 'inline-block'
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#C9E265')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#66bb6a')}
            >
              Plan a Chat With Me
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
