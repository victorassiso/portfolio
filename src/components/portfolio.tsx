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
        <SectionDescription>
          Projects that I built for learning and practicing
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="flex gap-24 overflow-auto pb-2">
        {projects.map(
          ({ title, description, tumbnail, images, skills, link }) => (
            <PortfolioCard
              title={title}
              description={description}
              tumbnail={tumbnail}
              images={images}
              skills={skills}
              link={link}
            />
          ),
        )}
      </SectionContent>
    </SectionContainer>
  )
}
