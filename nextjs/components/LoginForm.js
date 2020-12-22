import PropTypes from 'prop-types';

const LoginForm = ({ doLogin, isLoading, message }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const fields = event.target;
    doLogin({
      usernameOrEmail: fields.usernameOrEmail.value,
      password: fields.password.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="usernameOrEmail">Username/Email</label>
        <input
          id="usernameOrEmail"
          name="usernameOrEmail"
          type="text"
          required={true}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required={true} />
      </div>
      <div className="form-group">
        <button className="btn btn-default" type="submit" disabled={isLoading}>
          {isLoading ? 'Waiting...' : 'Login'}
        </button>
      </div>
      {message && (
        <div className="terminal-alert terminal-alert-error">
          {message}
          <button type="reset" className="btn btn-error">
            Retry
          </button>
        </div>
      )}
    </form>
  );
};

LoginForm.propTypes = {
  doLogin: PropTypes.func,
  isLoading: PropTypes.bool,
  message: PropTypes.string,
};

export default LoginForm;
