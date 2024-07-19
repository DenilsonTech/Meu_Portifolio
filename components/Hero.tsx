import React from 'react'
import { Spotlight } from './ui/SpotLight'
import { BoxesCore } from './ui/BackgroundBoxes'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import LightButton from './ui/LightButton'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 mb-24'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-8 h-[80vh] w-[50vw]' fill='blue'/>
        </div>

        <div className='h-screen w-full absolute top-0 left-0'>
            <BoxesCore className='justify-center'/>
        </div>

        <div className='flex justify-center'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase -tracking-widest text-center text-xs text-blue-100 max-w-80'>
                    Uma Magia Web com Next.js
                </h2>

                <TextGenerateEffect
                    className='text-center text-[40px] md:text-4xl lg:text-5xl'
                    words='Transforma Imaginação em Minimalísticas Experiências'
                />
                <p className='text-center md: tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Olá sou Denilson, un Desenvolvedor FullStack</p>
                <a href="#sobre">
                    <LightButton
                        title = "Veja Meu Trabalho"
                    />   
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default Hero
