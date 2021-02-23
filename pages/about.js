const About = () => {
    return (
        <>    


<div className=" mx-auto px-2">

    <ul className="grid place-items-start grid-cols-1 gap-4 md:grid-cols-2 mb-6">
        <li className="lg:w-4/5">
            <p className="text-xl font-medium leading-6 text-gray-900">
                What are you most excited for in 2021?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                This year I’m hoping I can get my first job as a junior developer. Signing the contract that for the first job of my new career is going to be an amazing feeling. 
                Another thing I'm excited about is that I recently got my first VR headset, the HP Reverb G2. I am buzzing that I can fly a spaceship even if it's not quite the real thing.                </p>
            </p>
        </li>
        <li className="lg:w-4/5">
            <p className="text-xl font-medium leading-6 text-gray-900">
                What are you currently working on?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                I just finished Coder Academy’s Fast Track Coding Bootcamp. At the moment I am focusing on some side projects inlcuding, <a className="underline transition duration-200 hover:text-red-400 hover:no-underline" href="https://github.com/Jezzabell91/heart-rate-training">Heart Rate Trainer</a>, a PWA for running that uses the <a className="underline transition duration-200 hover:text-red-400 hover:no-underline" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API">Web Bluetooth API</a> to connect to a heart rate monitor. 
                I'm enjoying developing something that I use almost every day and incrementally improving it.  
                </p>
            </p>
        </li>
        
        <li className="lg:w-4/5">
            <p className="text-xl font-medium leading-6 text-gray-900">
                What did you use to create this website?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                 For this site I felt like trying some technologies that I wasn't familiar with as well. The website is built with Next.js and hosted on Vercel and styling has been done with TailwindCSS. I was interested in how Next.js handled <a className="underline transition duration-200 hover:text-red-400 hover:no-underline" href="https://nextjs.org/docs/routing/introduction">routing and linking between pages</a>. 
                </p>
                <p className="text-base leading-6 text-gray-500">
                I was also interested in using new image formats. All feature images on this site have AVIF and WebP versions created using <a className="underline transition duration-200 hover:text-red-400 hover:no-underline" href="https://squoosh.app/">Squoosh</a>. They also have a back up .jpg that are used for browsers that aren't compatible with the newer technologies. 
                AVIF images are much smaller in size but have the same visual quality, however at the moment they are only <a className="underline transition duration-200 hover:text-red-400 hover:no-underline" href="https://caniuse.com/avif">supported</a> by the current versions of Chrome, Firefox and Opera.               
                </p>
            </p>
        </li>
        <li className="lg:w-4/5">
            <p className="text-xl font-medium leading-6 text-gray-900">
                What webdev technologies do you like?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                I recently completed a project using the MERN stack and I enjoyed the flexibility of using Express and MongoDB in the backend to develop the API and pairing it with React in the frontend. 
                I like that React has an extensive community and I found using packages like <a className="underline transition duration-200 hover:text-red-400 hover:no-underline" href="https://react-hook-form.com/">React Hook Form</a> made the development experience better.
                </p> 
                <p className="text-base leading-6 text-gray-500">
                I really like using vanilla JavaScript with HTML and TailwindCSS however my first love in programming was Ruby.    
                </p>
            </p>
        </li>
        <li className="lg:w-4/5">
            <p className="text-xl font-medium leading-6 text-gray-900">
                What do you do outside of developing?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                I do a lot of reading, and I generally alternate between sci-fi/fantasy, fictionalised history and classics. I’m also a big gamer. At the moment I’m playing Hades on Switch, Doom Eternal on PC and Half Life: Alyx in VR. 
For outside activities, I enjoy running, lifting weights, bouldering and once a week I play beach volleyball. I’m almost always up for hanging out and grabbing a beer with friends. 
                </p>
            </p>
        </li>
        <li className="lg:w-4/5">
            <p className="text-xl font-medium leading-6 text-gray-900">
                What's something you can talk endlessy about?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                A bit weird, but I have an obsession/passion for the reality TV show Survivor. I honestly could go on for days talking about it, so if you ever feel like talking to someone about Survivor please hit me up.</p>
            </p>
        </li>
    </ul>
</div>

        </>
    )

}


export default About 