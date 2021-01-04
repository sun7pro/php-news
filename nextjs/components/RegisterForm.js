import PropTypes from 'prop-types';
import Link from 'next/link';

const RegisterForm = ({ isLoading, errors, handleRegister }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const fields = event.target;
    const information = {
      name: fields.name.value,
      email: fields.email.value,
      username: fields.username.value,
      password: fields.password.value,
      password_confirmation: fields.password_confirmation.value,
    };
    handleRegister(information);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required={true}
          minLength="1"
          maxLength="100"
        />
      </div>
      {errors && errors.name && (
        <div className="terminal-alert terminal-alert-error">
          {errors.name.map((mes, index) => (
            <span key={index}>{mes}</span>
          ))}
          <button type="reset" className="btn btn-error">
            Retry
          </button>
        </div>
      )}
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          required={true}
          minLength="1"
          maxLength="50"
        />
      </div>
      {errors && errors.username && (
        <div className="terminal-alert terminal-alert-error">
          {errors.username.map((mes, index) => (
            <span key={index}>{mes}</span>
          ))}
          <button type="reset" className="btn btn-error">
            Retry
          </button>
        </div>
      )}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required={true} />
      </div>
      {errors && errors.email && (
        <div className="terminal-alert terminal-alert-error">
          {errors.email.map((mes, index) => (
            <span key={index}>{mes}</span>
          ))}
          <button type="reset" className="btn btn-error">
            Retry
          </button>
        </div>
      )}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required={true}
          minLength="8"
          maxLength="100"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password_confirmation">Confirm password</label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          required={true}
        />
      </div>
      {errors && errors.password && (
        <div className="terminal-alert terminal-alert-error">
          {errors.password.map((mes, index) => (
            <span key={index}>{mes}</span>
          ))}
          <button type="reset" className="btn btn-error">
            Retry
          </button>
        </div>
      )}
      <div className="form-group">
        <button className="btn btn-default" type="submit">
          {isLoading ? 'Waiting...' : 'Login'}
        </button>
      </div>
      {!isLoading && errors === undefined && (
        <div className="terminal-alert terminal-alert-error">
          Create account successfully.
          <Link href="/login">
            <a className="no-style" title="Signup Now">
              Login Now
            </a>
          </Link>
        </div>
      )}
      <div>
        Already had an account.
        <span> </span>
        <Link href="/login">
          <a className="no-style" title="Signup Now">
            Login Now
          </a>
        </Link>
        .
      </div>
    </form>
  );
};

RegisterForm.propTypes = {
  handleRegister: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default RegisterForm;

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}