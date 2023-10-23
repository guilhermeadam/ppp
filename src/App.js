import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Layout from './components/Layout';
import Header from './components/Header';
import Menu from './components/Menu';
import Router from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Header />
        <Menu />
        <Router />
      </Layout>
    </BrowserRouter>
  );
}
