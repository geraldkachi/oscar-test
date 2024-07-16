import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogFeed from './pages/BlogFeed';
import CreateBlogPost from './pages/CreateBlogPost';
import BlogPostDetail from './pages/BlogPostDetails';
import Home from './store/Home';
import Session from './store/Session';
import Account from './store/Account';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/sessions' element={<Session />} />
        <Route path='/account' element={<Account />} />
        <Route path="/" element={<BlogFeed />} />
        <Route index path="/create" element={<CreateBlogPost />} />
        <Route path="/:id" element={<BlogPostDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
