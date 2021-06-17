import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createField, Input } from '../Common/FormsControls/FormsControls';
import { required } from '../utils/validators/validators';
import { login, logout } from '../../Redux/auth-reducer';
import { Redirect } from 'react-router';

import style from '../Common/FormsControls/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required], Input)}
      {/* <Field validate={[required]} placeholder="Email" name="email" component={Input} /> */}

      {createField('Password', 'password', [required], Input, { type: 'password' })}
      {/* <Field
          validate={[required]}
          placeholder="Password"
          name="password"
          component={Input}
          type={'password'}
        /> */}

      {createField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}
      {/* <Field validate={[required]} type={'checkbox'} name="rememberMe" component="Input" />{' '}
        remember me */}
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
