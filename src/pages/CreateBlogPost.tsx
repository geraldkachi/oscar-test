import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import useBlogStore from '../store/store';

const CreateBlogPost = () => {

  const { addPost } = useBlogStore();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState<'World News' | 'Business' | 'Entertainment' | 'Sports'>('World News');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    // Fetch a random profile picture
    // const profilePicture = await axios.get('https://randomuser.me/api/').then((res) => res.data.results[0].picture.thumbnail);

    // Generate random ID and date
    const id = Math.floor(Math.random() * 1000000);
    const date = new Date().toISOString();

    // Create new post
    const newPost = {
      id,
      title,
      coverPicture: 'https://source.unsplash.com/random/800x600',
      text,
      author,
    //   authorPicture: profilePicture,
      category,
      date,
    };

    // Add post to store
    addPost(newPost);

    // Redirect to blog feed
    navigate('/');
  };

  return (
    <div className='flex flex-col justify-between items-center'>
      <h1 className='py-10'>Create Blog Post</h1>
      <form className='flex flex-col gap-5 justify-between items-center' onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Text:
          <textarea value={text} onChange={(e) => setText(e.target.value)} required />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value as 'World News' | 'Business' | 'Entertainment' | 'Sports')} required>
            <option value="World News">World News</option>
            <option value="Business">Business</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sports">Sports</option>
          </select>
        </label>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreateBlogPost;
