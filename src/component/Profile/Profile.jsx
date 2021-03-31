import MyPosts from './MyPosts/Posts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.app_content}>
            <div>
                <img src="https://i.pinimg.com/originals/97/96/1a/97961abf255939389c57eec3da4aed44.jpg" alt="" />
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;