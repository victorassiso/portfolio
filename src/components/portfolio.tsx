import { projects } from '@/assets/projects'

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
        <SectionDescription>Projects that I have worked on</SectionDescription>
      </SectionHeader>
      <SectionContent className="flex gap-24 overflow-auto pb-2 pl-1 pr-10">
        {projects.map((props, index) => (
          <PortfolioCard key={index} {...props} />
        ))}
      </SectionContent>
    </SectionContainer>
  )
}
