import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ModeToggle } from "@/components/ui/model-toggle";
import { Button } from "@/components/ui/button"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
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
    title: "Nishakreates",
    link: "https://nishakreates.com/",
    thumbnail: "/portfolio/nisha.png"
  },
  {
    title: "Manav Ghosh",
    link: "https://manavghosh.tech/",
    thumbnail: "/portfolio/manavghosh.png"
  },
];

const items = [
  {
    title: "Data As Services",
    description: "Nextjs, Strapi CMS, Custom Website",
    header: "/portfolio/data-as-services.png",
    link: "https://dataasservices.com/",
  },
  {
    title: "Wedding Vows",
    description: "Wordpress, Blog",
    header: "/portfolio/wedding-vow.png",
    link: "https://weddingvows.com/",
  },
  {
    title: "Dr Swaroop",
    description: "Custom Website. HTML, CSS, JS",
    header: "/portfolio/dental.png",
    link: "https://drswaroopsdentalcare.com/",
  },
  {
    title: "WvStor",
    description:"Woocommerce, Wordpress, Vendor",
    header: "/portfolio/wvstor.png",
    link: "https://www.wvstor.com/",
  },
  {
    title: "Garg Aviation",
    description: "Wordpress, Blog",
    header: "/portfolio/garg-aviation.png",
    link: "https://gargaviation.com/",
  },
  {
    title: "Nishakreates",
    description: "Wordpress, Portfolio, Custom Website",
    header: "/portfolio/nisha.png",
    link: "https://nishakreates.com/",
  },
  {
    title: "Technovature",
    description: "Custom Website, NextJs, CMS, Firebase",
    header: "/portfolio/technovature.png",
    link: "https://technovature.com/",
  },
];
export default function Home() {

  return (
    <>
      <section className="block md:hidden">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-semibold text-black dark:text-white mb-10">
            Unleash the power of <br />
            <span className="text-4xl md:text-[4.8rem] font-bold mt-40 leading-none">
              Frontend Development
            </span>
          </h1>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            {/* <Button className="w-40 h-10 rounded-xl bg-black border dark:border-white dark:text-white dark:hover:text-black border-transparent text-white text-sm">
                  Join now
                </Button>
                <Button variant="outline" className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                  Signup
                </Button> */}
          </div>
          <div className="mx-auto p-4">
            <Image
              src={`/banner1.webp`}
              alt="hero"
              height={720}
              width={1400}
              className="rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </div>
        </div>
      </section>
      <section className="hidden md:block">
        <ContainerScroll
          titleComponent={
            <>
              <div className="flex flex-col items-center justify-center h-[20rem]  mb-10">
                <h1 className="text-4xl font-semibold text-black dark:text-white mb-10">
                  Unleash the power of <br />
                  <span className="text-4xl md:text-[4.8rem] font-bold mt-40 leading-none">
                    Frontend Development
                  </span>
                </h1>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                  {/* <Button className="w-40 h-10 rounded-xl bg-black border dark:border-white dark:text-white dark:hover:text-black border-transparent text-white text-sm">
                  Join now
                </Button>
                <Button variant="outline" className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                  Signup
                </Button> */}
                </div>
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
      </section>
      {/* About Us section */}
      <div className="md:h-[40rem] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h2 className="text-3xl mb-10 md:text-6xl font-bold text-center bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            About
          </h2>
          <p className="mt-4 md:text-xl  font-normal text-base dark:text-neutral-300  text-center mx-auto">
            Welcome to my corner of the web! As a seasoned senior frontend developer with a passion for both learning and leadership, I bring a wealth of experience to the table. From spearheading teams and driving technical innovation to mastering a spectrum of frontend technologies including HTML5, CSS, JavaScript (with React.js or Next.js frameworks), and ERPNext, I thrive in dynamic environments where creativity meets precision.
          </p>
          <p className="mt-4 md:text-xl  font-normal text-base dark:text-neutral-300  text-center mx-auto">
            My commitment to excellence extends beyond technical prowess to effective project management methodologies like Agile, Git version control, and more. With a focus on seamless communication and fostering professional growth within teams, I aim to deliver exceptional results while keeping pace with industry trends. Let's connect and explore how we can collaborate to elevate your digital endeavors.
          </p>
        </div>
      </div>
      {/* Portfolio section */}
      <section className="hidden md:block">
        <HeroParallax products={products} />
      </section>
      <section className="block md:hidden">
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 mb-10">
          <h2 className="text-3xl mb-10 md:text-6xl font-bold text-center bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Explore My <br /> Showcase
          </h2>
          <p className="mt-4 md:text-xl  font-normal text-base dark:text-neutral-300  text-center mx-auto">
            Delve into a curated collection of projects that demonstrate my dedication to crafting innovative digital solutions. From captivating designs to seamless user experiences, each entry showcases my commitment to excellence and creativity.
          </p>

        </div>
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </section>
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
