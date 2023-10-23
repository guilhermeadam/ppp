import GlobalStyles from './styles/global';

import Layout from './components/Layout';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header />
        <h1>Menu</h1>
        <h1>Content</h1>
      </Layout>
    </>
  );
}
