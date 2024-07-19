import React from 'react'
import LightButton from './ui/LightButton'
import { FaMessage } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 mb-20' id='contact'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img 
                src="/footer-grid.svg" 
                alt="footer" 
                className='w-full h-full opacity-50'
            />

            <div className='flex flex-col items-center mb-10'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Preparado para levar <span className='text-purple'>sua</span> presença dogital para outro nível?
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Entre em contato comigo hoje e vamos discutir como posso ajudá-lo a alcançar seus objetivos</p>
                <a href="mailto:denilsontech20@gmail.com">
                    <LightButton
                        title='Vamos entrar em contacto'
                    />
                </a>
            </div>

            <div className='flex mt-16 md:flex-row flex-col justify-between text-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>CopyRight © 2024 Denilson</p>

                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border-black-300'>
                            <img src={profile.img} alt={profile.link} width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
      </div>
    </footer>
  )
}

export default Footer
