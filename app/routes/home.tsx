
import HeroSection from "~/HeroSection";
import type { Route } from "./+types/home";
import Navbar from "~/Navbar";
import Footer from "~/Footer";
import Feauters from "~/Feauters";
import TurnProfit from "~/TurnProfit";
import Stats from "~/Stats";
import Team from "~/Team";
import BrandsCollab from "~/BrandsCollab";



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
     <Feauters/>
     <BrandsCollab/>
     <TurnProfit/>
     <Stats/>
     <Team/>
     <Footer/>
    </>
  )
}
