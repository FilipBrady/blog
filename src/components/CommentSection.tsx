import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { BlogPostType } from './BlogPostType';
import { useAppContainer } from './Context';

type Props = {
  blogPost: BlogPostType;
};

const CommentSection = ({ blogPost }: Props) => {
  const {onAddComment} = useAppContainer()
  const [newName, setNewName] = useState("")
  const [newCommentText, setNewCommentText] = useState("")
  const handleNewName = (newName: string) => {
    setNewName(newName)
  }
  const handleNewCommentText = (newCommentText: string) => {
    setNewCommentText(newCommentText)
  }

  const handleSubmitClick = () => {
    onAddComment(blogPost.thumbnail.ThumbLink ,newName, newCommentText)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
      }}
    >
      <Box sx={{ padding: '5px 15px', textAlign: 'left' }}>
        <Typography variant='h6'>Comments</Typography>

        {blogPost.comment?.length !== undefined ? (
          blogPost.comment?.map(postComment => {
            return (
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant='body1' sx={{ fontWeight: 800 }}>
                  {postComment.name}
                </Typography>
                <Typography variant='body2'>
                  {postComment.commentText}
                </Typography>
              </Box>
            );
          })
        ) : (
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant='body2'>No coments yet</Typography>{' '}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 'fit-content',
          marginTop: 2,
        }}
      >
        <Typography variant='body1'>Add Comment</Typography>
        <TextField variant='standard' type='text' label='Your Name' value={newName} onChange={newName => handleNewName(newName.target.value)} />
        <TextField
          variant='standard'
          type='text'
          multiline
          rows={3}
          label='Your Comment'
          value={newCommentText}
          onChange={newCommentText => handleNewCommentText(newCommentText.target.value)}
        />
        <Button
          variant='outlined'
          sx={{ width: 'fit-content', margin: 'auto', marginY: 2 }}
          onClick={() => handleSubmitClick()}
        >
          Submit Comment
        </Button>
      </Box>
    </Box>
  );
};

export default CommentSection;
