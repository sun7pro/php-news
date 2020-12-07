import Head from 'next/head';
// import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev News | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container">
        <div className="terminal-nav">
          <div className="terminal-logo">
            <div className="logo terminal-prompt">
              <a href="/" className="no-style">
                Dev News
              </a>
            </div>
          </div>
          <nav className="terminal-menu">
            <ul>
              <li>
                <a className="menu-item" href="#">
                  Add new
                </a>
              </li>
              <li>
                <a className="menu-item" href="#">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <section className="main">
          <div className="terminal-alert terminal-alert-primary">WIP...</div>
          <figure>
            <img src="https://http.cat/102.jpg" />
          </figure>
          <div className="progress-bar progress-bar-show-percent">
            <div
              className="progress-bar-filled"
              style={{ width: '5%' }}
              data-filled="Loading 5%"
            ></div>
          </div>
        </section>
        <footer>
          <hr />
          <small>
            Built with <u>PHP</u> ❤️ <u>JavaScript</u> and <u> Terminal CSS</u>
          </small>
        </footer>
      </main>
    </>
  );
}
