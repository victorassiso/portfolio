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
      <div className="flex w-[18.75rem]  flex-col gap-6">
        <DialogTrigger className="relative h-[232px] w-[300px]">
          <Image
            src={tumbnail}
            alt=""
            // width={300}
            // height={232}
            layout="fill"
            objectFit="contain"
            className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-muted"
          />
        </DialogTrigger>
        <DialogTrigger className="hover:pointer text-xl text-muted-foreground underline">
          {title}
        </DialogTrigger>
      </div>
      <DialogContent className="max-h-[80%] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-8">
          <Carousel className="mx-auto w-full px-6">
            <CarouselContent className="-ml-1 h-[330px]">
              {images.map((image, index) => (
                <CarouselItem key={index} className="relative h-full w-full">
                  {/* <MapInteractionCSS> */}
                  <Image
                    src={image.path}
                    alt={image.caption}
                    // width={422}
                    // height={349}
                    layout="fill"
                    objectFit="contain"
                  />
                  {/* </MapInteractionCSS> */}
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <span className="text-sm text-muted-foreground">Caption</span> */}
            <CarouselPrevious className="ml-8" />
            <CarouselNext className="mr-8" />
          </Carousel>

          <div className="flex flex-col gap-2">
            <span className="font-title font-bold">
              Skills and deliverables
            </span>
            <div className="flex flex-wrap gap-1 space-x-1">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="inline-block rounded-[5rem] bg-muted px-2 py-0.5 text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span>Project description</span>
            <span className="text-sm">{description}</span>
          </div>

          <div className="flex flex-col gap-2">
            <span>Avalable at:</span>
            <a
              href={link}
              target="_blank"
              className="cursor-pointer text-sm text-primary underline"
            >
              {link}
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
