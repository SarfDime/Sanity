import { client } from "./sanityConfig"

export async function fetchData() {
    const query = `*[_type == "hero"]{sections[]}`
    const data = await client.fetch(query)
    return data
}