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
import { useAppContainer } from './Context';
import { route } from './routes/routes';

type Props = {
  blogPost: {
    id: number;
    thumbnail: {
      photo: any;
      ThumbHeading: string;
      ThumbDescription: string;
      ThumbLink: string;
    };
    blogPost: {
      postHeading: string;
      postText1: string;
      postPhoto1: any;
      postPhotoDescription1: string;
      postText2: string;
      postText3: string;
    };
  };
};

const BlogPostThumbnail = ({blogPost}: Props) => {
  return (
    <div className='BlogPostThumnbail'>
      <Card sx={{width: 300, maxWidth: 300 ,marginY: 3 }}>
        <Link to={`${route.post}/${blogPost.thumbnail.ThumbLink}`}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='160'
              image={blogPost.thumbnail.photo}
              alt={blogPost.blogPost.postPhotoDescription1}
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {blogPost.thumbnail.ThumbHeading}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
               {blogPost.thumbnail.ThumbDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
};
export default BlogPostThumbnail;
