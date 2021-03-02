import Head from 'next/head'
import BlogList from '../components/blog_list'

const Blog = () => {
    return (
        <>
              <Head>
        <title>Jeremy's Blog</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <BlogList />
    </>)
}

export default Blog