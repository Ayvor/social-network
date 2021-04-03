import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            My Post
            <div>
                New Post
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message='Hi, how are you?' countLike='5' />
                <Post message='I am fine' countLike='10' />
            </div>
        </div>
    );
}

export default MyPosts;