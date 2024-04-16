import { Header } from '@/components/header'
import { Me } from '@/components/me'
import { Personality } from '@/components/personality'
import { Portfolio } from '@/components/portfolio'
import { Skills } from '@/components/skills'
import { Stacks } from '@/components/stacks'

export default function Home() {
  return (
    <div className="relative mx-auto flex max-w-screen-2xl cursor-default flex-col gap-32 px-32 pb-48">
      <Header />
      <Me />
      <Stacks />
      <Skills />
      <Portfolio />
      <Personality />
      <div className="absolute -top-[400px] left-0 right-0 z-0 mx-auto h-[700px] max-w-screen-2xl rounded-[50%] bg-black" />
    </div>
  )
}
