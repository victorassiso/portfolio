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
        <StackCard tag="FRONTEND WEB" icon="./react.svg" name="REACT JS" />
        <StackCard tag="BACKEND WEB" icon="./node.svg" name="NODE.JS" />
        <StackCard icon="./typescript.svg" name="TYPESCRIPT" />
      </SectionContent>
    </SectionContainer>
  )
}
