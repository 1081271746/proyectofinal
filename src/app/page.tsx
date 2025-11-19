/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { useI18n } from "./i18n/I18nProvider";
import HeaderNav from "./components/HeaderNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Interests from "./components/Interests";
import Future from "./components/Future";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactInfo from "./components/ContactInfo";

export default function Home() {
  const { t } = useI18n();
  return (
    <main className="min-h-screen">
      {/* Marco exterior similar a la imagen */}
      <div className="mx-4 my-4 rounded-md border border-cyan-500/60">
        <HeaderNav />

        <Hero />

        <About />

        <Interests />

        <Future />

        <Projects />

        {/* Experiencia (interactiva) */}
        <Experience />

        <Testimonials />

        <ContactInfo />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
