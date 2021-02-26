import Head from 'next/head'
import { useState } from 'react'

const About = () => {
    const [isOn, setIsOn] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)
    const [isOpen5, setIsOpen5] = useState(false)
    const [isOpen6, setIsOpen6] = useState(false)
    // const [isOpen, setIsOpen] = useState([false, false, false, false, false, false])

    const collapse = () => {
        setIsOpen1(false)
        setIsOpen2(false)
        setIsOpen3(false)
        setIsOpen4(false)
        setIsOpen5(false)
        setIsOpen6(false)
    }

    const expand = () => {
        setIsOpen1(true)
        setIsOpen2(true)
        setIsOpen3(true)
        setIsOpen4(true)
        setIsOpen5(true)
        setIsOpen6(true)
    }

    return (
        <>
            <Head>
                <title>About Jeremy</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="pt-0">
                <div className="mx-auto pb-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto divide-y-2 divide-gray-200">
                        
      <span className="w-full flex justify-between items-start">
      <h2 className="text-left text-3xl font-extrabold text-pink-700 sm:text-4xl">
                            About Me
      </h2>
      <span
                role="checkbox"
                aria-checked={isOn}
                tabIndex="0"
                onClick={() => {
                    isOn ? collapse() : expand()
                    setIsOn(!isOn)
                    }
                }
                className={`${isOn ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
    >
      <span
        aria-hidden="true"
        className={`${isOn ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
      ></span>
    </span>
    </span>
                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            <div className="pt-6">
                                <dt className="text-lg">
                                    {/* <!-- Expand/collapse question button --> */}
                                    <button onClick={() => setIsOpen1(!isOpen1)} className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">
                                            What are you most excited for in 2021?
                                        </span>
                                        <span className="ml-6 h-7 flex items-center">
                                            {/* <!--
                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                --> */}
                                            <svg className={`${isOpen1 ? '-rotate-180' : 'rotate-0'} h-6 w-6 transform`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd className={`${isOpen1 ? '' : 'hidden'} mt-2 pr-12`}>
                                    <p className="text-base leading-6 text-gray-500">
                                        This year I’m hoping I can get my first job as a junior developer. Signing the contract that for the first job of my new career is going to be an amazing feeling.
                Another thing I'm excited about is that I recently got my first VR headset, the HP Reverb G2. I am buzzing that I can fly a spaceship even if it's not quite the real thing.                </p>
                                </dd>
                            </div>

                            <div className="pt-6">
                                <dt className="text-lg">
                                    {/* <!-- Expand/collapse question button --> */}
                                    <button onClick={() => setIsOpen2(!isOpen2)} className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">
                                            What are you currently working on?
              </span>
                                        <span className="ml-6 h-7 flex items-center">
                                            {/* <!--
                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                --> */}
                                            <svg className={`${isOpen2 ? '-rotate-180' : 'rotate-0'} h-6 w-6 transform`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd className={`${isOpen2 ? '' : 'hidden'} mt-2 pr-12`}>
                                    <p className="text-base leading-6 text-gray-500">
                                        I just finished Coder Academy’s Fast Track Coding Bootcamp. At the moment I am focusing on some side projects inlcuding, <a className="underline transition duration-200 hover:text-red-400 hover:no-underline" href="https://github.com/Jezzabell91/heart-rate-training">Heart Rate Trainer</a>, a PWA for running that uses the <a className="underline transition duration-200 hover:text-red-400 hover:no-underline" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API">Web Bluetooth API</a> to connect to a heart rate monitor.
                I'm enjoying developing something that I use almost every day and incrementally improving it.
                </p>
                                </dd>
                            </div>

                            <div className="pt-6">
                                <dt className="text-lg">
                                    {/* <!-- Expand/collapse question button --> */}
                                    <button onClick={() => setIsOpen3(!isOpen3)} className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">
                                            What did you use to create this website?
              </span>
                                        <span className="ml-6 h-7 flex items-center">
                                            {/* <!--
                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                --> */}
                                            <svg className={`${isOpen3 ? '-rotate-180' : 'rotate-0'} h-6 w-6 transform`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd className={`${isOpen3 ? '' : 'hidden'} mt-2 pr-12`}>
                                    <p className="text-base leading-6 text-gray-500">
                                        For this site I felt like trying some technologies that I wasn't familiar with as well. The website is built with Next.js and hosted on Vercel and styling has been done with TailwindCSS. I was interested in how Next.js handled <a className="underline transition duration-200 hover:text-red-400 hover:no-underline" href="https://nextjs.org/docs/routing/introduction">routing and linking between pages</a>.
                </p>
                                    <p className="text-base leading-6 text-gray-500 mt-2">
                                        I was also interested in using new image formats. All feature images on this site have AVIF and WebP versions created using <a className="underline transition duration-200 hover:text-red-400 hover:no-underline" href="https://squoosh.app/">Squoosh</a>. They also have a back up .jpg that are used for browsers that aren't compatible with the newer technologies.
                AVIF images are much smaller in size but have the same visual quality, however at the moment they are only <a className="underline transition duration-200 hover:text-red-400 hover:no-underline" href="https://caniuse.com/avif">supported</a> by the current versions of Chrome, Firefox and Opera.
                </p>
                                </dd>
                            </div>

                            <div className="pt-6">
                                <dt className="text-lg">
                                    {/* <!-- Expand/collapse question button --> */}
                                    <button onClick={() => setIsOpen4(!isOpen4)} className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">
                                            What webdev technologies do you like?
              </span>
                                        <span className="ml-6 h-7 flex items-center">
                                            {/* <!--
                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                --> */}
                                            <svg className={`${isOpen4 ? '-rotate-180' : 'rotate-0'} h-6 w-6 transform`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd className={`${isOpen4 ? '' : 'hidden'} mt-2 pr-12`}>
                                    <p className="text-base leading-6 text-gray-500">
                                        I recently completed a project using the MERN stack and I enjoyed the flexibility of using Express and MongoDB in the backend to develop the API and pairing it with React in the frontend.
                I like that React has an extensive community and I found using packages like <a className="underline transition duration-200 hover:text-red-400 hover:no-underline" href="https://react-hook-form.com/">React Hook Form</a> made the development experience better.
                </p>
                                    <p className="text-base leading-6 text-gray-500 mt-2">
                                        I really like using vanilla JavaScript with HTML and TailwindCSS however my first love in programming was Ruby.
                </p>
                                </dd>
                            </div>

                            <div className="pt-6">
                                <dt className="text-lg">
                                    {/* <!-- Expand/collapse question button --> */}
                                    <button onClick={() => setIsOpen5(!isOpen5)} className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">
                                            What do you do outside of developing?
              </span>
                                        <span className="ml-6 h-7 flex items-center">
                                            {/* <!--
                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                --> */}
                                            <svg className={`${isOpen5 ? '-rotate-180' : 'rotate-0'} h-6 w-6 transform`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd className={`${isOpen5 ? '' : 'hidden'} mt-2 pr-12`}>
                                    <p className="text-base leading-6 text-gray-500">
                                        I like to read. I generally alternate between sci-fi/fantasy, fictionalised history and classics. I’m also a big gamer. At the moment I’m playing Hades on Switch, Doom Eternal on PC and Half Life: Alyx in VR.
                                        For outside activities, I enjoy running, lifting weights, bouldering and once a week I play beach volleyball. I’m almost always up for hanging out and grabbing a beer with friends.
                </p>
                                </dd>
                            </div>

                            <div className="pt-6">
                                <dt className="text-lg">
                                    {/* <!-- Expand/collapse question button --> */}
                                    <button onClick={() => setIsOpen6(!isOpen6)} className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">
                                            What's something you can talk endlessy about?
              </span>
                                        <span className="ml-6 h-7 flex items-center">
                                            {/* <!--
                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                --> */}
                                            <svg className={`${isOpen6 ? '-rotate-180' : 'rotate-0'} h-6 w-6 transform`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd className={`${isOpen6 ? '' : 'hidden'} mt-2 pr-12`}>
                                    <p className="text-base leading-6 text-gray-500">
                                        A bit weird, but I have an obsession/passion for the reality TV show Survivor. I honestly could go on for days talking about it, so if you ever feel like talking to someone about Survivor please hit me up.</p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

        </>
    )

}


export default About 