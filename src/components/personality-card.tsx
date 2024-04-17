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
    <div className="flex min-w-52 flex-col items-center gap-4 transition-all duration-300 ease-in-out hover:scale-125">
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
