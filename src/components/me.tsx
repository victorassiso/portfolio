import Image from 'next/image'

import { cn } from '@/libs/utils'

import { Button } from './ui/button'

interface MeProps {
  className?: string
}

export function Me({ className }: MeProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between py-10 md:flex-row',
        className,
      )}
    >
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
          <Button asChild size="lg" className="tex-xl font-bold uppercase">
            <a
              href="/cv/victor_assis_cv_en.pdf"
              download="VICTOR_ASSIS_CV_EN"
              className="flex items-center gap-2"
            >
              Download Resume
            </a>
          </Button>
        </div>
      </div>
      <div className="hidden xl:block">
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
