import Link from 'next/link'

const BlogCard = ({post}) => {
    // console.log(post)
    const title = post.title
    const slug = post.slug
    const date = post.date 
    const content = post.content


    return (
        <div>
            <p className="text-sm text-gray-500">
            <time dateTime={`${date}`}>{date}</time>
            </p>
            <Link href={`/blog/${slug}`}>
            <a className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">
                {title}
            </p>
            </a></Link>
            <p className="mt-3 text-base text-gray-500 line-clamp-3">
                {content}
            </p>
            
            <div className="mt-3">
            <Link href={`/blog/${slug}`}>
            <a className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                Read full story
            </a></Link>
            </div>
      </div>
    )
}

export default BlogCard