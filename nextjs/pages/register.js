import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { doRegister } from '../store/register/thunks';
import { reset } from '../store/register/slice';
import { selectRegister } from '../store/register/selector';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isLoading, errors } = useSelector(selectRegister);

  const handleRegister = information => {
    dispatch(doRegister(information));
  };

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  return (
    <>
      <Head>
        <title>PHPNews | Register</title>
      </Head>
      <section className="outlet outlet--register">
        <h1 className="outlet__title">Register</h1>
        <RegisterForm
          errors={errors}
          isLoading={isLoading}
          handleRegister={handleRegister}
        />
      </section>
    </>
  );
};

RegisterPage.propTypes = {
  isLoading: PropTypes.bool,
  errors: PropTypes.array,
};

export default RegisterPage;
