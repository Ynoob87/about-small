// app/page.tsx
import React from "react";

import About from "@/components/sections/About";
import Anime from "@/components/sections/Anime";
import Code from "@/components/sections/Code";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Anime />
      <Code />
      <Footer />
    </>
  );
}
