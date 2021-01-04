const Projects = () => {
    return (
        <>
        <div className="lg:grid lg:grid-cols-1 lg:grid-rows-2 md:gap-8 lg:gap-12 lg:items-center mb-6">
            <div className="lg:col-start-2 lg:row-start-1 max-w-lg ">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900">
                    <a href="https://cowgo.herokuapp.com/" className="hover:text-red-400 underline transition duration-200">CowGo</a>
                </h4>
                <h5 className="text-l leading-8 font-medium text-gray-700">
                    Coder Academy - Ruby on Rails Project 
                </h5>
                <ul className="mt-4">
                    <li>
                        <div className="flex">
                            <div className="">
                                <h5 className="text-lg leading-6 font-medium text-gray-900">
                                    Purpose
                                </h5>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                Owners of small farms often do not have the capability to move livestock and have to rely on their own contacts or large commercial operators to provide this service. The CowGo marketplace web app connects livestock owners with farmers who can.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mt-4">
                        <div className="flex">
                            
                            <div className="">
                                <h5 className="text-lg leading-6 font-medium text-gray-900">
                                    Tech Stack
                                </h5>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    <ul>
                                    <li>Ruby</li>
                                    <li>Ruby on Rails</li>
                                    <li>Postgresql</li>
                                    <li>TailwindCSS</li>
                                    <li>Heroku</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mt-4">
                        <div className="flex">
                            <div className="">
                                <h5 className="text-lg leading-6 font-medium text-gray-900">
                                    Features
                                </h5>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                <ul>
                                    <li>CRUD application with MVC architecture</li>
                                    <li>User authentication with Devise</li>
                                    <li>Heroku Pipline with separate development and production builds</li>
                                    <li>Cloudinary used to host images and do transformations </li>
                                </ul>    
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mt-4">
                        <div className="flex">
                            <div className="">
                                <h5 className="text-lg leading-6 font-medium text-gray-900">
                                    GitHub Repository
                                </h5>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    <a href="https://github.com/Jezzabell91/cowgo1" className="hover:underline transition duration-200">https://github.com/Jezzabell91/cowgo1</a>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mt-10 md:-mx-12 lg:mt-0 lg:col-start-1 lg:row-start-1">
            <picture>
                <source srcset="/projects/cowgo_screenshot.avif" type="image/avif" />
                <source srcset="/projects/cowgo_screenshot.webp" type="image/webp" />
                <img src="/projects/cowgo_screenshot.jpg" alt="Screenshot of CowGo" className="relative mx-auto border-t-2 border-green-400 shadow-2xl rounded" />
            </picture>
            </div>
            <div className="lg:col-start-1 lg:row-start-2 max-w-lg ">
            <h4 className="text-2xl leading-8 font-extrabold text-gray-900">
                    SteggyHide
                </h4>
                <h5 className="text-l leading-8 font-medium text-gray-700">
                    Coder Academy - Ruby Terminal Application Project
                </h5>
                <ul className="mt-4">
                    <li>
                        <div className="flex">
                            <div className="">
                                <h5 className="text-lg leading-6 font-medium text-gray-900">
                                    Purpose
                                </h5>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                SteggyHide is a terminal app that handles image based steganography. It can hide a user written message inside an png image, it can read a hidden message from a user selected image. SteggyHide also has four conversion tools if users simply want to do conversions between hexadecimal and RGB color values as well between strings and binary.                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mt-4">
                        <div className="flex">
                            
                            <div className="">
                                <h5 className="text-lg leading-6 font-medium text-gray-900">
                                    Tech Stack
                                </h5>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    <ul>
                                    <li>Ruby</li>
                                    <li>Bash</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mt-4">
                        <div className="flex">
                            <div className="">
                                <h5 className="text-lg leading-6 font-medium text-gray-900">
                                    Features
                                </h5>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                <ul>
                                    <li>Encode/Decode secret messages inside PNG image</li>
                                    <li>Conversion tools for hex, RGB, binary and string</li>
                                    <li>Command line arguments</li>
                                    <li>Help documentation</li>
                                </ul>    
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mt-4">
                        <div className="flex">
                            <div className="">
                                <h5 className="text-lg leading-6 font-medium text-gray-900">
                                    GitHub Repository
                                </h5>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    <a href="https://github.com/Jezzabell91/SteggyHide" className="hover:underline transition duration-200">https://github.com/Jezzabell91/SteggyHide</a>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mt-10  md:-mx-12 lg:mt-0 lg:col-start-2 lg:row-start-2">
                <picture>
                    <source srcset="/projects/steggyhide_screenshot.avif" type="image/avif" />
                    <source srcset="/projects/steggyhide_screenshot.webp" type="image/webp" />
                    <img src="/projects/steggyhide_screenshot.jpg" alt="Screenshot of SteggyHide" className="relative mx-auto shadow-2xl rounded" />
                </picture>
            </div>
        </div>


        </>)
}

export default Projects