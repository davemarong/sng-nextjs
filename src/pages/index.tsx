import Image from "next/image";
import { Inter } from "next/font/google";
import HeroImage from "@/components/heroImage/HeroImage";
import Banner1 from "@/components/banners/Banner1";
import Banner2 from "@/components/banners/Banner2";
import Banner3 from "@/components/banners/Banner3";
import Reviews from "@/components/banners/Reviews";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroImage />
      <Banner1 />
      {/* <Banner2 />
      <Banner3 />
      <Reviews /> */}
    </>
  );
}
