import Image from 'next/image'

interface StackCardProps {
  tag?: string
  name: string
  icon: string
}

export function StackCard({ tag, name, icon }: StackCardProps) {
  return (
    <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 bg-card">
      <div className="inline-flex h-4 w-full">
        {tag && (
          <div className="inline-flex items-center gap-1 bg-card-foreground pl-2">
            <span className="text-xs uppercase leading-none text-muted-foreground">
              {tag}
            </span>
            <div className="h-0 w-0 border-b-[0.5rem] border-r-[0.5rem] border-t-[0.5rem] border-transparent border-r-card" />
          </div>
        )}
      </div>
      <Image src={icon} alt="tech icon" width={44} height={44} />
      <span className="font-extrabold uppercase">{name}</span>
    </div>
  )
}
