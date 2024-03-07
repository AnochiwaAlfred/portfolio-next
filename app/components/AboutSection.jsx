"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>PostgreSQL</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>Bachelor of Science in Computer Science</li>
                <li>Bachelor of Arts in Arts</li>
                <li>Bachelor of Arts in Music</li>
                <li>Bachelor of Arts in Business</li>
                <li>Bachelor of Arts in Economics</li>
                
            </ul>
        )
    },
    {
        title:"Certificationa",
        id:"certifications",
        content:(
            <ul className='list-disc pl-2'>
                <li>AWS Certified Solutions Architect Associate</li>
                <li>AWS Cloud Practitioner</li>
                <li>Google Cloud Certified - Professional Data Engineer</li>
                <li>Google Professional Cloud Developer</li>
                <li>Microsoft Azure Developer: Core Services (103-204)</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) =>{
        startTransition(() => {
            setTab(id)
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl-:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    lorem ipsum donor sit anrt consectratir adispiscing elit sed dos eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull
                    lorem ipsum donor sit anrt consectratir adispiscing elit sed dos eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={()=> handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                    <TabButton selectTab={()=> handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                    <TabButton selectTab={()=> handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id===tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection