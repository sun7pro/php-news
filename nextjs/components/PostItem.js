import PropTypes from 'prop-types';
import Link from 'next/link';
import { timer } from '../services/timer';

const PostItem = ({ title, username, created_at }) => (
  <div className="terminal-alert post">
    <div className="vote-box">
      <span>↑</span>
      <span>0</span>
      <span>↓</span>
    </div>
    <Link href="/">
      <a className="no-style" title={title} className="title">
        <h3>{title}</h3>
      </a>
    </Link>

    <div className="infor">
      <span className="author">{`@${username}`}</span>
      <span className="time">{timer(new Date(created_at))}</span>
    </div>
  </div>
);

PostItem.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string,
  created_at: PropTypes.string,
};

export default PostItem;
