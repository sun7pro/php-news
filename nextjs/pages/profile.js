import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Head from 'next/head';
import { selectProfile } from '../store/profile/selector';

const ProfilePage = () => {
  const { profile } = useSelector(selectProfile);

  useEffect(() => {
    if (!profile) {
      Router.push('/');
    }
  });

  return (
    <>
      <Head>
        <title>PHPNews | Profile</title>
      </Head>
      <section className="outlet outlet--login">
        <div className="terminal-card">
          <header>Profile</header>
          {profile && (
            <>
              <figure>
                {profile.avatar && (
                  <img
                    src="#"
                    alt={`@${profile.username}'s avatar`}
                    title={`@${profile.username}'s avatar`}
                  />
                )}
                <figcaption>{`@${profile.username}`}</figcaption>
              </figure>
              <ul>
                <li>{`Name: ${profile.name}`}</li>
                <li>{`Email: ${profile.email}`}</li>
              </ul>
            </>
          )}
        </div>
      </section>
    </>
  );
};

ProfilePage.propTypes = {
  profile: PropTypes.object,
};

export default ProfilePage;
