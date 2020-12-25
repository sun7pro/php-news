import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { selectLogin } from '../store/login/selector';
import { selectProfile } from '../store/profile/selector';
import { getProfile } from '../store/profile/thunks';
import { updateSignedInStatus } from '../store/login/slice';

const Header = () => {
  const dispatch = useDispatch();
  const { isSignedIn } = useSelector(selectLogin);
  const { profile } = useSelector(selectProfile);
  useEffect(() => {
    if (localStorage.getItem('P-IS_SIGNED_IN')) {
      dispatch(updateSignedInStatus(true));
    }
  });

  useEffect(() => {
    dispatch(getProfile());
  }, [isSignedIn]);

  const handleLogout = () => {
    dispatch(updateSignedInStatus(false));
  };

  console.log(profile);
  return (
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
            {(isSignedIn && profile ) && (
              <Link href="/profile">
                <a className="menu-item" title="Profile">
                  {profile.name ? profile.name : `@${profile.username}`}
                </a>
              </Link>
            )}
          </li>
          <li>
            {isSignedIn ? (
              <a className="menu-item" title="Logout" onClick={handleLogout}>
                Logout
              </a>
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
};

export default Header;
