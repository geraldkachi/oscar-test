import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogFeed from './pages/BlogFeed';
import CreateBlogPost from './pages/CreateBlogPost';
import BlogPostDetail from './pages/BlogPostDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogFeed />} />
        <Route index path="/create" element={<CreateBlogPost />} />
        <Route path="/:id" element={<BlogPostDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
