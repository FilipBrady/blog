import { Container } from "@mui/material"
import { BlogPosts } from "../components/BlogPosts"
import BlogPostThumbnail from "../components/BlogPostThumbnail"
import { useAppContainer } from "../components/Context"

const BlogPostList = () => {
  const { posts } = useAppContainer()
  return (
    <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'baseline',
        }}
      >
        {posts.map(blogPost => (
          <BlogPostThumbnail key={blogPost.id} blogPost={blogPost} />
        ))}
      </Container>
  )
}
export default BlogPostList