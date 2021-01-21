import { selectGetComments } from '../store/getComments/selector';
import { useSelector } from 'react-redux';
import { timer, showTime } from '../services/timer';

const CommentList = () => {
  const { comments } = useSelector(selectGetComments);
  return (
    <div>
      {comments.map(comment => (
        <div className="form-group form-group--custom" key={comment.id}>
          <label htmlFor="content">
            <img
              alt="avatar"
              src="https://ubisoft-avatars.akamaized.net/72202d91-1147-412d-9467-1982778e75dd/default_146_146.png?appId=6ad16abe-8f32-406b-991b-450febe95823"
            />
            <b>@{comment.author.username}</b>
          </label>
          <p className="comment-content">
            {comment.content}
            <small className="time" title={showTime(comment.created_at)}>
              {timer(new Date(comment.created_at))}
            </small>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
