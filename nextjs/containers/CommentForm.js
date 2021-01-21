import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../store/addComment/thunks';
import { selectProfile } from '../store/profile/selector';
import { getComments } from '../store/getComments/thunks';

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const { profile } = useSelector(selectProfile);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addComment({ postId, content }));
    dispatch(getComments({
      postId,
      page: 1,
    }));
    setContent('');
  };

  const handleContentChange = event => {
    setContent(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group form-group--custom">
        <label htmlFor="content">
          <img
            alt="avatar"
            src="https://ubisoft-avatars.akamaized.net/72202d91-1147-412d-9467-1982778e75dd/default_146_146.png?appId=6ad16abe-8f32-406b-991b-450febe95823"
          />
          <b>{profile && `@${profile.username}`}</b>
        </label>
        <input
          type="text"
          id="content"
          name="content"
          required={true}
          value={content}
          onChange={event => handleContentChange(event)}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary btn-ghost btn--sendcmt"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
