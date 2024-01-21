import React, { FC } from 'react'
import { CtaSection } from './cta-interface'
import Link from 'next/link'

const CTA: FC<CtaSection> = ({ ctaTitle: title, ctaText: text, buttonText }) => {
    return (
        <section className='ctaSection'>
            <div>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
            <Link href={"/projects"}>{buttonText}</Link>
        </section>
    )
}

export default CTA
