import Image from 'next/image'

export function Header() {
  return (
    <header className="z-10 flex w-full flex-col gap-12 pb-6 pt-12 sm:pb-12 lg:pb-28">
      {/* Trademark & Logo */}
      <div className="z-10 flex w-full items-center justify-center gap-4">
        <Image src="./logo.svg" width={52} height={52} alt="Logo" />
        <span className="text-3xl font-bold uppercase">Victor Assis</span>
      </div>
      <nav className="absolute left-0 top-40 hidden  w-full lg:block">
        <div className="nav-child transition-all duration-1000 ease-in-out">
          <ul className="top-28 mx-auto flex max-w-screen-lg items-center justify-between text-muted-foreground transition-all duration-1000 ease-in-out">
            <li>
              <div className="h-0.5 w-36 bg-gradient-to-l from-muted" />
            </li>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#stacks">STACKS</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#about">ABOUT ME</a>
            </li>
            <li>
              <div className="h-0.5 w-36 bg-gradient-to-r from-muted" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
