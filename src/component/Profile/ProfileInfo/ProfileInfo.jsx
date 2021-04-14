import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.imagen} src="imagen/ocean.jpg" alt="" />
            </div>
            <div className={style.descriptionBlock}>avatar + description</div>
        </div>
    );
};

export default ProfileInfo;
