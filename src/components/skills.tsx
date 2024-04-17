import { SkillCard } from './skill-card'
import {
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from './ui/section'

export function Skills() {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>My superpowers</SectionTitle>
        <SectionDescription>
          Some people also call them skills
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="flex gap-14 overflow-x-scroll py-7 pl-4">
        <SkillCard
          icon="/rocket.svg"
          title="Efficiency"
          description="Automated tasks & produced bug free and highly performant code."
        />
        <SkillCard
          icon="/badge.svg"
          title="Excellence"
          description="Solved complex system integration challenges & received recognition."
        />
      </SectionContent>
    </SectionContainer>
  )
}
