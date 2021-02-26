import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  'about',
  'projects',
  'blog',
]

function MyApp({ Component, pageProps }) {
  return (
    // <div className="max-w-5xl mx-auto flex flex-col h-screen  px-4">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-5xl mx-auto">
      <header className="pt-6 ml-2">
        <Link href="/">
          <a  className="text-pink-700 hover:text-pink-200 hover:border-black transition duration-500 text-5xl font-bold border-gray-300 border-b-2 inline-block pb-0.5">Jeremy Bell</a>
        </Link>

        <nav className="py-8">
          <ul className="flex flex-wrap justify-evenly">
            {links.map((link) => {
              return (
                <li key={link}>
                  <Link href={`/${link}`}>
                    <a className="transition duration-200 text-center m-2 block font-light text-3xl hover:text-red-400 focus:text-pink-200">{link}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />

      <footer className="mb-10 pb-10">
        <nav className="py-auto">
          <ul className="flex flex-wrap justify-center">
          <li className="px-8">
              <Link href="https://www.linkedin.com/in/jeremy-bell91/">
              <a><Image
                src="/social/linkedinColor.png"
                alt="Jeremy's LinkedIn"
                width={30}
                height={30}
                className="hover:opacity-70"
              />
              </a>
              </Link>
            </li>
            <li className="px-8">
              <Link href="https://github.com/Jezzabell91">
              <a><Image
                src="/social/githubColor.png"
                alt="Jeremy's Github"
                width={30}
                height={30}
                className="hover:opacity-70"
              />
              </a>
              </Link>
            </li>
            <li className="px-8">
              <Link href="https://twitter.com/Jezzabell_Codes">
              <a><Image
                src="/social/twitterColor.png"
                alt="Jeremy's Twitter"
                width={30}
                height={30}
                className="hover:opacity-70"
              />
              </a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
      </div>
    </div>
  )
}

export default MyApp
