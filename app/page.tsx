"use client";;
import About from "./__component/about";
import Contact from "./__component/contact";
import Skills from "./__component/skills";
import Projects from "./__component/projects";
export default function Home() {
  return (
    <main className="px-8 md:px-20">
     <About />
     <Skills />
     <Projects/>
     <Contact />
    </main>
  );
}
