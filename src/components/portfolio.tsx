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
      <SectionContent className="flex gap-24 overflow-auto pb-2">
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
        <PortfolioCard
          tumbnail="/print-coffee-delivery.png"
          title="React coffee delivery e-commerce"
          link={'https://victorassiso.github.io/coffee-delivery/'}
        />
        <PortfolioCard
          tumbnail="/print-timer.png"
          title="React Timer & Task Tracker"
          link={'https://victorassiso.github.io/timer/'}
        />
      </SectionContent>
    </SectionContainer>
  )
}
