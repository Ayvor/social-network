import React from 'react';
import Avatar from './Avatar/Avatar';
import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let hookMessage = React.createRef();
    debugger;
    let sendMessage = () => {

        let textMessage = hookMessage.current.value;
        props.state.messages.push(textMessage);
    }

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} src={d.avatar} name={d.name} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />);
    // let avatarsElements = props.state.avatars.map(a => <Avatar src={a.avatar} />)

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
                <textarea ref={hookMessage}></textarea>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;