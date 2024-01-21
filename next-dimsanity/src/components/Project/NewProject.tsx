"use client"
import { createProject } from "@/utils/project-api"
import React, { useEffect, useState } from "react"

function NewProject() {
    const [showForm, setShowForm] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

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

    const handleSave = async () => {
        if (title.length > 5 && text.length > 5) {
            try {
                const updateResponse = await createProject(title, text)
                setShowForm(false)
                setText('')
                setTitle('')
                setResponse(updateResponse)
                setShowResponse(true)
            } catch (e) {
                if (e instanceof Error) {
                    setResponse(e.message)
                    setShowResponse(true)
                }
            }
        }
    }

    return (
        <>
            <button
                className={`showButton ${showForm ? "hideButton" : ""} ${showResponse ? "showResponse" : ""}`}
                onClick={() => setShowForm(!showForm)}
                style={{ '--response-text': `"${response}"` } as React.CSSProperties}
            >
                <svg
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15.5 12H12m0 0H8.5m3.5 0V8.5m0 3.5v3.5M3 12c0-4.243 0-6.364 1.318-7.682C5.636 3 7.758 3 12 3c4.243 0 6.364 0 7.682 1.318C21 5.636 21 7.758 21 12c0 4.243 0 6.364-1.318 7.682C18.364 21 16.242 21 12 21c-4.243 0-6.364 0-7.682-1.318C3 18.364 3 16.242 3 12"
                    />
                </svg>
            </button>
            {showForm && (
                <div className="newProjectDiv">
                    <div className="ttDiv">
                        <h3>
                            Title <span>(required)</span>
                        </h3>
                        <input
                            minLength={5}
                            maxLength={25}
                            placeholder="Enter a title"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <h3>
                            Body <span>(required)</span>
                        </h3>
                        <textarea
                            minLength={5}
                            placeholder="Enter a body"
                            required
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            className="cancelButton"
                            onClick={() => setShowForm(!showForm)}
                        >
                            Cancel
                        </button>
                        <button
                            className="saveButton"
                            onClick={handleSave}
                            disabled={title.length < 5 || text.length < 5}
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default NewProject
