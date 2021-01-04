const Blog = () => {
    return (
        <>
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col-dense lg:grid-cols-3 place-items-center gap-6">
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-80 cursor-pointer m-auto relative col-start-2">
            <a href="#" className="absolute w-full h-full z-30"></a>
            <img alt="blog photo" src="/feature/beerwah.jpg" className="rounded-t-lg max-h-40 w-full object-cover"/>
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