import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../utils/validators/validators';
import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map((m) => <Message key={m.id} message={m.message} />);

  let AddNewMessage = (values) => {
    alert(values.newMessageBody);
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={style.dialogs}>
      {/* <div className={style.avatarItems}>
                {avatarsElements}
            </div> */}

      <div className={style.dialogItems}>{dialogsElements}</div>

      <div className={style.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageReduxForm onSubmit={AddNewMessage} />
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength50]}
          component={Textarea}
          name="newMessageBody"
          placeholder="Enter your Message"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;
