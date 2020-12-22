import Head from 'next/head';
import Footer from './Footer';
import Header from '../containers/Header';

const Layout = ({ children }) => (
  <>
    <main className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>PHPNews</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </main>
  </>
);

export default Layout;
