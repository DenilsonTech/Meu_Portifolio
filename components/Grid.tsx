import React from 'react'
import { WobbleCard} from './ui/WobbleCard'
import { gridElements } from '@/data'
import Image from 'next/image';
import { Globe } from './ui/UiGlobe';
import { GridGlobe } from './ui/GridGlobe';

const Grid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full" id='about'>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-950 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Priorizo ​​a colaboração do cliente, promovendo a comunicação aberta
          </h2>
        </div>
        <Image
          src="/MacBook.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute top-48 md:top-16 -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black-100">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Comunicação flexivel em qualquer fuso horário.
        </h2>
        <GridGlobe/>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm left-10">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Entusiasta de tecnologia e apaixonado por desenvolvimento.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Busco sempre aprender e explorar novas ferramentas. Adoro criar soluções inovadoras que tornam a vida mais fácil e eficiente, e estou constantemente aprimorando minhas habilidades para acompanhar as tendências do setor.
          </p>
        </div>
        <Image
          src="/b6.svg"
          width={600}
          height={600}
          alt="linear demo image"
          className="absolute  top-72 md:top-16 -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-red-950">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Minhas Ferramntas de tecnologia
        </h2>
        <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
          <div className='flex flex-col gap-3 lg:gap-4'>
            {['React.Js', 'Next.Js', 'TypeScript'].map((item)=> (
              <span key={item} className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#2e1019]'>
                {item}
              </span>
            ))}
            <span className='py-4 px-3 rounded-lg text-center bg-[#2e1019] opacity-100 lg:opacity-50'/>
          </div>
          <div className='flex flex-col gap-3 lg:gap-4'>
          <span className='py-4 px-3 rounded-lg text-center bg-[#2e1019] opacity-100 lg:opacity-50'/>
            {['Flutter', 'Dart', 'Java'].map((item)=> (
              <span key={item} className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#2e1019]'>
                {item}
              </span>
            ))}
            
          </div>
        </div>
        
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Sempre Ccriando projectos novos
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Estou neste momento trabalhando em um WebApp para criação de cv integrado com IA com recursos muito inovadores.
          </p>
        </div>
        <Image
          src="/b5.svg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute top-48 md:top-16 -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard> 
    </div>
  );
}

export default Grid
