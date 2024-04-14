import { ReactNode } from 'react'

import { cn } from '@/libs/utils'

interface SectionProps {
  children?: ReactNode
  className?: string
}

export function SectionContainer(props: SectionProps) {
  return (
    <div className={cn('flex flex-col gap-10 py-8', props.className)}>
      {props.children}
    </div>
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
    <span className={cn('font-title text-3xl font-bold', props.className)}>
      {props.children}
    </span>
  )
}

export function SectionDescription(props: SectionProps) {
  return (
    <span className={cn('text-muted max-w-[25rem]', props.className)}>
      {props.children}
    </span>
  )
}

export function SectionContent(props: SectionProps) {
  return <span className={cn('', props.className)}>{props.children}</span>
}

export function SectionPagination(props: SectionProps) {
  return (
    <span className={cn('text-muted text-sm', props.className)}>
      {props.children}
    </span>
  )
}
