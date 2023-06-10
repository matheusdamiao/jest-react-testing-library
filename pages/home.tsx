import Head from "next/head";
import CTA from "@/components/CTA/CTA";
import Hero from "@/components/HeroSection/Hero";
import Services from "@/components/ServicesSection/Services";

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Testing with Jest and Testing-Library </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button>agende sua consulta</button>
      <footer>olá</footer>
      <CTA /> */}
      <Hero />
      <Services />
    </div>
  );
}
