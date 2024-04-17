import { Download } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/libs/utils'

import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface MeProps {
  className?: string
}

export function Me({ className }: MeProps) {
  return (
    <div className={cn('flex items-center justify-between py-10', className)}>
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
          {/* <button className="tex-xl bg-primary px-6 py-4 font-bold uppercase transition-opacity duration-200 ease-in-out hover:opacity-80">
            DOWNLOAD RESUME
          </button> */}
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="tex-xl font-bold uppercase">
                Download Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="!max-w-screen-xs">
              <DialogHeader>
                <DialogTitle>Choose a language</DialogTitle>
                <DialogDescription>
                  You can download my resume in English or Portuguese.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-around pt-6">
                <Button asChild>
                  <a
                    href="/cv/victor_assis_cv_en.pdf"
                    download="VICTOR_ASSIS_CV_EN"
                    className="flex gap-2"
                  >
                    <Download />
                    English
                  </a>
                </Button>
                <Button asChild>
                  <a
                    href="/cv/victor_assis_cv_pt.pdf"
                    download="VICTOR_ASSIS_CV_PT"
                    className="flex gap-2"
                  >
                    <Download />
                    Português
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
