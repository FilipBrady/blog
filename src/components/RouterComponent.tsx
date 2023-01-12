import { Route, Routes } from 'react-router-dom';
import BlogMainSite from '../pages/BlogMainSite';
import BlogPost from '../pages/BlogPost';
import { route } from './routes/routes';

const RouterComponent = () => {
  return (
    <div>
      <Routes>
        <Route path={route.home} element={<BlogMainSite />} />
        <Route path={`${route.post}`} element={<BlogPost />} />
      </Routes>
    </div>
  );
};
export default RouterComponent;
