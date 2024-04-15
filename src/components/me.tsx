import Image from 'next/image'

import { cn } from '@/libs/utils'

interface MeProps {
  className?: string
}

export function Me({ className }: MeProps) {
  return (
    <div className={cn('flex items-center justify-between py-8', className)}>
      <div className="flex flex-col gap-4">
        <h1 className="font-title text-6xl font-bold">
          <span className="block">Software Engineer</span>
          <span className="block">& Tech Enthusiast</span>
        </h1>
        <div className="text-muted-foreground">
          <span className="block">
            I&apos;m Victor, I assist enterprises & start-ups in their vision,
            through
          </span>
          <span className="block">
            technical consultation as well as hands on codebase work.
          </span>
        </div>
        <div>
          <button className="tex-xl bg-primary px-6 py-4 font-bold uppercase transition-opacity duration-200 ease-in-out hover:opacity-80">
            DOWNLOAD RESUME
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/profile.png"
          alt="Profile picture"
          width={380}
          height={380}
        />
      </div>
    </div>
  )
}
