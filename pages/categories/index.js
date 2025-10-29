import groq from 'groq';
import Link from 'next/link';
import Head from 'next/head';
import client from '../../lib/sanity'
import styles from "../../styles/Home.module.css"


const Categories=({data}) =>{
  return ( 
    <>

  <h1 className='text-5xl font-bold text-gray-500 p-5 text-center'>All Categories</h1>
 
  {/* <div className='flex flex-col justify-center items-center'>
{data && data.map((blog)=>(
<li className='bg-backgroundimage dark:bg-imagedark rounded shadow-2xl hover:border hover:shadow-inner m-5 h-32 w-10/12 sm:h-48 text-center flex flex-col justify-center' key={`${blog._id}`}>
<Link href={`/${blog.slug.current}`}>
  <a className='flex flex-col justify-center items-center'>

  <span className='text-center font-bold'>{`${blog.title}`} </span>
  <span className='block text-sm'>{`${blog.description}`}</span></a>
</Link>
 </li>) 
)}</div> */}
<div className='flex flex-col justify-center items-center text-center'>
          <ul className={styles.recentul}>
        {data.length > 0 && data.map(
          (blog) =>
            blog.slug.current && (
              <li className={styles.recentli} key={blog._id}>
                <p className={styles.recentpara}>
                <Link href={`/${blog.slug.current}`}>
                  <a className={styles.recentanch}>{blog.title}</a>
                </Link>{' '}
                <span className={styles.recentcat}>{blog.description}</span>
                </p>
              </li>
            )
        )}
        </ul>
</div>


    </>
   );
}
const categoryquery=groq` *[_type == "category" ]{
  _id,
  title,
  description,
  slug
}`
 export async function getStaticProps() {
   // It's important to default the slug so that it doesn't return "undefined"
 
   const data=await client.fetch(categoryquery)
    
   return {
     props: {
       data,
     }
   }
 }

export default Categories;