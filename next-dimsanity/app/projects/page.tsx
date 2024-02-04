import React from 'react'
import Error from '@/app/components/Error/Error'
import Project from '@/app/components/Project/Project'
import { getProjects } from '@/app/utils/project-api'
import NewProject from '@/app/components/Project/NewProject'

export default async function Projects() {
    try {
        const projects = await getProjects()
        if(projects.length < 1) {
            return <Error message={"No projects found"}></Error>
        }

        return (
            <main className='projectsMain'>
                <NewProject></NewProject>
                {projects?.map((project) => (
                    <Project key={project.id} {...project} />
                ))}
            </main>
        )
    } catch (e) {
        if (e instanceof TypeError) {
            return (
                <Error message={e.message}></Error>
            )
        }
    }
}