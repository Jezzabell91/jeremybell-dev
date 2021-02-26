const ProjectDetails = ({project}) => {

    const name = project.name
    const about = project.about
    const url = project.url
    const repo = project.repo
    const image = project.image
    const tech = project.tech
    const purpose = project.purpose
    const features = project.features
    
    return (

<div className="sm:flex">
  <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
      <a href={`${url}`}>
            <picture>
                <source srcSet={`/projects/${image}.avif`} type="image/avif" />
                <source srcSet={`/projects/${image}.webp`} type="image/webp" />
                <img src={`/projects/${image}.jpg`} alt={`Screenshot of ${name}`} className="relative mx-auto border border-gray-50 shadow-lg rounded" />
            </picture>
            </a>
  </div>
  <div>
            <h5 className="text-l leading-8 font-medium text-gray-700">
                    {about}
                </h5>
                <ul className="mt-4">
                    <li>
                        <div className="flex">
                            <div className="">
                                <h5 className="text-lg leading-6 font-medium text-gray-900">
                                    Purpose
                                </h5>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                {purpose}
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
                                    <ul className="mt-2 text-base leading-6 text-gray-500">
                                    {tech.map(item => {return(<li key={item}>{item}</li>)})}
                                    </ul>   
                            </div>
                        </div>
                    </li>
                    <li className="mt-4">
                        <div className="flex">
                            <div className="">
                                <h5 className="text-lg leading-6 font-medium text-gray-900">
                                    Features
                                </h5>
                                <ul className="mt-2 text-base leading-6 text-gray-500">
                                    {features.map(item => {return(<li key={item}>{item}</li>)})}
                                    </ul>   
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
                                    <a href={`${repo}`} className="hover:underline transition duration-200">{`${repo}`}</a>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
        </div>
</div>
        
    )
}

export default ProjectDetails