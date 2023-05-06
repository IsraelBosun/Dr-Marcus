import React from 'react'
import ServiceContainer from './ServiceContainer'
import { Xervices } from '../../Data'

const Services = () => {
    return (
        <div className='section'>
            <div>
                <p className='text-xs'>WHAT I DO</p>
                <p className='text-2xl font-bold'>My Services</p>
            </div>
            <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {Xervices.map(serving => {
               return <ServiceContainer key={serving.id} {...serving} />
            })}
            </div>
        </div>
    )
}

export default Services