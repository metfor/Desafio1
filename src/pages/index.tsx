import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { News } from '../components/News';

const Home: NextPage = () => {
  return (
    <div className="home">
      <Head>
        <title>Codelandia</title>
        <meta name="description" content="codelandia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <News
        title="Agora é oficial:Widows 11 está vindo"
        date="02 de jul, 2021"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque eget imperdiet metus, at vehicula lacus. Vivamus
        lacinia volutpat massa id tempor. Mauris laoreet nisi vel leo semper
        pharetra. Fusce faucibus mauris quis elit imperdiet viverra."
      />
      <News
        title="Agora é oficial:Widows 11 está vindo"
        date="02 de jul, 2021"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque eget imperdiet metus, at vehicula lacus. Vivamus
        lacinia volutpat massa id tempor. Mauris laoreet nisi vel leo semper
        pharetra. Fusce faucibus mauris quis elit imperdiet viverra."
      />
      <News
        title="Agora é oficial:Widows 11 está vindo"
        date="02 de jul, 2021"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque eget imperdiet metus, at vehicula lacus. Vivamus
        lacinia volutpat massa id tempor. Mauris laoreet nisi vel leo semper
        pharetra. Fusce faucibus mauris quis elit imperdiet viverra."
      />
    </div>
  );
};

export default Home;
