import Activities from "@/components/Activities";
import Advantage from "@/components/Advantage";
import Characteristics from "@/components/Characteristics";
import FundamentalPrinciples from "@/components/FundamentalPrinciples";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import NavigateArea from "@/components/NavigateArea";
import QualityControl from "@/components/QualityControl";
import ServicedIndustries from "@/components/ServicedIndustries";
import Services from "@/components/Services";
import USP from "@/components/USP";
import Vision from "@/components/Vision";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero />
      <NavigateArea />
      <FundamentalPrinciples />
      <USP />
      <Activities />
      <Services />
      <ServicedIndustries />
      <QualityControl />
      <Characteristics />
      <Advantage />
      <Vision />
      <JoinUs />
    </>
  );
}
