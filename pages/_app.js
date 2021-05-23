import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AuthProvider } from '../auth/authProvider'
import Fonts from '../components/fonts/fonts'

import Head from 'next/head'


import lightTheme from '../styles/theme'

const theme=extendTheme(lightTheme)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AuthProvider>
      <Head>
            <link rel='shortcut icon' href='/favicon.ico'></link>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta charset="UTF-8" />
            <meta name="description" content="Сајт телевизије Математичке гимнзаије." />
            <meta name="keywords" content="MGTV, MG, TV, МГ, ТВ, Математичка, Гимназија" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="screen-orientation" content="portrait"></meta>

            <meta name="theme-color" content="#AE72CE" />
            <meta name="mobile-web-app-capable" content="yes"></meta>

            <meta name="apple-mobile-web-app-title" content="МГ ТВ" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta>

            <meta name="msapplication-navbutton-color" content="#AE72CE" />
            <meta name="msapplication-TileColor" content="#AE72CE" />
            <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
            <meta name="msapplication-config" content="browserconfig.xml"></meta>

            <meta name="application-name" content="МГ ТВ" />
            <meta name="msapplication-tooltip" content="МГ ТВ" />
            <meta name="msapplication-starturl" content="/articles"></meta>

            <link href="/manifest.json" rel="manifest"></link>

            <link href="/icons/touch-icon-iphone.png" rel="apple-touch-icon" />
            <link href="/icons/touch-icon-ipad.png" rel="apple-touch-icon" sizes="76x76" />
            <link href="/icons/touch-icon-iphone-retina.png" rel="apple-touch-icon" sizes="120x120" />
            <link href="/icons/touch-icon-ipad-retina.png" rel="apple-touch-icon" sizes="152x152" />

            <link href="/icons/touch-icon-start-up-320x480.png" rel="apple-touch-startup-image" />

            <link href="/icons/icon-192x192.png" rel="icon" sizes="192x192" />
            <link href="/icons/icon-128x128.png" rel="icon" sizes="128x128" />

        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp
