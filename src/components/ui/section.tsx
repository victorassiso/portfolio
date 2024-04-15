'use client'

import 'aos/dist/aos.css'

import AOS from 'aos'
import { ReactNode, useEffect } from 'react'

import { cn } from '@/libs/utils'

interface SectionProps {
  children?: ReactNode
  className?: string
}

export function SectionContainer(props: SectionProps) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    })
  })
  return (
    <section
      className={cn('flex flex-col gap-10 py-8', props.className)}
      data-aos="fade-up"
    >
      {props.children}
    </section>
  )
}

export function SectionHeader(props: SectionProps) {
  return (
    <div className={cn('flex flex-col gap-2', props.className)}>
      {props.children}
    </div>
  )
}

export function SectionTitle(props: SectionProps) {
  return (
    <h2 className={cn('font-title text-3xl font-bold', props.className)}>
      {props.children}
    </h2>
  )
}

export function SectionDescription(props: SectionProps) {
  return (
    <span
      className={cn('max-w-[25rem] text-muted-foreground', props.className)}
    >
      {props.children}
    </span>
  )
}

export function SectionContent(props: SectionProps) {
  return <span className={cn('', props.className)}>{props.children}</span>
}

export function SectionPagination(props: SectionProps) {
  return (
    <span className={cn('text-sm text-muted', props.className)}>
      {props.children}
    </span>
  )
}
