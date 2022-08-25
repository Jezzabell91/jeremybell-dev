import { useState } from 'react'
import Projects from '../projects/projects'
import ProjectDetails from './project_details'

const ProjectsPanel = () => {
   const projects = Projects
   const [ffmpeg_trim_and_compress, hr_trainer, cowgo, steggyhide, cityclimb] = projects

const names = projects.map(item => item.name)

const [activeTab, setActiveTab] = useState(0)

   return ( 
<div className="bg-white overflow-hidden">
  <div className="px-4 py-5 sm:px-6">

    <div>
  <div className="sm:hidden">
    <label htmlFor="tabs" className="sr-only">Select a tab</label>
    <select onChange={() => setActiveTab(names.indexOf(tabs.value))} id="tabs" name="tabs" className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
      <option >{`${names[0]}`}</option>
      <option>{`${names[1]}`}</option>
      <option>{`${names[2]}`}</option>
      <option>{`${names[3]}`}</option>
      <option>{`${names[4]}`}</option>
    </select>
  </div>
  <div className="hidden sm:block">
    <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
      <button onClick={() => setActiveTab(0)} aria-current={`${activeTab === 0 ? 'true' : 'false'}`} className={`${activeTab === 0 ? 'tabActive' : 'tabNotActive'} rounded-l-lg `}>
        <span>{`${names[0]}`}</span>
        <span aria-hidden="true" className={`${activeTab === 0 ? 'bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5' : 'bg-transparent absolute inset-x-0 bottom-0 h-0.5'}`}></span>
      </button>
      <button onClick={() => setActiveTab(1)} aria-current={`${activeTab === 1 ? 'true' : 'false'}`} className={`${activeTab === 1 ? 'tabActive' : 'tabNotActive'} `}>
        <span>{`${names[1]}`}</span>
        <span aria-hidden="true" className={`${activeTab === 1 ? 'bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5' : 'bg-transparent absolute inset-x-0 bottom-0 h-0.5'}`}></span>
      </button>

      <button onClick={() => setActiveTab(2)} aria-current={`${activeTab === 2 ? 'true' : 'false'}`} className={`${activeTab === 2 ? 'tabActive' : 'tabNotActive'} `}>
        <span>{`${names[2]}`}</span>
        <span aria-hidden="true" className={`${activeTab === 2 ? 'bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5' : 'bg-transparent absolute inset-x-0 bottom-0 h-0.5'}`}></span>
      </button>

      <button onClick={() => setActiveTab(3)} aria-current={`${activeTab === 3 ? 'true' : 'false'}`} className={`${activeTab === 3 ? 'tabActive' : 'tabNotActive'} rounded-r-lg`}>
        <span>{`${names[3]}`}</span>
        <span aria-hidden="true" className={`${activeTab === 3 ? 'bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5' : 'bg-transparent absolute inset-x-0 bottom-0 h-0.5'}`}></span>
      </button>

      <button onClick={() => setActiveTab(3)} aria-current={`${activeTab === 4 ? 'true' : 'false'}`} className={`${activeTab === 3 ? 'tabActive' : 'tabNotActive'} rounded-r-lg`}>
        <span>{`${names[4]}`}</span>
        <span aria-hidden="true" className={`${activeTab === 4 ? 'bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5' : 'bg-transparent absolute inset-x-0 bottom-0 h-0.5'}`}></span>
      </button>
    </nav>
  </div>
</div>
  </div>
  <div className="px-4 py-5 sm:p-6">
    {/* <!-- Content goes here --> */}
    {activeTab === 0 ? <ProjectDetails project={ffmpeg_trim_and_compress} /> : 
        activeTab === 1 ? <ProjectDetails project={hr_trainer} /> :
        activeTab === 2 ? <ProjectDetails project={cowgo} /> :
        activeTab === 3 ?  <ProjectDetails project={steggyhide} /> : <ProjectDetails project={cityclimb} />}
  </div>
</div>
)
}

export default ProjectsPanel