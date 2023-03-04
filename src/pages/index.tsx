import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import ThreeScenes from "@/components/three/ThreeScenes";
import { Dragon } from "@/components/three/models/Dragon";
import HeroContents from "@/components/main/HeroContents";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <color attach="background" args={["#242129"]} />
      <ambientLight intensity={1} color="white" />

      <ThreeScenes />
      <HeroContents />
    </>
  );
}
