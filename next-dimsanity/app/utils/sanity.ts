import { CtaSection } from "../components/CTA/cta-interface"
import { InfoSection } from "../components/Info/info-interface"
import { sanityFetch } from "./sanityConfig"

type Section = CtaSection | InfoSection

export async function fetchData(): Promise<Section[]> {
    const query = `*[_type == "hero"][0].sections[]`
    const data = await sanityFetch({
        query,
        tags: ["hero"]
    })
    return data as Section[]
}
