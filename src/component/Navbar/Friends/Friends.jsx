import style from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={style.friendsBlock}>
            <img src={props.src} alt='' />
            <div>
                {props.name}
            </div>
        </div>
    );
}
export default Friends;