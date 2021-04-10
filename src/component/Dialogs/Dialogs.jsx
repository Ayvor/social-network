import React from 'react';
import Avatar from './Avatar/Avatar';
import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/state'


const Dialogs = (props) => {
    // let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} src={d.avatar} name={d.name} />);

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange}
                            value={newMessageBody}
                            // ref={newMessage}
                            placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;