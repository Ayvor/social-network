import Preloader from "../../Common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    return (
        <div>
            <div>
                <img className={style.imagen} src="imagen/ocean.jpg" alt="" />
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" />
                avatar + description
            </div>
        </div>
    );
};

export default ProfileInfo;
