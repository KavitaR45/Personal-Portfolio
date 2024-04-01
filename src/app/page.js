import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ModeToggle } from "@/components/ui/model-toggle";
import { Button } from "@/components/ui/button"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from "next/image";
import Spotlight from "@/components/ui/spotlight";
export const products = [
  {
    title: "ClickFactory",
    link: "https://clickfactoryphotography.in/",
    thumbnail: "/portfolio/clickfactory.png"
  },
  {
    title: "Glastone Mosaic",
    link: "https://glastonemosaic.com/",
    thumbnail: "/portfolio/glastone.png",
  },
  {
    title: "Parrot Crow",
    link: "https://parrotcrow.in/",
    thumbnail: "/portfolio/parrot-crow.png",
  },
 
  {
    title: "Data As Services",
    link: "https://dataasservices.com/",
    thumbnail: "/portfolio/data-as-services.png",
  }, 
  {
    title: "Sifutani",
    link: "https://sifutani.com/",
    thumbnail: "/portfolio/sifutani.png",
  },
   {
    title: "Wedding Vows",
    link: "https://weddingvows.com/",
    thumbnail: "/portfolio/wedding-vow.png",
  },
  {
    title: "Dr Swaroop",
    link: "https://drswaroopsdentalcare.com/",
    thumbnail: "/portfolio/dental.png"
  },
  {
    title: "Nri Legal Service",
    link: "https://www.nrilegalservice.com/",
    thumbnail: "/portfolio/nri.png"
  },
  {
    title: "WvStor",
    link: "https://www.wvstor.com/",
    thumbnail: "/portfolio/wvstor.png"
  },
  {
    title: "Move On",
    link: "#",
    thumbnail: "/portfolio/move-on.png"
  },
  {
    title: "Garg Aviation",
    link: "https://gargaviation.com/",
    thumbnail: "/portfolio/garg-aviation.png"
  },
  {
    title: "Technovature",
    link: "https://technovature.com/",
    thumbnail: "/portfolio/technovature.png"
  },
  {
    title: "BotForAll",
    link: "https://botforall.com/",
    thumbnail: "/portfolio/botforall.png"
  },
  {
    title: "Nisha",
    link: "https://nishakreates.com/",
    thumbnail: "/portfolio/nisha.png"
  },
  {
    title: "Manav Ghosh",
    link: "https://manavghosh.tech/",
    thumbnail: "/portfolio/manavghosh.png"
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default function Home() {

  return (
    <>
      <ContainerScroll
        titleComponent={
          <>
            <div className="flex flex-col items-center justify-center h-[20rem]  ">
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[4.8rem] font-bold mt-40 leading-none">
                  Frontend Development
                </span>
              </h1>
              {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <Button className="w-40 h-10 rounded-xl bg-black border dark:border-white dark:text-white dark:hover:text-black border-transparent text-white text-sm">
                  Join now
                </Button>
                <Button variant="outline" className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                  Signup
                </Button>
              </div> */}
            </div>

          </>
        }
      >
        <Image
          src={`/banner1.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      {/* About Us section */}
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl mb-10 md:text-7xl font-bold text-center bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            About
          </h1>
          <p className="mt-4 md:text-xl  font-normal text-base dark:text-neutral-300  text-center mx-auto">
            Welcome to my corner of the web! As a seasoned senior frontend developer with a passion for both learning and leadership, I bring a wealth of experience to the table. From spearheading teams and driving technical innovation to mastering a spectrum of frontend technologies including HTML5, CSS, JavaScript (with React.js or Next.js frameworks), and ERPNext, I thrive in dynamic environments where creativity meets precision.
          </p>
          <p className="mt-4 md:text-xl  font-normal text-base dark:text-neutral-300  text-center mx-auto">
            My commitment to excellence extends beyond technical prowess to effective project management methodologies like Agile, Git version control, and more. With a focus on seamless communication and fostering professional growth within teams, I aim to deliver exceptional results while keeping pace with industry trends. Let's connect and explore how we can collaborate to elevate your digital endeavors.
          </p>
        </div>
      </div>
      {/* Portfolio section */}
      <HeroParallax products={products} />
      {/* Testimonial Section hidden */}
      {/* <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl mb-10 md:text-7xl font-bold text-center bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Testimonial
        </h1>
        <p className="mt-4 md:text-xl font-normal text-base dark:text-neutral-300 max-w-lg text-center mx-auto">
        What Others Say About Working With Me
        </p>
      </div>
      <div className="h-[20rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div> */}
      {/* Footer */}
      <div className=" top-0 right-0  left-0 p-8 flex items-center justify-between z-30">
        <aside className="flex items-center gap-2">
          <span className="text-l font-bold"> © 2024. All rights reserved.</span>
        </aside>
        <aside className="flex gap-2 items-center">
          {/* LinkedIn icon */}
          <a href="https://www.linkedin.com/in/kavita-rawat-6492a92a3/" target="_blank">
            <FaLinkedin className="w-6 h-6" />
          </a>
          {/* GitHub icon */}
          <a href="https://github.com/KavitaR45" target="_blank">
            <FaGithub className="w-6 h-6" />
          </a>
        </aside>
      </div>
    </>
  );
}
