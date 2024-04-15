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
          Shipping knowledge in all the leading tech stacks that is a part of
          every high-growth organization
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="flex gap-8">
        <StackCard tag="Frontend Web" icon="./react.svg" name="React JS" />
        <StackCard tag="Backend Web" icon="./node.svg" name="Node.js" />
        <StackCard icon="./typescript.svg" name="Typescript" />
        <StackCard icon="./c-plus-plus.svg" name="C++" />
        <StackCard icon="./python.svg" name="Python" />
      </SectionContent>
    </SectionContainer>
  )
}
