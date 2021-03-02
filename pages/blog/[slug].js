import Head from 'next/head'
import BlogPosts from '../../_posts/posts'


export default function BlogPage({ title, date, image, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative pb-16 overflow-hidden">

  <div className="relative px-4 sm:px-6 lg:px-8">
    <div className="text-lg max-w-prose mx-auto">
      <h1>
        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-pink-700 sm:text-4xl">{title}</span>
      </h1>
    </div>

      <p className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">{content[0]}</p>
      <div className="sm:flex">
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
      <picture >
                <source srcSet={`/blog/${image}.avif`} type="image/avif" />
                <source srcSet={`/blog/${image}.webp`} type="image/webp" />
                <img src={`/blog/${image}.jpg`} alt={`Screenshot of ${image}`} className="relative my-6 mx-auto border border-gray-50 shadow-lg rounded md:w-3/4" />
        </picture>
        </div>
        </div>
      <p className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">{content[1]}</p>
      <p className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">{content[2]}</p>
  </div>
</div>
    </div>
  )
}

export async function getStaticProps(context) {
    // console.log('hi', context)
    const { params } = context
    return {
        props: BlogPosts.find(item => item.slug === params.slug) 
    }
}

export async function getStaticPaths() {
    return {
        paths: BlogPosts.map((item) => ({
            params: {
                slug: item.slug
            },
        })),
        fallback: false
    }
}