import Image from 'next/image'

export function Header() {
  return (
    <div className="z-10 flex w-full flex-col gap-12  pb-28 pt-12">
      {/* Trademark & Logo */}
      <div className="z-10 flex w-full items-center justify-center gap-4">
        <Image src="./logo.svg" width={52} height={52} alt="Logo" />
        <span className="text-3xl font-bold uppercase">Victor Assis</span>
      </div>
      <div>
        <ul className="text-muted-foreground flex items-center justify-between">
          <li>
            <div className="from-muted h-0.5 w-36 bg-gradient-to-l" />
          </li>
          <li>
            <span>HOME</span>
          </li>
          <li>
            <span>ABOUT ME</span>
          </li>
          <li>
            <span>MY WORK</span>
          </li>
          <li>
            <span>CONTACT</span>
          </li>
          <li>
            <div className="from-muted h-0.5 w-36 bg-gradient-to-r" />
          </li>
        </ul>
      </div>
    </div>
  )
}
