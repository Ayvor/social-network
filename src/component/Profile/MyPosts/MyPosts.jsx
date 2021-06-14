import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postsBlock}>
      My Post
      <div>New Post</div>
      <div>
        {/* <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div> */}
        <AddNewPostReduxForm onSubmit={onAddPost} />
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'Post message'}
          component={Textarea}
          name="newPostText"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;
