import Hero from "@/components/Hero";
import NavigateArea from "@/components/NavigateArea";
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
    </>
  );
}
