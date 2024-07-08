import { WavyBackground } from "@/components/ui/wavy-background";
import Navbar from "./components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Cards from "./components/cards";
import Image from "next/image";
import Footer from "./components/footer";

export default function Home() {
  
  return (
    <main className="flex flex-col justify-center m-0">
        <Navbar/>
        <WavyBackground 
        containerClassName="m-0 p-5"
        className=""
        children={
        <div className="flex flex-col items-center justify-evenly h-1/2">
          <div className="text-[2rem] lg:text-[6rem] md:text-[4rem]">AI <span className="font-bold">Personalized</span></div>
          <p className="text-center p-3 text-md">Discover solutions. Spark creativity. Boost your productivity.<br></br>
          No cost involved. Simple to experiment with. Simply ask, and KhaveAI can assist with writing, studying, ideation, and beyond.  
          </p>
          <Button variant="outline" className="group mt-10 z-9 ">Get Started <MoveRight  className="ml-3 group-hover:ml-6 duration-300"/></Button>
        </div>
      }/>
        <Cards/>
        <div className=" flex justify-center dark:bg-black p-10">
          <div className="md:w-[58rem] md:flex items-center justify-between">
            <p className="text-2xl">Discover how KhaveAI can make an impact on your life</p>
            <Button variant="outline" className="group md:m-0 mt-10">Get Started <MoveRight  className="ml-3 group-hover:ml-6 duration-300"/></Button>
          </div>
        </div>
        <Footer />
    </main>
  );
}
