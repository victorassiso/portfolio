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
        <ul className="flex items-center justify-between text-muted-foreground">
          <li>
            <div className="h-0.5 w-36 bg-gradient-to-l from-muted" />
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
            <div className="h-0.5 w-36 bg-gradient-to-r from-muted" />
          </li>
        </ul>
      </div>
    </div>
  )
}
