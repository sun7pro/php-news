import Head from 'next/head';
import Footer from './Footer';
import Header from '../containers/Header';

const Layout = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>PHPNews | Home</title>
    </Head>
    <main className="container">
      <Header />
      {children}
      <Footer />
    </main>
  </>
);

export default Layout;
