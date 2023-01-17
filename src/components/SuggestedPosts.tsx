import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppContainer } from './Context';
import { route } from './routes/routes';

type Props = {
  id: string | undefined;
};

const SuggestedPosts = ({ id }: Props) => {
  const { posts } = useAppContainer();

  // console.log(id);

  return (
    <Box sx={{ marginTop: 2, marginBottom: 3, margin: "auto", position: "sticky", top: "50px" }}>
      <Typography variant='h6'>
        Suggested articles for YOU.
      </Typography>
      {posts.map(post => {
        if (id !== post.thumbnail.ThumbLink) {
          return (
            <Link
              className='SuggestedLink'
              to={`${route.post}/${post.thumbnail.ThumbLink}`}
            >
              <Box sx={{ textAlign: 'left', marginTop: 1 }}>
                <Typography
                  variant='h6'
                  color='initial'
                  sx={{ textDecoration: 'underline', fontWeight: '600' }}
                >
                  {post.thumbnail.ThumbHeading}
                </Typography>

                <Typography variant='caption' color='initial'>
                  {post.thumbnail.ThumbDescription}
                </Typography>
              </Box>
            </Link>
          );
        }
      })}
    </Box>
  );
};
export default SuggestedPosts;
