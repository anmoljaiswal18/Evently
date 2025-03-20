
import HeroSection from "~/HeroSection";
import type { Route } from "./+types/home";
import Navbar from "~/Navbar";
import Footer from "~/Footer";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Evently" },
    { name: "Evently", content: "Welcome to Evently" },
  ];
}

export default function Home() {
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <Footer/>
    </>
  )
}
