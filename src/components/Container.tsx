import { Provider } from './Context';
// import { BlogPosts } from './BlogPosts';
import { BlogPostTypes } from './BlogPostType';
import { useState } from 'react';
import { BlogPosts } from './BlogPosts';

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
  onAddComment: (
    postId: string,
    newName: string,
    newCommentText: string
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

  const handleCommentAdd = (
    postId: string,
    newName: string,
    newCommentText: string
  ) => {
    // setBlogPost(prevPosts =>
    //   prevPosts.map(blogPost => {
    //     if (blogPost.thumbnail.ThumbLink === postId) {
    //       let newId = 0;
    //       if (blogPost.comment?.length === undefined) {
    //         newId = 0;
    //       } else {
    //         newId = blogPost.comment.length;
    //       }
    //       const newComment = {
    //         id: newId + 1,
    //         name: newName,
    //         commentText: newCommentText,
    //       };
    //       // console.log(newComment);
    //       blogPost.comment?.map(comments => {
    //         console.log(comments);
    //         return (
    //          { ...comments,
    //           newComment}
    //         )
    //       });
    //     }

    //     return blogPost;
    //   })
    // );
    setBlogPost(prevBlogPosts => prevBlogPosts.map(blogPost => {
      if(blogPost.thumbnail.ThumbLink === postId) {
        let newId = 0;
          if (blogPost.comments?.length === undefined) {
            newId = 0;
          } else {
            newId = blogPost.comments.length;
          }
          const newComment = {
            id: newId + 1,
            name: newName,
            commentText: newCommentText,
          };
          if (!blogPost.comments) {
            blogPost.comments = [newComment];
          } else {
            blogPost.comments = [...blogPost.comments, newComment];
          }
      }
      return blogPost
    }))  
    
  };

  const appState: AppState = {
    posts: BlogPost,
    onAddNewPost: handleAddBlogPost,
    onAddComment: handleCommentAdd,
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
