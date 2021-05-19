import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AuthProvider } from '../auth/authProvider'
import Fonts from '../components/fonts/fonts'


import lightTheme from '../styles/theme'

const theme=extendTheme(lightTheme)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp
