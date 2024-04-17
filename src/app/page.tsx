'use client'

import { Header } from '@/components/header'
import { Me } from '@/components/me'
import { Personality } from '@/components/personality'
import { Portfolio } from '@/components/portfolio'
import { Skills } from '@/components/skills'
import { Stacks } from '@/components/stacks'

export default function Home() {
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')
    nav?.classList.toggle('sticky', window.scrollY > 155)
  })

  return (
    <div className="relative h-full w-full overflow-y-scroll">
      <div className="mx-auto flex min-w-[320px] max-w-screen-2xl cursor-default flex-col gap-32 overflow-y-scroll px-8 pb-48 sm:px-10 md:px-20 lg:px-28 xl:px-32">
        <Header />
        <Me />
        <Stacks />
        <Skills />
        <Portfolio />
        <Personality />
        <div className="absolute -top-[400px] left-0 right-0 z-0 mx-auto h-[700px] max-w-screen-2xl rounded-[50%] bg-black" />
      </div>
    </div>
  )
}
