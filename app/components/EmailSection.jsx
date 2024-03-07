import React from 'react';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 '>
        <div>
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
            <form className='flex flex-col gap-4'>
                <label htmlFor='email' className='text-white'>Your email</label>
                <input type='email' id='email' required placeholder='jacob@google.com'/>
            </form>
        </div>
    </section>
  )
}

export default EmailSection