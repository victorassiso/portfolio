interface PersonalityCardProps {
  percentage: number
  title: string
  description: string
}

export function PersonalityCard({
  percentage,
  title,
  description,
}: PersonalityCardProps) {
  return (
    <div className="flex w-48 flex-col items-center gap-4">
      <div className="">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-card">
          <span className="z-10 ml-6 font-title text-2xl font-black">
            {percentage}%
          </span>
          <div className="absolute inset-0 z-0 rounded-full border-2 border-primary" />
        </div>
      </div>
      <span className="text-xl font-extrabold">{title}</span>
      <span className="text-center text-sm">{description}</span>
    </div>
  )
}
