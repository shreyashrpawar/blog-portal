import groq from 'groq'
import styles from "../../styles/Home.module.css"
import style from "../../styles/slug.module.css"
import imageUrlBuilder from '@sanity/image-url'
import client from '../../lib/sanity'
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { node } from 'prop-types';
import Head from 'next/head';
import Image from 'next/image'
import { useState } from 'react';



const serializers = {
  types: {
    code:({node={}})=>{
      const {code,language}=node
      if(!code){
        return null
      }
      return <SyntaxHighlighter language={language || 'text'}>{code}</SyntaxHighlighter>
    }
  },
  marks:{
    link: ({children, mark})=>
    mark.seo ?(
      <a href={mark.href} target="_blank" rel='noopener noreferer nofollow'>{children}</a>
    ):(
      <a href={mark.href}>{children}</a>
    )
  }
}

 
function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}



const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).auto('format')}
        />
      )
    }
  }
  
}

const Post = ({post, categorylist, relatedArticles}) => {

  const [sidebar,setSidebar]= useState("sideicon")
  const [setcate,setSetcate]= useState(styles.articlediv2)
  const [setlinks,setSetlinks]= useState(styles.articlediv1)
  const [setflex,setSetflex]= useState(styles.baherflex)

    
  const changeClass=(e)=>{
    if(sidebar=="sideicon"){
      setSidebar("");
      setSetcate(styles.responsice1);
      setSetlinks(styles.responsice2);
      setSetflex(styles.twoflex)
 
  }else if(sidebar==""){
    setSidebar("sideicon");
    setSetcate(styles.articlediv2);
    setSetlinks(styles.articlediv1);
    setSetflex(styles.baherflex)
  }
  }

  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    body = []
  } = post
  return (
    <>

    <Head>
    <title>{title}</title>
        {/* <meta name="description" content={description} /> */}
        <meta property="og:title" content={title} />
    </Head>
    <div className={sidebar}>
    <Image onClick={changeClass} src={"/sidebar.svg"} width="32px" height="32px"></Image></div>
    <article className={styles.articletag}>
      <div className={setflex}>
         <div className={setcate}>
<h4 className='lead'>Categories</h4>
<ul className='mt-3'>
  {categorylist && categorylist.map(
    (cat)=>(
      <Link href={`/${cat.title}`} key={cat._id}><a>  <li className='m-3 display-7'>{cat.title}</li></a></Link>
    )
  )}
</ul>
      </div>
      <div className={setlinks}>
<h4 className='lead'>Related Articles</h4>
<ul>
{relatedArticles.map(
    (Linknurl)=>(
     <Link key={Linknurl._id} href={`${Linknurl.relatedUrl}`} ><a><li className='m-3 display-7'>{Linknurl.relatedtitle}</li></a></Link> 
    )
  )}
</ul>
      </div>
     </div>
    <main id={style.mainbody} className={styles.mainarticle}>
        <div className='m-5 text-danger'>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
 {categories.map(category =><Link href={`/${category}`} key={category._id}><a><li>Posted in {category}</li></a></Link>)} 
        </ul>
      )}
    </div>

      
    <BlockContent
    blocks={body}
    imageOptions={{ptComponents}}
    {...client.config()}
    serializers={serializers}
    />
 </main>
    </article>
    </>
 )
}







export async function getStaticPaths() {

const Indexedcategory=groq`*[_type=="category"].slug.current`
const Indexedcategory1=await client.fetch(Indexedcategory);
const justtrial=groq`*[_type=="post"]{
  "slug":slug.current,
  "categories":categories[]->slug.current,
}`
const justtrial1=await client.fetch(justtrial)

function testing(){
  let tes=[];
  for(let i=0;i<Indexedcategory1.length;i++){
    const found = justtrial1.filter(element => element.categories == Indexedcategory1[i]);
  
    for(let j=0;j<found.length;j++){
  tes.push({params:{category:found[j].categories.toString(), slug:found[j].slug.toString()},})
  }

  }
  return tes
}


return {
  paths: 
testing(),
  fallback: false // false or 'blocking'
};


}
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "name": author->name,
  "categories": categories[]->title,
  body
}`
const categoryquery=groq` *[_type == "category" ]{
  _id,
  title
}`
const related=groq`*[_type == "related" ]{
  _id,
  relatedUrl,
  relatedtitle
}`


export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
   const { slug = "" } = context.params

 const post = await client.fetch(query,{slug} )
  const categorylist=await client.fetch(categoryquery)
  const relatedArticles=await client.fetch(related)

  return {
    props: {
      post,
      categorylist,
      relatedArticles
    }
  }
}
export default Post
