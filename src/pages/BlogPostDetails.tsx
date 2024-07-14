import { useParams } from 'react-router-dom';
import useBlogStore from '../store/store';
import { Helmet } from 'react-helmet';

const BlogPostDetail = () => {
    const { id } = useParams<{ id: string | undefined }>();
    const { posts } = useBlogStore();
    const post = posts.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className=''>
            <Helmet>
                <title>{post.title}</title>
                <meta name="description" content={post.text.slice(0, 150)} />
            </Helmet>

            <div className='max-w-7xl mx-auto flex flex-col justify-start items-start mt-10'>
                <h1>{post.title}</h1>
                {/* <img src={post.coverPicture} alt={post.title} /> */}
                <p>{post.text}</p>
                <p>{post.author}</p>
                {/* <img src={post.authorPicture} alt={post.author} /> */}
                <p>{post.category}</p>
                <p>{post.date}</p>
            </div>
        </div>
    );
};

export default BlogPostDetail;
