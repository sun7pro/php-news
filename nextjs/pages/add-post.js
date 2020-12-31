import Head from 'next/head';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/addPost/thunks';
import { reset } from '../store/addPost/slice';
import { selectAddPost } from '../store/addPost/selector';
import AddPostForm from '../components/AddPostForm';

const AddPostPage = () => {

  const dispatch = useDispatch();
  const { isLoading, errors } = useSelector(selectAddPost);

  const handleAddPost = post => {
    dispatch(addPost(post));
  };

  useEffect(() => {
    if (!isLoading && errors === undefined) {
      Router.push('/');
    }
  });

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
        <h1 className="outlet__title">Add new</h1>
        <AddPostForm
          handleAddPost={handleAddPost}
          errors={errors}
          isLoading={isLoading}
        />
      </section>
    </>
  );
};

AddPostPage.propTypes = {
  isLoading: PropTypes.bool,
};

export default AddPostPage;
