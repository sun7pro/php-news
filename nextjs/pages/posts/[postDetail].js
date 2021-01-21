import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { doGetAPost } from '../../store/getAPost/thunks';
import { getComments } from '../../store/getComments/thunks';
import { doVotes } from '../../store/votes/thunks';
import { selectGetAPost } from '../../store/getAPost/selector';
import { selectGetComments } from '../../store/getComments/selector';
import { timer, showTime } from '../../services/timer';
import CommentForm from '../../containers/CommentForm';
import CommentList from '../../containers/CommentList';

const PostDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { postDetail, page } = router.query;
  const postId =
    postDetail &&
    postDetail
      .toString()
      .split('-')
      .slice(-1)
      .pop();
  const { post } = useSelector(selectGetAPost);
  const { currentPage, pageTotal } = useSelector(selectGetComments);

  useEffect(() => {
    dispatch(doGetAPost(postId));
    dispatch(
      getComments({
        postId,
        page: page || 1,
      }),
    );
  }, [router.query]);

  const handleVote = information => {
    dispatch(doVotes(information));
    dispatch(doGetAPost(postId));
  };

  return (
    <>
      <Head>
        <title>PHPNews | {post ? post.title : 'Post detail'} </title>
      </Head>
      <section className="outlet outlet--login">
        <div className="terminal-alert post">
          {post ? (
            <>
              <div className="vote-box">
                <span
                  className={post.votes == 1 ? 'disable' : ''}
                  onClick={() => handleVote({ postId, upvote: true })}
                >
                  ↑
                </span>
                <span>{post.votes}</span>
                <span
                  className={post.votes == -1 ? 'disable' : ''}
                  onClick={() => handleVote({ postId, upvote: false })}
                >
                  ↓
                </span>
              </div>
              <div className="title">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
              <div className="infor">
                <span className="author">{`@${post.author &&
                  post.author.username}`}</span>
                <span className="time" title={showTime(post.created_at)}>
                  {timer(new Date(post.created_at))}
                </span>
              </div>
            </>
          ) : (
            <p>
              The record doesn't exist.
              <Link href="/">
                <a className="no-style" title="View post list">
                  View post list.
                </a>
              </Link>
            </p>
          )}
        </div>
        {post && (
          <>
            <CommentForm postId={post.id} />
            <CommentList />
            <div className="filter-box pagination">
              {[...Array(pageTotal)].map((item, index) => (
                <Link
                  href={{
                    pathname: `/posts/${postDetail}`,
                    query: {page: index + 1 }
                  }}
                  key={index}
                >
                  <a
                    title="Sort by page"
                    className={currentPage === index + 1 ? 'active' : ''}
                    onClick={() =>
                      dispatch(
                        getComments({ page: index + 1, postId: post.id }),
                      )
                    }
                  >
                    {index + 1}
                  </a>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default PostDetail;
