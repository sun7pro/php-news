import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Router from 'next/router';
import withReduxSaga from '..';
import LoginForm from '../components/LoginForm';
import { doLogin } from '../redux/login/actions';
import {
  selectIsLoginSuccess,
  selectMessage,
  selectIsLoading,
} from '../redux/login/selectors';

const Login = props => {
  const { isLoginSuccess } = props;
  useEffect(() => {
    if (isLoginSuccess) {
      Router.push('/');
    }
  }, [isLoginSuccess]);

  return (
    <section className="outlet outlet--login">
      <h1 className="outlet__title">Login</h1>
      <LoginForm {...props} />
    </section>
  );
};

Login.propTypes = {
  doLogin: PropTypes.func,
  isLoading: PropTypes.bool,
  isLoginSuccess: PropTypes.bool,
  message: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  isLoginSuccess: selectIsLoginSuccess,
  message: selectMessage,
});

const mapDispatchToProps = dispatch => ({
  doLogin: payloads => dispatch(doLogin(payloads)),
});

export default withReduxSaga(
  connect(mapStateToProps, mapDispatchToProps)(Login),
);
