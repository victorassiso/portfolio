import Image from 'next/image'

interface StackCardProps {
  icon: string
  title: string
  description: string
}

export function SkillCard({ icon, title, description }: StackCardProps) {
  return (
    <div className="flex w-48 flex-col items-center gap-4">
      <div className="bg-card flex h-16 w-16 items-center justify-center rounded-full">
        <Image src={icon} alt="" width={24} height={24} />
      </div>
      <span className="text-xl font-extrabold">{title}</span>
      <span className="text-muted-foreground text-center">{description}</span>
    </div>
  )
}