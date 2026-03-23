'use client'

import {useRef} from 'react'
import gsap from 'gsap'
import {SplitText} from 'gsap/SplitText'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(SplitText, ScrollTrigger)

interface QuoteSectionProps {
  quote: string
  bgColor: string
  textColor: string
  sectionId: string
  nextSectionId?: string
}

export function QuoteSection({
  quote,
  bgColor,
  textColor,
  sectionId,
  nextSectionId,
}: QuoteSectionProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const split = new SplitText(headingRef.current, {
      type: 'chars',
      smartWrap: true,
      charsClass: 'char++',
    })

    // Set perspective on the parent so all chars share one vanishing point
    gsap.set(headingRef.current, {perspective: 1200})

    split.chars.forEach((char) => {
      const el = char as HTMLElement
      const x = gsap.utils.random(-70, 70)
      const y = gsap.utils.random(-70, 70)
      const z = gsap.utils.random(-3000, 0)
      const rotateX = gsap.utils.random(-540, 540)
      const rotateY = gsap.utils.random(-540, 540)
      const rotateZ = gsap.utils.random(-180, 180)
      el.style.willChange = 'transform opacity'
      gsap.set(el, {x, y, z, rotateX, rotateY, rotateZ, transformStyle: 'preserve-3d', opacity: 1})
    })

    gsap.to(split.chars, {
      x: 0,
      y: 0,
      z: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      duration: 2,
      opacity: 1,
      ease: 'power4.out',
      stagger: 0.003,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 30%',
      },
    })
  })

  const handleClick = () => {
    if (!nextSectionId) return
    const next = document.getElementById(nextSectionId)
    if (next && window.lenis) {
      window.lenis.scrollTo(next, {
        duration: 1.8,
        easing: (t: number) => 1 - Math.pow(2, -10 * t),
      })
    }
  }

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      onClick={handleClick}
      style={{backgroundColor: bgColor, cursor: nextSectionId ? 'pointer' : 'default'}}
      className="h-screen w-full flex justify-center overflow-hidden items-center select-none"
    >
      <div className="px-[4%] py-12 max-w-[1920px] w-full flex justify-center items-center mx-auto">
        <h4
          ref={headingRef}
          style={{color: textColor, transformStyle: 'preserve-3d'}}
          className="text-[6rem] font-medium leading-[1.05] tracking-tighter max-w-7xl"
        >
          {quote}
        </h4>
      </div>
    </section>
  )
}
