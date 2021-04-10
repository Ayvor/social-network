import { NavLink } from 'react-router-dom';
import style from './DialogsItem.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog}>
            {/* <div className={style.avatar}>
                <img src={props.src} alt='avatar' />
            </div> */}
            <div className={style.name}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;