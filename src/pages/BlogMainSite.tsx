import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { BlogPosts } from '../components/BlogPosts';
import BlogPostThumbnail from '../components/BlogPostThumbnail';
import { useAppContainer } from '../components/Context';
import car from '../Images/car.jpg';
const BlogMainSite = () => {
  const { posts } = useAppContainer()

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
      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'baseline',
        }}
      >
        {posts.map(blogPost => (
          <BlogPostThumbnail key={blogPost.id} blogPost={blogPost} />
        ))}
      </Container>
    </div>
  );
};
export default BlogMainSite;
