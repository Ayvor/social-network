import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjxYIC3-K6IAvPxECaVcLfh3JqU9lpkhHAw&usqp=CAU" alt="" />

            {props.message}

            <div>
                <span>Like {props.countLike}</span>
            </div>
        </div>
    );
}

export default Post;