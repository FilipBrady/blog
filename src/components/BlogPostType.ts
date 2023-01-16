export type BlogPostType = {
  id: number;
  thumbnail: {
    photo: string;
    ThumbHeading: string;
    ThumbDescription: string;
    ThumbLink: string;
  };
  blogPost: {
    postHeading: string;
    postText1: string;
    postPhoto1: string;
    postPhotoDescription1: string;
    postText2: string;
    postText3: string;
    comment?:[
      {name: string,
      commentText: string}
    ]
  };
};

export type BlogPostTypes = BlogPostType[];
