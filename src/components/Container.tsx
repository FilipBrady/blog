import { Provider } from './Context';
// import { BlogPosts } from './BlogPosts';
import { BlogPostTypes } from './BlogPostType';
import { useState } from 'react';
import  { BlogPosts }  from './BlogPosts'

export type AppState = {
  posts: BlogPostTypes;
  onAddNewPost: (
    photo: string,
    ThumbHeading: string,
    ThumbDescription: string,
    ThumbLink: string,
    postHeading: string,
    postText1: string,
    postPhoto1: string,
    postPhotoDescription1: string,
    postText2: string,
    postText3: string
  ) => void;
};

type Props = {
  children: (props: AppState) => JSX.Element;
};
const Container = ({ children }: Props) => {
  const [BlogPost, setBlogPost] = useState<BlogPostTypes>(BlogPosts);

  const handleAddBlogPost = (
    photo: string,
    ThumbHeading: string,
    ThumbDescription: string,
    ThumbLink: string,
    postHeading: string,
    postText1: string,
    postPhoto1: string,
    postPhotoDescription1: string,
    postText2: string,
    postText3: string
  ) => {
    setBlogPost(prevBlogPosts => [
      ...prevBlogPosts,
      {
        id: Math.max(prevBlogPosts.length + 1),
        thumbnail: {
          photo,
          ThumbHeading,
          ThumbDescription,
          ThumbLink,
        },
        blogPost: {
          postHeading,
          postText1,
          postPhoto1,
          postPhotoDescription1,
          postText2,
          postText3,
        },
      },
    ]);
  };

  const appState: AppState = {
    posts: BlogPost,
    onAddNewPost: handleAddBlogPost,
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
