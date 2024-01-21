import CTA from "@/components/CTA/CTA"
import { CtaSection } from "@/components/CTA/cta-interface";
import Info from "@/components/Info/Info"
import { InfoSection } from "@/components/Info/info-interface";
import { fetchData } from "@/utils/sanity"

type Section = CtaSection | InfoSection;

export default async function Home() {
  const data = await fetchData()

  return (
    <main className="heroMain">
      {data[0].sections.map((section: Section) => {
        switch (section._type) {
          case 'cta':
            return <CTA key={section._key} {...section} />
          case 'info':
            return <Info key={section._key} {...section} />
          default:
            return null
        }
      })}
    </main>
  )
}
