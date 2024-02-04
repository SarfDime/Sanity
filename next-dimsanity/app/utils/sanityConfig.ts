import "server-only"

import {
    createClient,
} from "next-sanity"

export const client = createClient({
    projectId: "k1wihv4k",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true,
})

export async function sanityFetch<QueryResponse>({
    query,
    tags,
}: {
    query: string
    tags: string[]
}): Promise<QueryResponse> {
    return client.fetch<QueryResponse>(query, {}, {
        cache: "force-cache",
        next: { tags },
    })
}