import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getPosts } from '../store/getPosts/thunks';
import { selectGetPosts } from '../store/getPosts/selector';
import PostItem from '../components/PostItem';

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { date, page } = router.query;
  const { isLoading, response } = useSelector(selectGetPosts);

  useEffect(() => {
    getPostByPage({ date, page });
  }, []);

  const getPostByPage = ({ page, date }) => {
    dispatch(
      getPosts({
        date: date || 'all',
        page: page || 1,
      }),
    );
  };

  return (
    <section className="main">
      <>
        <div className="filter-box">
          <Link
            href={{ pathname: '/', query: { ...router.query, date: 'today' } }}
          >
            <a
              title="Sort by date"
              onClick={() => getPostByPage({ date: 'today' })}
              className={date == 'today' ? 'active' : ''}
            >
              Today
            </a>
          </Link>
          |
          <Link
            href={{ pathname: '/', query: { ...router.query, date: 'all' } }}
          >
            <a
              title="Profile"
              className={date !== 'today' ? 'active' : ''}
              onClick={() => getPostByPage({ date: 'all' })}
            >
              All
            </a>
          </Link>
        </div>
        <section>
          {isLoading ? (
            'W a i t i n g . . .'
          ) : (
            <>
              {response && response.posts && (
                <>
                  {response.posts.map(post => (
                    <PostItem
                      key={post.id}
                      title={post.title}
                      username={post.author.username}
                      created_at={post.created_at}
                    />
                  ))}
                  <div className="filter-box pagination">
                    {[...Array(response.page_total)].map((item, index) => (
                      <Link
                        href={{
                          pathname: '/',
                          query: { ...router.query, page: index + 1 },
                        }}
                        key={index}
                      >
                        <a
                          title="Sort by page"
                          className={
                            response.current_page === index + 1 ? 'active' : ''
                          }
                          onClick={() => getPostByPage({ page: index + 1 })}
                        >
                          {index + 1}
                        </a>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </section>
      </>
    </section>
  );
};

Home.propTypes = {
  isLoading: PropTypes.bool,
  response: PropTypes.array,
};

export default Home;
