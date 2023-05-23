import Head from 'next/head';



const ContactPage = () => {
    return(
<>
<Head>
<title>{"About us- shreyashpawar.me"}</title>
      <meta name="description" content={"shreyashpawar.me is the site which provides some information for web developers on specific topics"} />
      <meta property="og:title" content={"About us- shreyashpawar.me"} />
</Head>
         <article className="px-6 md:px-0 articles m-5 p-5">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {"About us- shreyashpawar blogs"}
          </h1>       
        </header>
        <main>
          <article className="prose dark:prose-dark newarticle m-12">
              <p>Good Morning, Friends. I am Shreyash Pawar, creator, and founder of shreyash.io. This site is completely managed and created by myself. I am a web developer who does not have much more experience in web development. But, I like to write articles. So, I have created this site where I can post articles. I study for the article and write in simple words.</p>
              <p>I have created this site to generate a side income by displaying ads. When my site will getting a decent amount of traffic, I will apply for adsence. This is my aim to create this site.</p>
              </article>
              </main>
            </article>
</>
    );
}
export default ContactPage;

