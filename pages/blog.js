import Head from 'next/head'

const Blog = () => {
    return (
        <>
              <Head>
        <title>Jeremy's Blog</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col-dense lg:grid-cols-3 place-items-center gap-6">
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-80 cursor-pointer m-auto relative md:col-start-2">
            <a href="#" className="absolute w-full h-full z-30"></a>
            <picture>
          <source srcSet="/feature/beerwah.avif" type="image/avif" />
          <source srcSet="/feature/beerwah.webp" type="image/webp" />
          <img src="/feature/beerwah.jpg" alt="Jeremy at the summit of Mt Beerwah" className="rounded-t-lg max-h-40 w-full object-cover" />
        </picture>

            <div className="bg-white w-full p-4 relative">
                <p className="text-indigo-500 text-md font-medium">
                </p>
                <p className="text-gray-800 text-xl font-medium mb-2">
                    Coming Soon
                </p>
                <p className="text-gray-400 font-light text-md">
                    I am currently working out how to use Markdown files as source data for blog posts in Next.js 
                </p>
            </div>
        </div>    
    </div>
    </>)
}

export default Blog