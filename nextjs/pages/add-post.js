import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/addPost/thunks';
import { reset } from '../store/addPost/slice';
import { selectAddPost } from '../store/addPost/selector';
import { selectLogin } from '../store/login/selector';
import AddPostForm from '../components/AddPostForm';

const AddPostPage = () => {
  const dispatch = useDispatch();
  const { isLoading, errors } = useSelector(selectAddPost);
  const { isSignedIn } = useSelector(selectLogin);

  const handleAddPost = post => {
    dispatch(addPost(post));
    if (errors === undefined) {
      Router.push('/');
    }
  };

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  return (
    <>
      <Head>
        <title>PHPNews | Add new post</title>
      </Head>
      <section className="outlet outlet--add-post">
        {isSignedIn ? (
          <>
            <h1 className="outlet__title">Add new</h1>
            <AddPostForm
              handleAddPost={handleAddPost}
              errors={errors}
              isLoading={isLoading}
            />
          </>
        ) : (
          <div className="terminal-alert terminal-alert-error">
            You only can add post if logged in.
            <Link href="/login">
              <a className="no-style" title="Login Now">
                Login now
              </a>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

AddPostPage.propTypes = {
  isLoading: PropTypes.bool,
  isSignedIn: PropTypes.bool,
};

export default AddPostPage;
