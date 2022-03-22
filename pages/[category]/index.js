import client from '../../lib/sanity';
import groq from 'groq';
import Link from 'next/link';
import Head from 'next/head';


const Categories = ({blogs}) => {

  return ( 
    <>
  <Head>
  <title>{blogs[0].title}</title>
      <meta name="description" content={blogs[0].description} />
      <meta property="og:title" content={blogs[0].title} />
  </Head>

{blogs && blogs.map((blog)=>
<>
  <h1 className='text-center'>All Posts in {`${blog.title}`} </h1>
  <p>{`${blog.description}`}</p>
  {blog.posts && blog.posts.map(
    (post)=>(
      <Link key={post._id} href={`${blog.slug}/${post.slug}`}>
        <a>
      <div className='text-center m-5 lead'>
        <ul>
      <li>
        <h4>{post.title}</h4>
        <p>{post.publishedAt}</p>
        </li>
      </ul></div></a>
      </Link>
    )
  )}</>
)}

    </>
   );
}
 


export async function getStaticPaths() {
const categoryparams=groq`*[_type=="category"].slug.current`
const categoryparam = await client.fetch(categoryparams)
    const paths = categoryparam.map((category) => ({
        params: { category: category },
      }))
    return { paths, fallback: false }
  }
  



const qury123=groq`*[_type=="category" && slug.current==$category]{
    _id,
    title,
    description,
    "slug":slug.current,
    "posts": *[_type == "post" && references(^._id)]{
    "slug":slug.current,
    title,
    publishedAt
  }
  }`


export async function getStaticProps(context) {
    const { category = "" } = context.params

  const blogs = await client.fetch(qury123, {category})


  return {
    props: {
        blogs
    }
  }
}

export default Categories;