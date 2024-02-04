"use client"
import React, { FC, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { IProject } from "./project-interface"
import Image from "next/image"
import { formatDate } from "@/app/utils/useful-functions"
import { deleteProject, updateProject } from "@/app/utils/project-api"

const Project: FC<IProject> = ({ id, title, text, image, createdAt }) => {
    const router = useRouter()
    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const [newText, setNewText] = useState(text)

    const [response, setResponse] = useState("")
    const [showResponse, setShowResponse] = useState(false)

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>
        if (showResponse) {
            timer = setTimeout(() => {
                setShowResponse(false)
            }, 3000)
        }
        return () => clearTimeout(timer)
    }, [showResponse])

    const handleDelete = async () => {
        try {
            const deleteResponse = await deleteProject(id)
            setResponse(deleteResponse)
            setShowResponse(true)
            router.refresh()
        } catch (e) {
            if (e instanceof Error) {
                setResponse(e.message)
                setShowResponse(true)
            }
        }
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleCancel = () => {
        setIsEditing(false)
        setNewTitle(title)
        setNewText(text)
    }

    const handleSave = async () => {
        if ((newTitle.length > 5 || newText.length > 5) || (newText !== text && newTitle !== title)) {
            try {
                const updateResponse = await updateProject(id, {
                    id: id,
                    image: image,
                    createdAt: new Date(),
                    title: newTitle,
                    text: newText,
                })
                setIsEditing(false)
                setResponse(updateResponse)
                setShowResponse(true)
                router.refresh()
            } catch (e) {
                if (e instanceof Error) {
                    setResponse(e.message)
                    setShowResponse(true)
                }
            }
        }
    }

    return (
        <div
            className={`projectDiv ${showResponse ? "showResponse" : ""}`}
            style={{ '--response-text': `"${response}"` } as React.CSSProperties}
        >
            <Image
                src={image}
                fill={true}
                alt={title || "Project"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="infoDiv">
                <div className={`ttDiv ${isEditing ? "edit" : ""}`}>
                    {isEditing ? (
                        <>
                            <textarea
                                minLength={5}
                                maxLength={25}
                                placeholder="Enter a title"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                            />
                            <textarea
                                minLength={5}
                                value={newText}
                                placeholder="Enter a body"
                                onChange={(e) => setNewText(e.target.value)}
                            />
                        </>
                    ) : (
                        <>
                            <h2 className="projectTitle">{title}</h2>
                            <p className="projectInfo">{text}</p>
                        </>
                    )}
                </div>
                <div className="infoFooter">
                    <p className="projectDate">{formatDate(createdAt)}</p>
                    {isEditing ? (
                        <>
                            <button className="cancelButton" onClick={handleCancel}>
                                cancel
                            </button>
                            <button
                                className="saveButton"
                                disabled={(newTitle.length < 5 || newText.length < 5) || (newText === text && newTitle === title)}
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="editButton" onClick={handleEdit}>
                                Edit
                            </button>
                            <button className="deleteButton" onClick={handleDelete}>
                                Delete
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Project
