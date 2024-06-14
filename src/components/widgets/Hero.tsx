import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'
import heroPoster from "@/assets/images/HeroPoster.png"
import Button from '../shared/Button'

const Hero = () => {
  return (
    
        <section className=''>
            <Wrapper>
                <div className='flex flex-col md:flex-row items-center'>
                    {/* leftside */}
                <div className='flex-1'>
                    <h4 className='text-teal-800 font-semibold text-lg mt-4'>Become a Cloud Native Applied Generative AI Engineer (GenEng and CNAI)</h4>
                    <h1 className='text-5xl sm:text-6xl font-bold'>Master the Future of Tech</h1>
                    <p className='mt-6 text-xl text-slate-600'>Getting Ready for the Next Generation and Future of the Internet</p>
                    <p className='mt-2 text-xl text-slate-600'>Join a 13 Trillion Dollar Industry with 5 Billion Users</p>
                    <div className='mt-6'>
                        <Button text={"Enroll Now"}/>
                        
                    </div>
                </div>
                    {/* rightside */}
                    <div className='flex-1 mt-6'>
                        <Image src={heroPoster} width={650} height={450} alt="hero-poster"/>
                    </div>
                </div>
            </Wrapper>
        </section>
    
  )
}

export default Hero