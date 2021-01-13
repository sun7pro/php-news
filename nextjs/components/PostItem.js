import PropTypes from 'prop-types';
import Link from 'next/link';
import { timer, showTime } from '../services/timer';
import { toSlug } from '../services/slug';

const PostItem = ({ id, title, username, created_at }) => (
  <div className="terminal-alert post">
    <div className="vote-box">
      <span>↑</span>
      <span>0</span>
      <span>↓</span>
    </div>
    <Link href={`/posts/${toSlug(title) + '-' + id}`}>
      <a className="no-style" title={title} className="title">
        <h3>{title}</h3>
      </a>
    </Link>
    <div className="infor">
      <span className="author">{`@${username}`}</span>
      <span className="time" title={showTime(created_at)}>
        {timer(new Date(created_at))}
      </span>
    </div>
  </div>
);

PostItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string,
  created_at: PropTypes.string,
};

export default PostItem;
