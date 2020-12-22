import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { createStructuredSelector } from 'reselect';
import withReduxSaga from '..';
import { sendLoginResult } from '../redux/login/actions';
import { selectIsLoginSuccess } from '../redux/login/selectors';
import Menu from '../components/Menu';

axios.defaults.withCredentials = true;

const Header = ({ sendLoginResult, isLoginSuccess }) => {
  const getProfile = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/user`)
      .then(() => {
        sendLoginResult({ isLoginSuccess: true });
      })
      .catch(() => sendLoginResult({ isLoginSuccess: false }));
  };

  const handleLogout = () => {
    sendLoginResult({ isLoginSuccess: false });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return <Menu isLoginSuccess={isLoginSuccess} handleLogout={handleLogout} />;
};

Header.propTypes = {
  sendLoginResult: PropTypes.func,
  isLoginSuccess: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isLoginSuccess: selectIsLoginSuccess,
});

const mapDispatchToProps = dispatch => ({
  sendLoginResult: payloads => dispatch(sendLoginResult(payloads)),
});

export default withReduxSaga(
  connect(mapStateToProps, mapDispatchToProps)(Header),
);
