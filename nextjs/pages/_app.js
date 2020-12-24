import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import store from '../store';
import 'terminal.css/dist/terminal.css';

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
