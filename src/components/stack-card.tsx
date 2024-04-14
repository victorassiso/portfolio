import Image from 'next/image'

interface StackCardProps {
  tag?: string
  name: string
  icon: string
}

export function StackCard({ tag, name, icon }: StackCardProps) {
  return (
    <div className="bg-card flex h-36 w-36 flex-col items-center justify-center gap-3">
      <div className="inline-flex h-4 w-full">
        {tag && (
          <div className="bg-card-foreground inline-flex items-center gap-1 pl-2">
            <span className="text-muted-foreground text-xs uppercase leading-none">
              {tag}
            </span>
            <div className="border-r-card h-0 w-0 border-b-[0.5rem] border-r-[0.5rem] border-t-[0.5rem] border-transparent" />
          </div>
        )}
      </div>
      <Image src={icon} alt="tech icon" width={44} height={44} />
      <span className="font-extrabold uppercase">{name}</span>
    </div>
  )
}
