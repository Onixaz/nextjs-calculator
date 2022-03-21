import { NextPage } from 'next'
import React, { useState } from 'react'
import Calculator from '../components/calculator'
import * as Utils from '../styles/utils'

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <Utils.Container>
      <Calculator />
      <Utils.Link href="https://github.com/Onixaz/nextjs-calculator">
        Source code on Github
      </Utils.Link>
    </Utils.Container>
  )
}

export default IndexPage
