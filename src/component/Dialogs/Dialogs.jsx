import React from 'react';
import Avatar from './Avatar/Avatar';
import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/state'


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} src={d.avatar} name={d.name} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);
    // let avatarsElements = props.state.avatars.map(a => <Avatar src={a.avatar} />)

    let newMessage = React.createRef();

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }



    return (
        <div className={style.dialogs}>
            {/* <div className={style.avatarItems}>
                {avatarsElements}
            </div> */}

            <div className={style.dialogItems}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange} value={props.newMessageText} ref={newMessage}></textarea>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;