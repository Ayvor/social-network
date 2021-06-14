import Preloader from '../../Common/Preloader/Preloader';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div>
                <img className={style.imagen} src="imagen/ocean.jpg" alt="" />
            </div> */}
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
