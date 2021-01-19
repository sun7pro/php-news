import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { timer, showTime } from '../services/timer';
import { toSlug } from '../services/slug';
import { doVotes } from '../store/votes/thunks';

const PostItem = ({
  id,
  title,
  username,
  created_at,
  votes,
  getPostByPage,
  comment_quantity,
}) => {
  const router = useRouter();
  const { date, page } = router.query;
  const dispatch = useDispatch();

  const handleVote = information => {
    dispatch(doVotes(information));
    getPostByPage({ date, page });
  };

  return (
    <div className="terminal-alert post">
      <div className="vote-box">
        <span
          className={votes == 1 ? 'disable' : ''}
          onClick={() => handleVote({ postId: id, upvote: true })}
        >
          ↑
        </span>
        <span>{votes}</span>
        <span
          className={votes == -1 ? 'disable' : ''}
          onClick={() => handleVote({ postId: id, upvote: false })}
        >
          ↓
        </span>
      </div>
      <Link href={`/posts/${toSlug(title) + '-' + id}`}>
        <a className="no-style" title={title} className="title">
          <h3>{title}</h3>
        </a>
      </Link>
      <small className="comment">
        <img
          className="comment__img"
          src="https://cdn.iconscout.com/icon/free/png-256/comment-2551199-2136583.png"
        />
        {comment_quantity == 0 ? 'No comment.' : `${comment_quantity}`}
      </small>
      <div className="infor">
        <span className="author">{`@${username}`}</span>
        <span className="time" title={showTime(created_at)}>
          {timer(new Date(created_at))}
        </span>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string,
  created_at: PropTypes.string,
  comment_quantity: PropTypes.number,
};

export default PostItem;
