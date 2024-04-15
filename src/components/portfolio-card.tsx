import Image from 'next/image'

interface PortfolioCardProps {
  tumbnail: string
  title: string
  link: string
}

export function PortfolioCard({ tumbnail, title, link }: PortfolioCardProps) {
  return (
    <div className="flex w-[18.75rem] flex-col gap-6">
      <Image src={tumbnail} alt="" width={300} height={232} />
      <a
        href={link}
        target="_blank"
        className="text-muted-foreground hover:pointer text-xl underline"
      >
        {title}
      </a>
    </div>
  )
}
