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
    if (isSignedIn) {
      dispatch(getProfile());
    }
  }, [isSignedIn]);

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
            {isSignedIn ? (
              <Link href="/profile">
                <a className="menu-item" title="Profile">
                  {profile ? profile.name : '...'}
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
};

export default Header;
