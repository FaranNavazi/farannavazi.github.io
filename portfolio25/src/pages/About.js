import { Box, Typography, Stack, IconButton, Avatar } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const About = () => {
  return (
    <Box>
      <Box
        sx={{
          minHeight: '60vh',
          marginBottom: -5,
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
              width: { xs: 300, md: 400 },
              height: { xs: 300, md: 400 },
              margin: '0 auto',
              bgcolor: '#003B00',
            }}
          />
        </Box>
      </Box>

      {/* Made by FiRi Section */}
      <Box
        mt={8}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: 4,
          px: { xs: 2, md: 8 },
          py: 6,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          level="h2"
          fontWeight="lg"
          mb={3}
          sx={{ color: '#FAF9F6', fontSize: { xs: '1.75rem', md: '2.25rem' } }}
        >
          WHO IS <span style={{ color: '#00FF41' }}>MADE BY FiRi</span>?
        </Typography>

        <Typography
          sx={{ color: '#FAF9F6', fontSize: { xs: '1.1rem', md: '1.25rem' }, mb: 4 }}
        >
          Made by FiRi isn’t some big agency — it’s just me, helping people look better and work smarter online. I offer a mix of technical setups, branding advice, and digital problem-solving — all tailored to fit your actual goals, not just a checklist. Here's how I help different types of people:
        </Typography>

        <Stack spacing={5} mt={4}>

          {/* For Creators & Influencers */}
          <Box>
            <Typography
              level="h4"
              fontWeight="md"
              mb={1}
              sx={{ color: '#00FF41', fontSize: { xs: '1.4rem', md: '1.6rem' } }}
            >
              📢 For Creators & Influencers
            </Typography>
            <Typography
              sx={{ color: '#FAF9F6', fontSize: { xs: '1.05rem', md: '1.2rem' } }}
            >
              I help creators streamline the boring stuff so they can focus on what they do best. Need help setting up your Linktree or custom bio site? Want better ways to collect payments or bookings? I can guide you through tools like Ko-fi, Gumroad, Notion, or even set up your own branded domain. Need branding help or strategy advice? I’ve got you. And if you're looking for editors or designers — I know people.
              <br /><br />
              <em style={{ color: '#aaa' }}>Example: Helped a TikTok creator build a personal website and integrate email signups + a simple merch store using Shopify Lite.</em>
            </Typography>
          </Box>

          {/* For Small Businesses & Startups */}
          <Box>
            <Typography
              level="h4"
              fontWeight="md"
              mb={1}
              sx={{ color: '#00FF41', fontSize: { xs: '1.4rem', md: '1.6rem' } }}
            >
              🏪 For Small Businesses & Startups
            </Typography>
            <Typography
              sx={{ color: '#FAF9F6', fontSize: { xs: '1.05rem', md: '1.2rem' } }}
            >
              Whether you're opening a café, running a studio, or launching a local service — I build clean, mobile-friendly websites that help you stand out. I can also help connect your domain, hook it up to Cloudflare, manage your emails, and get your payment systems (like Square or Stripe) running properly.
              <br /><br />
              <em style={{ color: '#aaa' }}>Example: Built a fast-loading one-page site for a local artist, added booking calendar, connected custom email, and improved their SEO basics.</em>
            </Typography>
          </Box>

          {/* For Freelancers & Personal Brands */}
          <Box>
            <Typography
              level="h4"
              fontWeight="md"
              mb={1}
              sx={{ color: '#00FF41', fontSize: { xs: '1.4rem', md: '1.6rem' } }}
            >
              💼 For Freelancers & Personal Brands
            </Typography>
            <Typography
              sx={{ color: '#FAF9F6', fontSize: { xs: '1.05rem', md: '1.2rem' } }}
            >
              If you're trying to get your name out there, I can help you build your online presence from scratch. That includes portfolio websites, logo suggestions, custom email setups, and making sure your LinkedIn, Instagram, and other platforms are consistent and polished.
              <br /><br />
              <em style={{ color: '#aaa' }}>Example: Helped a fitness coach create a simple brand identity, custom email domain, and a link-in-bio landing page for all their services.</em>
            </Typography>
          </Box>

          {/* For DIYers & Tech-Savvy Clients */}
          <Box>
            <Typography
              level="h4"
              fontWeight="md"
              mb={1}
              sx={{ color: '#00FF41', fontSize: { xs: '1.4rem', md: '1.6rem' } }}
            >
              🌐 For Tech-Savvy Folks & DIYers
            </Typography>
            <Typography
              sx={{ color: '#FAF9F6', fontSize: { xs: '1.05rem', md: '1.2rem' } }}
            >
              You’ve got the tools, you just need a second brain to connect the dots. I help with DNS setups, Cloudflare configurations, email routing, custom hosting setups, Shopify/AWS integration — all that behind-the-scenes stuff that’s annoying but critical. You can also just ask me for advice if something feels off.
              <br /><br />
              <em style={{ color: '#aaa' }}>Example: Helped a startup troubleshoot DNS errors and set up a reverse proxy with Cloudflare + DigitalOcean for faster site delivery.</em>
            </Typography>
          </Box>

        </Stack>

        <Typography
          mt={6}
          sx={{ color: '#FAF9F6', fontSize: { xs: '1rem', md: '1.1rem' }, textAlign: 'center' }}
        >
          If it lives online — I probably know how to fix it, build it, or connect it. And if not, I’ll point you to someone who does.
        </Typography>
      </Box>

    </Box>
  )
};
export default About;