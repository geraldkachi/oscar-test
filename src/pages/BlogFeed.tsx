import { useState } from 'react';
import useBlogStore from '../store/store';
import { Link, useNavigate } from 'react-router-dom';

const BlogFeed = () => {
  const navigate = useNavigate();
  const { posts, deletePost } = useBlogStore();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filter, setFilter] = useState({ category: '', author: '' });

  const sortedPosts = [...posts].sort((a, b) =>
    sortOrder === 'asc' ? new Date(a.date).getTime() - new Date(b.date).getTime() : new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredPosts = sortedPosts.filter((post) => {
    return (
      (filter.category ? post.category === filter.category : true) &&
      (filter.author ? post.author.toLowerCase().includes(filter.author.toLowerCase()) : true)
    );
  });

  return (
    <div className='flex flex-col justify-between items-center'>
      <h1>Blog Feed</h1>
      <div className='flex gap-5 justify-between items-center'>
        <label>
          Sort by date:
          <select onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}>
            <option value="asc">Oldest to Newest</option>
            <option value="desc">Newest to Oldest</option>
          </select>
        </label>
        <label>
          Filter by category:
          <select onChange={(e) => setFilter({ ...filter, category: e.target.value })}>
            <option value="">All</option>
            <option value="World News">World News</option>
            <option value="Business">Business</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sports">Sports</option>
          </select>
        </label>
        <label>
          Filter by author:
          <input type="text" onChange={(e) => setFilter({ ...filter, author: e.target.value })} />
        </label>
      </div>
      <div className='flex flex-col gap-10 items-start my-10'>
        {filteredPosts.length == 0 ?
        <div className='flex items-center flex-col gap-10'>
            <h1>No Post yet.  Create a Post 👇🏾</h1>
          <button onClick={() => navigate('/create')}>Create A Blog</button>
        </div>
          :
        filteredPosts.map((post) => (
          <div className='flex gap-10 items-center' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <p>{post.author}</p>
            <Link to={`/${post.id}`}>View Post</Link>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>


    
    </div>
  );
};

export default BlogFeed;
