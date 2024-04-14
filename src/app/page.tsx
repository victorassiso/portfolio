import { Header } from '@/components/header'
import { Stacks } from '@/components/stacks'

export default function Home() {
  return (
    <div className="relative mx-auto flex max-w-screen-2xl flex-col gap-12 px-48">
      <Header />
      <Stacks />
      <div className="absolute -top-[400px] left-0 right-0 z-0 mx-auto h-[700px] max-w-screen-2xl rounded-[50%] bg-black" />
    </div>
  )
}
