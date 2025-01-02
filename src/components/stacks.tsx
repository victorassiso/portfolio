import {
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/ui/section'

import { StackCard } from './stack-card'

export function Stacks() {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Stacks I work with</SectionTitle>
        <SectionDescription>
          Familiarity with various leading tech stacks that are part of every
          high-growth organization
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="flex gap-8 overflow-x-scroll py-5 pl-4">
        <StackCard tag="Frontend Web" icon="./react.svg" name="React JS" />
        <StackCard tag="Backend Web" icon="./node.svg" name="Node.js" />
        <StackCard icon="/typescript.svg" name="Typescript" />
        <StackCard tag="Backend Web" icon="/python.svg" name="Python" />
        <StackCard icon="/c-plus-plus.svg" name="C++" />
      </SectionContent>
    </SectionContainer>
  )
}
