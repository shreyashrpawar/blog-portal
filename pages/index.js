import styles from "../styles/Home.module.css"
import Link from 'next/link'
import groq from 'groq'
import client from '../lib/sanity'
import Head from 'next/head';
import Adsense from './_adsense';


const Home = ({posts}) => {


    return ( <>
      <Head>
      <title>Greedytaker learning to code</title>
<meta name="description" content="The best platform to learn and solve queries of web developement"/>
<meta name="keywords" content="HTML, CSS, Javascipt"/>
      </Head>
        <main className={styles.Homemain}>
        <div className={styles.Homediv}>
        <div className={styles.Homediv1}>
<section>
    <h1>Web development docs <br/> by WebDocs</h1>
    <p>Learning the web development technologies from scratch.</p>
</section>
        </div>
        </div>
<Adsense/>
        <section className={styles.latestpost}>
          <h2>
            Recent posts
          </h2>
       
          <ul className={styles.recentul}>
        {posts.length > 0 && posts.map(
          (post) =>
            post.slug && (
              <li className={styles.recentli} key={post._id}>
                <p className={styles.recentpara}>
                <Link href="/[Category]/[slug]" as={`/${post.categories}/${post.slug.current}`}>
                  <a className={styles.recentanch}>{post.title}</a>
                </Link>{' '}
                <span className={styles.recentcat}>{post.categories}</span>
                </p>
                <p className={styles.recentdate}>({new Date(post.publishedAt).toDateString()})</p>
              </li>
            )
        )}
        </ul>
        </section>
        </main> 
        </>
     );
}

const query = groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc){
  _id,
   title,
   slug,
   publishedAt,
   "categories": categories[0]->slug.current
 }
 `


export async function getStaticProps() {
    const posts = await client.fetch(query)
    return {
      props: {
        posts
      }
    }
}

 
export default Home;
