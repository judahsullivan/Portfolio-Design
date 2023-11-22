import { settings } from "@/utils/data";
import Link from "next/link";

export default function Navbar({}) {
  return (
    <header className="z-20 w-full h-16 fixed top-0 backdrop-filter backdrop-blur-md ">
      {settings.map((navLinks, index) => (
        <div
          key={index}
          className="flex px-2 mx-auto justify-between items-center h-full max-w-6xl"
        >
          <h4>
            <Link passHref href={navLinks.homelink.link}>
              {navLinks.homelink.title}
            </Link>
          </h4>
          <nav className="hidden md:block space-x-2">
            {navLinks.pageLinks.links.map((link) => (
              <Link passHref key={link.key} href={link.url}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      ))}
    </header>
  );
}
