import style from './Post.module.css'

const Post = () => {
    return (
        <div className={style.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjxYIC3-K6IAvPxECaVcLfh3JqU9lpkhHAw&usqp=CAU" alt="" />
            Post
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;