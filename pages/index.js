import Head from 'next/head'
import ArticleList from '../components/ArticleList'


export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keyword' content='web development, programming' />
      </Head>
      
      <ArticleList  articles={articles}/>
      
    </div>
  )
}

export const getStaticProps = async ()=>{
  const res = await fetch (`http://localhost:3004/posts?_limit=6`)
  const articles = await res.json()

  return {
    props :{
      articles
    }
  }
}
