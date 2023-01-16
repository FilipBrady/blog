import { Box, Button, TextField, Typography } from '@mui/material';
import { BlogPostType } from './BlogPostType';

type Props ={
  blogPost: BlogPostType;
}

const CommentSection = ({ blogPost }: Props) => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Typography variant='h6'>Comments</Typography>
      <Box>
        {blogPost.blogPost.comment?.map(postComment => (

          <Typography variant='body2'>Comment</Typography>
        ))}
      </Box>
      <Box sx={{display: "flex", flexDirection: "column", width: "fit-content", marginTop: 2}}>
        <Typography variant='body1'>Add Comment</Typography>
        <TextField variant='standard' type='email' label='Your Email' />
        <TextField variant='standard' type='text' label='Your Name' />
        <TextField
          variant='standard'
          type='text'
          multiline
          rows={4}
          label='Your Comment'
        />
        <Button variant='outlined' sx={{marginY: 2}} >Submit Comment</Button>
      </Box>
    </Box>
  );
};

export default CommentSection;
