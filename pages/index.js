import Head from 'next/head'
import Header from './../components/Header'
import Footer from './../components/Footer'
import Navbar from './../components/Navbar'
import Results from './../components/Results'
import request from '../util/request'

export default function Home({ results }) {
  
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix clone using React.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Results results={results}/>
      <Footer />
    </>
  )
}


export async function getServerSideProps(context){
  const genre = context.query.genre;

  const requests = await fetch(`https://api.themoviedb.org/3${
    request[genre]?.url || request.fetchTrending.url}`)
    .then( res => res.json());
 
  return {
    props: {
      results: requests.results
    }
  }

}