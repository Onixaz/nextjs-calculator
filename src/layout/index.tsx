import React, { useState, FC } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import * as LayoutStyles from './styled'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const baseInfo = {
  author: 'Paju',
  titlePrefix: 'Paju Studios',
  name: 'pajustudios.eu',
  url: 'https://wwww.pajustudios.eu',
  description: 'Eu design studios',
  keywords: `Design, Web Development`,
}

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={baseInfo.description} />
        <meta property="og:url" content={baseInfo.url} />
        <meta property="og:site_name" content={baseInfo.name} />
        <meta name="author" content={baseInfo.author} />
        <meta name="keywords" content={baseInfo.keywords} />
      </Head>
      <LayoutStyles.Layout>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <main>{children}</main>

        <Footer />
      </LayoutStyles.Layout>
    </>
  )
}

export default Layout
