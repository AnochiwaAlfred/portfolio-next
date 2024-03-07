"use client";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';



   


const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold uy ">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm{""} </span>
                <br></br>
                <TypeAnimation
                    sequence={[
                        'The API Alchemist',
                        1200,
                        'A Web Developer',
                        1200,
                        'A Software Engineer',
                        1200,
                        'A Musicologist',
                        1200,
                        'Learning Next JS',
                        1200
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
                </h1>
                <p className="text-[#ADB7BE] text-base  sm:text-lg mb-6 lg:text-xl">
                    lorem ipsum donor sit anrt consectratir adispiscing elit
                    sed dos eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-br hover:from-blue-800 hover:via-purple-800 hover:to-pink-800 text-white">Hire Me</button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-br hover:from-blue-800 hover:via-purple-800 hover:to-pink-800 text-white mt-3">
                        <span className="block bg-[#121212]  rounded-full px-5 py-2">Download CV</span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div class="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/hero-image.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection