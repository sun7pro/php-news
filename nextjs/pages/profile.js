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
        {/* <h1 className="outlet__title">Profile: { profile ? profile.name : 'NOPE' }</h1> */}
        <div className="terminal-card">
          <header>Profile</header>
          {
            profile && (
              <figure>
                { profile.avatar && <img src="#" alt={`@${profile.username}'s avatar`} title={`@${profile.username}'s avatar`} width="150px" /> }
                <figcaption>{ `@${profile.username}` }</figcaption>
              </figure>
            )
          }
          <ul>
            {
              profile && (
                Object.entries(profile).map(([key,value])=>{
                  switch(key) {
                    case 'id', 'avatar':
                      break;
                    default:
                      return (<li>{key.charAt(0).toUpperCase() + key.slice(1)}: { value && value }</li>);
                  }
                })
              )
            }
          </ul>
        </div>
      </section>
    </>
  );
};

ProfilePage.propTypes = {
  profile: PropTypes.object,
};

export default ProfilePage;
