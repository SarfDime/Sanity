import React, { FC } from 'react'
import { InfoSection } from './info-interface'

const Info: FC<InfoSection> = ({ infoTitle: title, infoText: text }) => {
    return (
        <section className='info'>
            <h1>{title}</h1>
            <p>{text}</p>
        </section>
    )
}

export default Info
