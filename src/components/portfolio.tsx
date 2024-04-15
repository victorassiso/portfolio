import { PortfolioCard } from './portfolio-card'
import {
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from './ui/section'

export function Portfolio() {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>My portfolio</SectionTitle>
        <SectionDescription>
          Projects that I built for learning and practicing
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="flex justify-between">
        <PortfolioCard
          tumbnail="/print-adas.png"
          title="Next.js + Firebase pet adoption platform"
          link={'https://adas-saquarema.vercel.app/'}
        />
        <PortfolioCard
          tumbnail="/print-delivery-shop.png"
          title="Full stack React + Node.js restaurant delivery management system"
          link={'https://deliveryshop.victorassis.eng.br/'}
        />
        <PortfolioCard
          tumbnail="/print-credphone.png"
          title="WordPress + React website with price simulation tool"
          link={'https://credphone.pt'}
        />
      </SectionContent>
    </SectionContainer>
  )
}
