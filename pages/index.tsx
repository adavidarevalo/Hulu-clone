import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Header } from '../components/Header'
import Nav from '../components/Nav'
import { Results } from '../components/Results'
import { IData } from '../interfaces/IData'
import requests from '../utils/requests'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.gener;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
    .then(res => res.json())
  return {
    props: {
      results: request.results
    }
  }
}

export interface IProps {
  results: IData[]
}

const Home = ({ results }: IProps) => {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Header />
      <Nav />
      <Results results={results} />

    </div>
  )
}


export default Home
