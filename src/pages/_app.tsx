import { AppProps } from 'next/app'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import GlobalStyle from '../styles/main'
import Layout from '../layout'

//node-fetch self signed cert fix for getStaticProps
//https://stackoverflow.com/questions/10888610/ignore-invalid-self-signed-ssl-certificate-in-node-js-with-https-request/21961005#21961005
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

interface CustomAppProps extends AppProps {}

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ fetcher: (url: string) => fetch(url).then((r) => r.json()) }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default CustomApp
