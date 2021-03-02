import BlogPosts from '../_posts/posts'
import BlogCard from './blog_card'

const BlogList = () => {
    const blog_posts = BlogPosts
return(



<div className="bg-white pt-8 pb-20 px-4 sm:px-12 lg:pt-8 lg:pb-28 lg:px-8">
    <div className="mt-6 pt-10 grid gap-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
        {blog_posts.map(post => <BlogCard post={post} key={post.slug}/>)}
    </div>
</div>
)
}

export default BlogList