import Preloader from '../../Common/Preloader/Preloader';
import style from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large} alt="" />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
