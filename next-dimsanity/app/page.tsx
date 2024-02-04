import CTA from "@/app/components/CTA/CTA"
import { CtaSection } from "@/app/components/CTA/cta-interface"
import Info from "@/app/components/Info/Info"
import { InfoSection } from "@/app/components/Info/info-interface"
import { fetchData } from "@/app/utils/sanity"

type Section = CtaSection | InfoSection

export default async function Home() {
  const data = await fetchData()
  return (
    <main className="heroMain">
      {data.map((section: Section) => {
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
