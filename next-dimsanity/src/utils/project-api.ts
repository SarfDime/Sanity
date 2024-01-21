import { IProject } from "@/components/Project/project-interface"

const API_URL = `https://${process.env.NEXT_PUBLIC_PROJECT_API}.mockapi.io/project`
type Project = IProject

export const getProjects = async (): Promise<Project[]> => {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}

export const createProject = async (title: string, text: string): Promise<string> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, text: text }),
    })

    if (!response.ok) {
        throw new Error(`${response.statusText}! Status: ${response.status}`)
    }

    return 'Project created successfully'
}

export const updateProject = async (id: string, project: Project): Promise<string> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
    })

    if (!response.ok) {
        throw new Error(`${response.statusText}! Status: ${response.status}`)
    }

    return 'Project updated successfully'
}

export const deleteProject = async (id: string): Promise<string> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    })

    if (!response.ok) {
        throw new Error(`${response.statusText}! Status: ${response.status}`)
    }

    return 'Project deleted successfully'
}
