import { Route, Routes } from 'react-router-dom';
import AddNewBlogPost from '../pages/AddNewBlogPost';
import BlogMainSite from '../pages/BlogMainSite';
import BlogPost from '../pages/BlogPost';
import BlogPostList from '../pages/BlogPostList';
import Contact from '../pages/Contact';
import { route } from './routes/routes';

const RouterComponent = () => {
  return (
    <div>
      <Routes>
        <Route path={route.home} element={<BlogMainSite />} />
        {/* <Route path={`${route.post}`} element={<BlogPost />} /> */}
        <Route path={`${route.post}`} element={<BlogPostList />} />
        <Route path={`${route.contact}`} element={<Contact />} />
        <Route path={`${route.post}/:id`} element={<BlogPost />} />
        <Route path={route.addBlogPost} element={<AddNewBlogPost />} />
      </Routes>
    </div>
  );
};
export default RouterComponent;
