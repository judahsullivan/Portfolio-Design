import { settings } from '@/utils/data';
import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';

export default function Navbar({}) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.header
      variants={{
        visible: {
          y: 0
        },
        hidden: {
          y: '-100%'
        }
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{
        duration: 0.5,
        ease: 'linear'
      }}
      className="z-20 w-full h-16 fixed  top-0 backdrop-filter backdrop-blur-md "
    >
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
    </motion.header>
  );
}
