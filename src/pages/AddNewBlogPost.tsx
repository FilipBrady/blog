import { Box, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContainer } from '../components/Context';
import { route } from '../components/routes/routes';

const AddNewBlogPost = () => {
  const { onAddNewPost } = useAppContainer();
  const [newHeading, setNewHeading] = useState('');
  const [keyword, setKeyword] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [postText1, setPostText1] = useState('');
  const [postText2, setPostText2] = useState('');
  const [postText3, setPostText3] = useState('');
  const [newFile, setNewFile] = useState('');
  const [photoDescription, setPhotoDescription] = useState('');
  const navigate = useNavigate()

  const handleNewHeading = (heading: string) => {
    setNewHeading(heading);
  };
  const handleNewDescription = (description: string) => {
    setNewDescription(description);
  };
  const handleNewKeywork = (keyword: string) => {
    setKeyword(keyword);
  };
  const handleNewPostText1 = (postText1: string) => {
    setPostText1(postText1);
  };
  const handleNewPostText2 = (postText2: string) => {
    setPostText2(postText2);
  };
  const handleNewPostText3 = (postText3: string) => {
    setPostText3(postText3);
  };

  const handleFileUpload = (e: any) => {
    // console.log(e.target.files);
    setNewFile(URL.createObjectURL(e.target.files[0]));
  };
  const handlePhotoDescription = (photoDescription: string) => {
    setPhotoDescription(photoDescription);
  };

  const handleSubmiting = (formSubmit: any) => {
    formSubmit.preventDefault();
    
    onAddNewPost(
      newFile,
      newHeading,
      newDescription,
      keyword,
      newHeading,
      postText1,
      newFile,
      photoDescription,
      postText2,
      postText3
    );
    setNewHeading('');
    setNewDescription('');
    setKeyword('');
    setNewFile('');
    setPhotoDescription('');
    setPostText1('');
    setPostText2('');
    setPostText3('');
    navigate(`${route.post}/${keyword}`)
  };

  return (
    <div>
      <Container maxWidth='lg' sx={{ marginY: 3 }}>
        <Typography variant='h6'>Add New Post</Typography>
        <form onSubmit={handleSubmiting}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'cneter',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <TextField required
                  sx={{ marginX: 1 }}
                  inputProps={{ maxLength: 100 }}
                  variant='standard'
                  type='text'
                  label='Post Heading (Max 100 letters)'
                  value={newHeading}
                  onChange={heading => handleNewHeading(heading.target.value)}
                />
                <TextField required
                  sx={{ marginX: 1 }}
                  inputProps={{ maxLength: 30 }}
                  variant='standard'
                  type='text'
                  label='keyword (Max 30 letters)'
                  value={keyword}
                  onChange={keyword => handleNewKeywork(keyword.target.value)}
                />
                <TextField required
                  sx={{ marginX: 1 }}
                  inputProps={{ maxLength: 150 }}
                  variant='standard'
                  type='text'
                  label='Post description (Max 150 letters)'
                  value={newDescription}
                  onChange={description =>
                    handleNewDescription(description.target.value)
                  }
                />
              </Box>
              <Box sx={{ marginY: 3, alignItems: 'baseline' }}>
                <TextField required
                  type='file'
                  variant='standard'
                  // value={newFile}
                  onChange={handleFileUpload}
                />
                <TextField required
                  sx={{ marginX: 1 }}
                  variant='standard'
                  type='text'
                  label='Photo description'
                  value={photoDescription}
                  onChange={photoDescription =>
                    handlePhotoDescription(photoDescription.target.value)
                  }
                />
              </Box>
            </Box>
            <TextField required
              variant='standard'
              type='textarea'
              label='Post text (1st)'
              multiline
              rows={4}
              fullWidth
              value={postText1}
              onChange={postText1 => handleNewPostText1(postText1.target.value)}
            />
            <TextField required
              variant='standard'
              type='textarea'
              label='Post text (2nd)'
              multiline
              rows={4}
              fullWidth
              value={postText2}
              onChange={postText2 => handleNewPostText2(postText2.target.value)}
            />
            <TextField required
              variant='standard'
              type='textarea'
              label='Post text (3rd)'
              multiline
              rows={4}
              fullWidth
              value={postText3}
              onChange={postText3 => handleNewPostText3(postText3.target.value)}
            />
            <TextField required
              variant='outlined'
              type='submit'
              sx={{ width: 'fit-content', marginY: 2 }}
            />
          </Box>
        </form>
      </Container>
    </div>
  );
};
export default AddNewBlogPost;
