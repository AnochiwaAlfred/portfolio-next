import React from 'react';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative '>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10 '>
            <h5 className='text-xl font-bold text-white my-2'>Let&lsquo;s Connect</h5>
            <p className='text-[#ADBB7BE] max-w-md mb-4'>
                {" "}
                Feel free to reach out. I&lsquo;ll respond as soon as possible.
                Feel free to reach out. I&lsquo;ll respond as soon as possible.
                Feel free to reach out. I&lsquo;ll respond as soon as possible.
            </p>
            <div className='socials flex flex-row gap-3'>
                <Link href="github.com">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="linkedin.com">
                    <Image src={LinkedinIcon} alt="LinkedIn Icon" />
                </Link>
            </div>
        </div>
        
        <div>
            <form className='flex flex-col'>
                <div className='mb-6'>
                    <label htmlFor='email' className='mb-2 text-white block text-sm font-medium'>Your email</label>
                    <input type='email' id='email' required placeholder='jacob@google.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
                </div>

                <div className='mb-6'>
                    <label htmlFor='subject' className='mb-2 text-white block text-sm font-medium'>Subject</label>
                    <input type='text' id='subject' required placeholder='Just saying Hi!' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
                </div>

                <div className='mb-6'>
                    <label htmlFor='message' className='mb-2 text-white block text-sm font-medium'>Your message</label>
                    <textarea name="message" id="message" placeholder="Let's talk about" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'></textarea>
                </div>
                <button type="submit" className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection