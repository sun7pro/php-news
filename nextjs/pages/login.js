import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Login() {

  const [user, setUser] = useState(null);

  const fetchUser = () => {
    axios
      .get(`${ process.env.NEXT_PUBLIC_API_BASE_URL }/api/v1/user`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.target;

    await axios.get(`${ process.env.NEXT_PUBLIC_API_BASE_URL }/sanctum/csrf-cookie`);

    axios
      .post(`${ process.env.NEXT_PUBLIC_API_BASE_URL }/login`, {
        usernameOrEmail: form.usernameOrEmail.value,
        password: form.password.value,
      })
      .then(response => {
        console.log('2nd axios: ', response);
        if (response.data.isLoginSuccess) {
          fetchUser();
        }
      });
  };

  return (
    <>
      <Head>
        <title>Dev News | Login</title>
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
                <a className="menu-item" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <section className="main">
          {user ? (
            <div className="terminal-alert terminal-alert-primary">
              Hello {user.name}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="usernameOrEmail">Username/Email</label>
                <input id="usernameOrEmail" name="usernameOrEmail" type="text" required="" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-default"
                  type="submit"
                  role="button"
                  name="submit"
                  id="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
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
