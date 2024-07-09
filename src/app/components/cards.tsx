import React from 'react'
import Image from 'next/image'


type Props = {}

const Cards = (props: Props) => {
  return (
    <section className="dark:bg-black">
        <div className="flex flex-col justify-center items-center  text-center pt-16 gap-9"> 
          <p className="text-balance w-full md:text-4xl text-xl mx-auto">Writes, brainstorms, edits, and explores ideas with you</p>
          <Image
          src="/chatgpt1.png"
          width={950}
          height={950}
          alt="Picture of example"
          className="hidden my-4 rounded-lg md:block"/>
          <Image
          src="/chatgpt1mob.png"
          width={400}
          height={400}
          alt="Picture of example"
          className="my-4 rounded-lg md:hidden"/>
        </div>
        <div className="flex flex-col justify-center items-center  text-center pt-12 gap-9"> 
          <p className="text-balance w-full md:w-[40rem] md:text-4xl text-xl mx-auto">Summarize meetings. Find new insights. Increase productivity.</p>
          <Image
          src="/chatgpt1.png"
          width={950}
          height={950}
          alt="Picture of example"
          className="hidden my-4 rounded-lg md:block"/>
          <Image
          src="/chatgpt1mob.png"
          width={400}
          height={400}
          alt="Picture of example"
          className="my-4 rounded-lg md:hidden"/>
        </div>
        <div className="flex flex-col justify-center items-center  text-center pt-12 gap-9 pb-24"> 
          <p className="text-balance w-full md:w-[40rem] md:text-4xl text-xl mx-auto">Generate and debug code. Automate repetitive tasks. Learn new APIs.</p>
          <Image
          src="/chatgpt1.png"
          width={950}
          height={950}
          alt="Picture of example"
          className="hidden my-4 rounded-lg md:block"/>
          <Image
          src="/chatgpt1mob.png"
          width={400}
          height={400}
          alt="Picture of example"
          className="my-4 rounded-lg md:hidden"/>
        </div>
      </section>
  )
}

export default Cards