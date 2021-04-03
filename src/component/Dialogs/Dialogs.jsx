import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    );
}



const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem id='1' name='Ivan' />
                <DialogItem id='2' name='Vladislav' />
                <DialogItem id='3' name='Baurjan' />
            </div>

            <div className={style.messages}>
                <Message message='Hello' />
                <Message message='How are you?' />
                <Message message='Yo' />
                <Message message='Yo' />
            </div>
        </div>
    );
}

export default Dialogs;