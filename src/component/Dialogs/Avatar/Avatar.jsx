import style from './Avatar.module.css';

const Avatar = (props) => {
    return (
        <div className={style.avatar}>
            <img src={props.src} alt='avatar' />
        </div>
    );
}

export default Avatar;