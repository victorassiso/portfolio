import Image from 'next/image'

interface SkillCardProps {
  icon: string
  title: string
  description: string
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="flex w-48 flex-col items-center gap-4 hover:scale-125">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card">
        <Image src={icon} alt="" width={24} height={24} />
      </div>
      <span className="text-xl font-extrabold">{title}</span>
      <span className="text-center text-muted-foreground">{description}</span>
    </div>
  )
}
