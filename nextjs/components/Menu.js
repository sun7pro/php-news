import Link from 'next/link';
import PropTypes from 'prop-types';

const Menu = ({ isLoginSuccess, handleLogout }) => (
  <div className="terminal-nav">
    <div className="terminal-logo">
      <div className="logo terminal-prompt">
        <Link href="/">
          <a className="no-style" title="Logo">
            Dev News
          </a>
        </Link>
      </div>
    </div>
    <nav className="terminal-menu">
      <ul>
        <li>
          <Link href="/add-post">
            <a className="menu-item" title="Add new post">
              Add new
            </a>
          </Link>
        </li>
        <li>
          {isLoginSuccess ? (
            <Link href="/">
              <a className="menu-item" title="Logout" onClick={handleLogout}>
                Logout
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a className="menu-item" title="Login">
                Login
              </a>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  </div>
);

Menu.propTypes = {
  handleLogout: PropTypes.func,
  isLoginSuccess: PropTypes.bool,
};

export default Menu;
