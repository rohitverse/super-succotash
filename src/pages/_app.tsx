import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>Solana Token Creator</title>
          </Head>

          <ContextProvider>
            <div className="flex flex-col justify-between">
              <Notifications />
              <AppBar/>
              {/* <ContentContainer> */}
                <Component {...pageProps} />
                <Footer/>
              {/* </ContentContainer> */}
            </div>
          </ContextProvider>
        </>
    );
};

export default App;
