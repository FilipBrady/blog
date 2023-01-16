import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import AdvertisingPlace from '../components/AdvertisingPlace';
import CommentSection from '../components/CommentSection';
import { useAppContainer } from '../components/Context';
import SuggestedPosts from '../components/SuggestedPosts';

const BlogPost = () => {
  const { id } = useParams();
  const { posts } = useAppContainer();

  return (
    <Box>
      <Box>
        {posts.map(blogPost => (
          <CommentSection blogPost={blogPost} />
        ))}
        {/* {posts.map(blogPosts => {
          blogPosts.blogPost.comment.map(postComments => (
            <CommentSection postComments={postComments} />
          ))
        })} */}
      </Box>
      <Box className='SitePostBox'>
        {posts.map(blogPost => {
          if (id === blogPost.thumbnail.ThumbLink) {
            return (
              <Box className='ArticleBox'>
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
                        style={{
                          maxWidth: '-webkit-fill-available',
                          height: 'auto',
                        }}
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
              </Box>
            );
          }
        })}
        <Box className='AdvertisingBox'>
          <AdvertisingPlace />
        </Box>
        <Box className='SuggestionBox'>
          <SuggestedPosts id={id} />
        </Box>
      </Box>
    </Box>
  );
};
export default BlogPost;
