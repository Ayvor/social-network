import style from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            My Post
            <div>
                New Post
            </div>
            <div>
                <div className={style.item}>
                    Post 1
                </div>
                <div className={style.item}>
                    Post 2
                </div>
            </div>
        </div>
    );
}

export default MyPosts;