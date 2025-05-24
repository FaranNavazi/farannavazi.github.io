import { Box, Typography, Stack, IconButton, Avatar } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const About = () => {
    return(
        <Box
        sx={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, md: 8 },
          py: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          color: 'white',
        }}
      >
        



        {/* Left Content */}
        <Box flex={1}>
          <Typography
            level="h2"
            fontWeight="lg"
            textAlign={{ xs: 'center', md: 'left' }}
            mb={3}
            sx={{ color: '#FAF9F6' }}
          >
            LET ME <span style={{ color: '#00FF41' }}>INTRODUCE</span> MYSELF
          </Typography>

          <Stack spacing={2} sx={{ maxWidth: 600 }}>
            <Typography sx={{ color: '#FAF9F6' }}>
              I fell in love with programming and I have learnt many things, I think… 🤷‍♂️
            </Typography>
            <Typography sx={{ color: '#FAF9F6' }}>
              I am fluent in classics like <strong><em>C++, Javascript and Python</em></strong>.
            </Typography>
            <Typography sx={{ color: '#FAF9F6' }}>
              My field of Interest's are building new <span style={{ color: '#00FF41' }}><strong><em>Web Technologies and Products</em></strong></span> and also in areas related to <em style={{ color: '#00FF41' }}>Strong Social Media Managment & Marketing</em>.
            </Typography>
            <Typography sx={{ color: '#FAF9F6' }}>
              Whenever possible, I also apply my passion for Networking and Domain Managment with <strong style={{ color: '#00FF41' }}>AWS & CloudFlare</strong> and <em style={{ color: '#00FF41' }}>Online Payment Managment</em> like <strong>Square</strong>, <strong>Stripe</strong> AND <strong>Shopify</strong>.
            </Typography>
          </Stack>

          <Box mt={5} textAlign={{ xs: 'center', md: 'right' }}>
            <Typography level="h4" fontWeight="lg" sx={{ color: '#FAF9F6' }}>FIND ME ON</Typography>
            <Typography level="body-sm" mt={0.5}>
              Feel free to <span style={{ color: '#00FF41' }}>connect</span> with me
            </Typography>

            <Stack direction="row" spacing={2} mt={2} justifyContent={{ xs: 'center', md: 'flex-end' }}>
              <IconButton variant="plain" color="neutral">
                <GitHubIcon sx={{ fontSize: 46 }} />
              </IconButton>
              <IconButton variant="plain" color="neutral">
                <LinkedInIcon sx={{ fontSize: 46 }} />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        {/* Avatar/Image */}
        <Box flex={1} textAlign="center" mt={{ xs: 5, md: -25 }}>
          <Avatar
            src="/assets/images/faran.png"
            alt="Profile Avatar"
            sx={{
              width: 275,
              height: 275,
              margin: '0 auto',
              bgcolor: '#003B00',
            }}
          />
        </Box>



        
      </Box>
    )
};
export default About;