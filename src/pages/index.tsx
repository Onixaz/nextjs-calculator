import { NextPage } from 'next'
import React from 'react'

interface IndexPageProps {
  data: any
}

const IndexPage: NextPage<IndexPageProps> = ({ data }) => {
  return (
    <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      Starter
    </h1>
  )
}

export default IndexPage

export async function getStaticProps() {
  const res = await fetch(`https://api.github.com/users/Onixaz/repos`)
  const data = await res.json()

  return {
    props: { data },
    revalidate: 60,
  }
}
