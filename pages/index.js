import Head from 'next/head'

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Jeremy Bell - Dev</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mx-2 my-auto grid place-items-center grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-4 pb-8">

      <picture>
          <source srcSet="/feature/balloons.avif" type="image/avif" />
          <source srcSet="/feature/balloons.webp" type="image/webp" />
          <img src="/feature/balloons.jpg" alt="Jeremy at sunrise, looking at hot air balloons in Cappadocia" className="rounded-sm shadow-md transition duration-200 hover:shadow-lg hover:opacity-95" />
      </picture>

      <picture>
          <source srcSet="/feature/istanbul.avif" type="image/avif" />
          <source srcSet="/feature/istanbul.webp" type="image/webp" />
          <img src="/feature/istanbul.jpg" alt="Jeremy looking into the camera on a crowded street in Istanbul " className="rounded-sm shadow-lg transition duration-200 hover:shadow-xl hover:opacity-95" />
      </picture>

      <picture>
          <source srcSet="/feature/cow.avif" type="image/avif" />
          <source srcSet="/feature/cow.webp" type="image/webp" />
          <img src="/feature/cow.jpg" alt="Jeremy checking out a highland calf" className="mr-2 rounded-sm shadow-xl transition duration-200 hover:shadow-2xl hover:opacity-95" />
      </picture>
      </div>
    </>
  )
}

export default Homepage