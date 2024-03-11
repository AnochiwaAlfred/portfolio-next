"use client";
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion, useInView} from "framer-motion";

const projectsData = [
    {
        id:1,
        title:"React Portfolio Website",
        description:"Project 1 description",
        image:"/images/projects/1.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:2,
        title:"Photography Portfolio Website",
        description:"Project 2 description",
        image:"/images/projects/2.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:3,
        title:"E-Commerce Application",
        description:"Project 3 description",
        image:"/images/projects/3.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:4,
        title:"Food Ordering Application",
        description:"Project 4 description",
        image:"/images/projects/4.png",
        tag:["All", "Mobile"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:5,
        title:"React Firebase Template",
        description:"Project 5 description",
        image:"/images/projects/5.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:6,
        title:"Full-Stack Roadmap",
        description:"Project 6 description",
        image:"/images/projects/6.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:7,
        title:"OkwukweStitchedIT",
        description:"Project 7 description",
        image:"/images/projects/portfolio-1.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:8,
        title:"TaskMaster",
        description:"Project 8 description",
        image:"/images/projects/portfolio-2.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:9,
        title:"Pings",
        description:"Project 9 description",
        image:"/images/projects/portfolio-3.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:10,
        title:"Spotipy",
        description:"Project 10 description",
        image:"/images/projects/portfolio-4.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:11,
        title:"Stechad 1",
        description:"Project 11 description",
        image:"/images/projects/portfolio-5.png",
        tag:["All", "Graphics"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:12,
        title:"Stechad 2",
        description:"Project 12 description",
        image:"/images/projects/portfolio-6.png",
        tag:["All", "Graphics"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:13,
        title:"Stechad 3",
        description:"Project 13 description",
        image:"/images/projects/portfolio-7.png",
        tag:["All", "Graphics"],
        gitUrl:"/",
        previewUrl:"/"
    }
]


const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true})
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );
    const cardVariants = {
        initial:{y:50, opacity:0},
        animate:{y:0, opacity:1},
    };
  return (
    <section ref={ref}>
        <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
            <ProjectTag name="All" onClick={() => handleTagChange("All")} isSelected={tag === "All"}/>
            <ProjectTag name="Mobile" onClick={() => handleTagChange("Mobile")} isSelected={tag === "Mobile"}/>
            <ProjectTag name="Web" onClick={() => handleTagChange("Web")} isSelected={tag === "Web"}/>
            <ProjectTag name="Graphics" onClick={() => handleTagChange("Graphics")} isSelected={tag === "Graphics"}/>
        </div>
        <ul className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
                <motion.li 
                    key={index} 
                    variants={cardVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration:0.3, delay: index*0.4 }}
                >
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectsSection