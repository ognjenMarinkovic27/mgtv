import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Fonts from '../components/fonts/fonts'


import lightTheme from '../styles/theme'

const theme=extendTheme(lightTheme)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
