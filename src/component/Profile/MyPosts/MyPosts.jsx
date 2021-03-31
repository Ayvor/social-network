import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My Post
            <div>
                New Post
            </div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;