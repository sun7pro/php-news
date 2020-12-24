import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Head from 'next/head';
import LoginForm from '../components/LoginForm';
import { doLogin } from '../store/login/thunks';
import { selectLogin } from '../store/login/selector';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { isLoading, isSignedIn, message } = useSelector(selectLogin);

  const handleLogin = credential => {
    dispatch(doLogin(credential));
  };

  useEffect(() => {
    if (isSignedIn) {
      Router.push('/');
    }
  }, [isSignedIn]);

  return (
    <>
      <Head>
        <title>PHPNews | Login</title>
      </Head>
      <section className="outlet outlet--login">
        <h1 className="outlet__title">Login</h1>
        <LoginForm
          handleLogin={credential => handleLogin(credential)}
          isLoading={isLoading}
          message={message}
        />
      </section>
    </>
  );
};

LoginPage.propTypes = {
  isLoading: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  message: PropTypes.string,
};

export default LoginPage;
