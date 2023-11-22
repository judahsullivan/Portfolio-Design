import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function FeaturedArticles() {
  return (
    <section className="max-w-6xl mx-auto min-h-screen ">
      <h4 className="font-basement text-4xl tracking-tight font-extrabold">
        Featured Articles
      </h4>
      <div className="mx-auto max-w-4xl">
        <Link
          heading="Blog 1"
          subheading="Learn what we do here"
          imgSrc="https://images.unsplash.com/photo-1697305188973-ba72818c71a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="blog  2"
          subheading="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          imgSrc="https://images.unsplash.com/photo-1699724684231-4774fd188536?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Blog  3"
          subheading="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          imgSrc="https://images.unsplash.com/photo-1651497634590-ce388a6a686a?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
      </div>
    </section>
  );
}

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-900  transition-colors duration-500 hover:border-neutral-900 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0, y: 0 },
            whileHover: { x: -7, y: -5 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 font-aileron block text-4xl font-extrabold text-theme-base transition-colors duration-500 group-hover:text-theme-accent "
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0, y: 0 },
                whileHover: { x: 7, y: 5 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <p>Date | MM-DD-YYY</p>
        <span className="relative z-10 mt-2 block text-base text-theme-muted">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-them-accent" />
      </motion.div>
    </motion.a>
  );
};
