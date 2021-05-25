import { NextPage } from 'next'
import React, { useState } from 'react'
import ReactFCCtest from 'react-fcctest'
import Preview from '../components/Preview'
import Editor from '../components/Editor'
import * as Utils from '../styles/utils'
import placeholder from '../utils/placeholder'

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  const [markdown, setMarkdown] = useState<string>(placeholder)

  return (
    <Utils.Container>
      <ReactFCCtest />

      <Utils.Grid>
        <Utils.Wrapper>
          <Editor setMarkdown={setMarkdown} />
        </Utils.Wrapper>
        <Utils.Wrapper>
          <Preview markdown={markdown} />
        </Utils.Wrapper>
      </Utils.Grid>
    </Utils.Container>
  )
}

export default IndexPage
