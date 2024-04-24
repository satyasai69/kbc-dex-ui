import Image from "next/image";
import {GlobeDemo } from "@/app/comp/earth"
import {GoogleGeminiEffectDemo} from "@/app/comp/gem"
import {AnimatedPinDemo} from "@/app/comp/Animated-Pin"
import { AnimatedPinDemo2 } from "./comp/AnimaterPin2";
import {AnimatedTooltipPreview} from "@/app/comp/team"
import {FloatingNavDemo} from "@/app/comp/navbar"
import { FloatingNav } from "@/app/comp/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { isMapIterator } from "util/types";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "swap",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "bridge",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];


  // main classname css === flex min-h-screen flex-col items-center justify-between p-24
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-54">
       <FloatingNav navItems={navItems} />
      <GlobeDemo/>
      
     <AnimatedTooltipPreview/>

     <div className="flex flex-col md:flex-row">
     <AnimatedPinDemo />
     <AnimatedPinDemo2/> 
    </div>
     
      <GoogleGeminiEffectDemo/>
    </main>
  );
}
