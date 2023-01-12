import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import traktor from '../Images/traktor.jpg';
import { route } from './routes/routes';

const BlogPostThumbnail = () => {
  return (
    <div className='BlogPostThumnbail'>
      <Card sx={{ maxWidth: 300, marginY: 3 }}>
        <Link to={route.post}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='160'
              image={traktor}
              alt='Big Blue Traktor'
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
                Is Tractor beter vehicle to a city than a car?
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Is Tractor beter vehicle to a city than a car? We have the
                answer for this interesting question.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
};
export default BlogPostThumbnail;
