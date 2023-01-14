import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { BlogPosts } from '../components/BlogPosts';
import { useAppContainer } from '../components/Context';
import traktor from '../Images/traktor.jpg';

const BlogPost = () => {
  const { id } = useParams();
  const { posts } = useAppContainer()

  return (
    <Box sx={{ marginTop: 4 }}>
      {posts.map(blogPost => {
        if (id === blogPost.thumbnail.ThumbLink) {
          return (
            <Container maxWidth='sm'>
              <Typography variant='h5' color='initial'>
                {' '}
                {blogPost.blogPost.postHeading}
              </Typography>

              <Box sx={{ padding: 4, textAlign: 'left' }}>
                <Typography variant='body1'>
                  {blogPost.blogPost.postText1}
                </Typography>
                <Box
                  sx={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingY: 2,
                  }}
                >
                  <img
                  style={{maxWidth: "650px", height: "auto"}}
                    src={blogPost.blogPost.postPhoto1}
                    alt={blogPost.blogPost.postPhotoDescription1}
                  />
                  <Typography variant='subtitle2'>
                    *{blogPost.blogPost.postPhotoDescription1}
                  </Typography>
                </Box>
                <Typography variant='body1'>
                  {blogPost.blogPost.postText2}
                </Typography>
                <Typography variant='body1'>
                  {blogPost.blogPost.postText3}
                </Typography>
              </Box>
            </Container>
          );
        }
      })}
    </Box>
  );
};
export default BlogPost;
