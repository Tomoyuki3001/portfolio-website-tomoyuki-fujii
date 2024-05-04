import Main from "../components/Main.jsx";
import Head from "next/head";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Navbar from "../components/Navbar.jsx";
import Experiences from "../components/Experiences.jsx";
import Footer from "@/components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tomoyuki Fujii</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Title.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
