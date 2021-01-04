import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import store from '../store';
import '../styles/index.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
