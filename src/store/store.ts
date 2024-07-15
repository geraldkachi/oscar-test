import create from 'zustand';

type BlogPost = {
  id: number;
  title: string;
  coverPicture: string;
  text: string;
  author: string;
  // authorPicture: string;
  category: 'World News' | 'Business' | 'Entertainment' | 'Sports';
  date: string;
};

type State = {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  deletePost: (id: number) => void;
};

const useBlogStore = create<State>((set) => ({
  posts: [],
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  deletePost: (id) => set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
}));

export default useBlogStore;
