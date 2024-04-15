import { PersonalityCard } from './personality-card'
import {
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from './ui/section'

export function Personality() {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Personality Type</SectionTitle>
        <SectionDescription className="flex flex-col">
          <span className="text-2xl">Architect (INTJ-A)</span>
          <span>
            <strong>Role</strong>: Analyst
          </span>
          <span>
            <strong>Strategy</strong>: Confident Individualism
          </span>
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="flex justify-between">
        <PersonalityCard
          percentage={54}
          title="Introverted"
          description="Introverted individuals tend to prefer fewer, yet deep and meaningful, social interactions and often feel drawn to calmer environments."
        />
        <PersonalityCard
          percentage={66}
          title="Intuitive"
          description="Intuitive individuals are very imaginative, open-minded, and curious. They value originality and focus on hidden meanings and distant possibilities."
        />
        <PersonalityCard
          percentage={78}
          title="Thinking"
          description="Thinking individuals focus on objectivity and rationality, often dismissing emotions in favor of logic. They tend to see effectiveness as more important than social harmony."
        />
        <PersonalityCard
          percentage={79}
          title="Judging"
          description="Judging individuals are decisive, thorough, and highly organized. They value clarity, predictability, and closure, preferring structure and planning to spontaneity."
        />
        <PersonalityCard
          percentage={83}
          title="Assertive"
          description="Assertive individuals are self-assured, even-tempered, and resistant to stress. They refuse to worry too much and tend to be self-confident when striving to achieve goals."
        />
      </SectionContent>
    </SectionContainer>
  )
}
