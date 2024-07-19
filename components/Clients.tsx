import React from 'react'
import { InfiniteMovingCards } from './ui/InfitineMovingCard'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className="py-20" id='testimonials'>
        <h1 className="heading">
            Alguns testemunhos de {" "}
            <span className="text-purple">clientes satisfeitos</span>
        </h1>
        <div className="flex flex-col items-center justify-center mt-10">
            <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
            /> 

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                {companies.map(({id, img, name, nameImg}) => (
                    <div className='flex md:max-w60 max-w-32 gap-2'>
                        <img src={img} alt={name}  className='md:w-10 w-5'/>
                        <p>{nameImg}</p>
                    </div>
                ))}
            </div>  
        </div>
      </div>
  )
}

export default Clients
