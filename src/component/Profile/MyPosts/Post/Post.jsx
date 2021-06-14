import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="imagen/ufo.png" alt=""/>
            {props.message}
            <div>
                <span>Like</span>
                {props.likesCount}
            </div>
        </div>
    );
};

export default Post;
