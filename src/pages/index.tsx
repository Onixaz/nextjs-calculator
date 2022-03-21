import { NextPage } from 'next'
import React, { useState } from 'react'
import Calculator from '../components/calculator'
import * as Utils from '../styles/utils'

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <Utils.Container>
      <Calculator />
    </Utils.Container>
  )
}

export default IndexPage
