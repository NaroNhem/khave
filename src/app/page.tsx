import { WavyBackground } from "@/components/ui/wavy-background";
import Navbar from "./components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function Home() {

  return (
    <main className="flex flex-col justify-center m-0">
        <Navbar/>
        <WavyBackground 
        containerClassName="m-0"
        className=""
        children={
        <div className="flex flex-col items-center justify-evenly h-1/2">
          <div className="text-[2rem] lg:text-[6rem] md:text-[4rem]">AI <span className="font-bold">Personalized</span></div>
          <p className="text-center">Order the coffee you want from the source with your chosen frequency and roast.<br></br>
          Sustainable, affordable, and always fresh. We provide the coffee and the tools you need to enjoy the best cup of coffee you ever had.  
          </p>
          <Button variant="outline" className="group mt-10 z-50 ">Get Started <MoveRight  className="ml-3 group-hover:ml-6 duration-300"/></Button>
        </div>
      }/>
      <div>
        Hello World
      </div>
    </main>
  );
}
