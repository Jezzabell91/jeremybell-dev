
import Image from 'next/image'

const Homepage = () => {
  return (
    <>
      <div className="mx-2 my-auto grid place-items-center grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-4 pb-8">

      <picture>
          <source srcset="/feature/beerwah.avif" type="image/avif" />
          <source srcset="/feature/beerwah.webp" type="image/webp" />
          <img src="/feature/beerwah.jpg" alt="Jeremy at the summit of Mt Beerwah" className="rounded-sm shadow-md transition duration-200 hover:shadow-lg hover:opacity-95" />
      </picture>

      <picture>
          <source srcset="/feature/feature.avif" type="image/avif" />
          <source srcset="/feature/feature.webp" type="image/webp" />
          <img src="/feature/feature.jpg" alt="Jeremy holding Frankie the Moodle" className="rounded-sm shadow-lg transition duration-200 hover:shadow-xl hover:opacity-95" />
      </picture>

      <picture>
          <source srcset="/feature/cow.avif" type="image/avif" />
          <source srcset="/feature/cow.webp" type="image/webp" />
          <img src="/feature/cow.jpg" alt="Jeremy checking out a highland calf" className="mr-2 rounded-sm shadow-xl transition duration-200 hover:shadow-2xl hover:opacity-95" />
      </picture>
      </div>
    </>
  )
}

export default Homepage