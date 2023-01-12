import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import BlogPostThumbnail from '../components/BlogPostThumbnail';
import car from '../Images/car.jpg';
const BlogMainSite = () => {
  return (
    <div>
      <div style={{ background: 'black' }}>
        <img
          src={car}
          alt='A car'
          width={'auto'}
          height={'300px'}
          style={{ opacity: 0.8 }}
        />
      </div>
      <Typography
        variant='h5'
        color={'white'}
        sx={{
          position: 'relative',
          top: '-100px',
          fontWeight: 700,
          fontFamily: "'Montagu Slab', serif",
        }}
      >
        Welcome to my Blog about Cars (As you can see)
      </Typography>
      <Container maxWidth='md'>
        <BlogPostThumbnail />
      </Container>
    </div>
  );
};
export default BlogMainSite;
