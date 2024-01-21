import { createClient } from "next-sanity"

export const client = createClient({
    projectId: "k1wihv4k",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true,
})