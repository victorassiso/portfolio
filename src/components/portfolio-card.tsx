'use client'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface PortfolioCardProps {
  tumbnail: string
  title: string
  link: string
  description: string
  skills: string[]
  images: {
    path: string
    caption: string
  }[]
}

export function PortfolioCard({
  tumbnail,
  title,
  link,
  description,
  skills,
  images,
}: PortfolioCardProps) {
  return (
    <Dialog>
      <div className="flex flex-col gap-6 py-10 pl-7">
        <div className="flex flex-col gap-6 transition-all duration-300 ease-in-out hover:scale-125">
          <DialogTrigger className="relative h-[232px] w-[300px]">
            <Image
              src={tumbnail}
              alt=""
              layout="fill"
              objectFit="contain"
              className="cursor-pointer transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-muted"
            />
          </DialogTrigger>
          <DialogTrigger className="hover:pointer text-xl text-muted-foreground underline">
            {title}
          </DialogTrigger>
        </div>
      </div>
      <DialogContent className="max-h-[90%] overflow-y-auto rounded-lg">
        <DialogHeader>
          <DialogTitle className="font-title text-3xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-8 pb-20">
          <Carousel className="mx-auto w-full px-6">
            <CarouselContent className="-ml-1 h-[500px]">
              {images.map((image, index) => (
                <CarouselItem key={index} className="relative h-full w-full">
                  {image.path.includes('.mp4') ? (
                    <video
                      src={image.path}
                      autoPlay
                      loop
                      muted
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Image
                      src={image.path}
                      alt={image.caption}
                      layout="fill"
                      objectFit="contain"
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-8" />
            <CarouselNext className="mr-8" />
          </Carousel>

          <div className="flex flex-col gap-2">
            <span className="font-title text-lg font-semibold">
              Skills and deliverables
            </span>
            <div className="flex flex-wrap gap-1 space-x-1">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="inline-block rounded-[5rem] bg-primary px-2 py-0.5 font-title text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-title text-lg font-semibold">
              Project description
            </span>
            <span className="text-sm text-muted-foreground">{description}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-title text-lg font-semibold">
              Avalable at:
            </span>
            <a
              href={link}
              target="_blank"
              className="cursor-pointer text-sm underline"
            >
              {link}
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
