import Head from 'next/head'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Personal Metrics Tracker</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
