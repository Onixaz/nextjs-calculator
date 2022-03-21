import { AppProps } from 'next/app'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/main'

interface CustomAppProps extends AppProps {}

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default CustomApp
