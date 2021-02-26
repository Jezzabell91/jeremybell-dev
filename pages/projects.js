import Head from 'next/head'
import ProjectsPanel from '../components/projects_panel'

const Projects = () => {
    return (
        <>
        <Head>
        <title>Jeremy's Projects</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProjectsPanel />


        </>)
}

export default Projects