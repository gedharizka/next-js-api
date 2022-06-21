import React from "react";
// import {server} from '../../../config'
import Link from 'next/link';
// import Meta from '../../../components/Meta'
// import { useRouter } from "next/router";


const Article = ({article}) => {
  // const router = useRouter()
  // const {id} = router.query
  console.log(article.id)
  return (
    <>
      {/* <Meta title={article.title} description={article.excerpt}/> */}
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go back</Link>
    </>
  );
}

// ServerSide
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `http://localhost:3004/posts/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:3004/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3004/posts`);
  const article = await res.json();
  const ids = article.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
  


export default Article
