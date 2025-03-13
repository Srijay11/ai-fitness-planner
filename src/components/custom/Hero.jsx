import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import Footer from '@/view-workout/components/footer'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-16'>
        <span className='text-[#f56551]'>Discover Your Next Workout with AI:</span> Personalized Training at Your Fingertips
      </h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trainer and diet planner, creating custom health plans tailored to your interests and goals.</p>

      <Link to={'/create-workout'}>
        <Button className='mb-10'>Get Started, It's Free</Button>
      </Link>

      <Footer/>
    </div>
  )
}

export default Hero
