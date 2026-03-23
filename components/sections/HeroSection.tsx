'use client'

import {useRef} from 'react'
import gsap from 'gsap'
import {SplitText} from 'gsap/SplitText'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(SplitText, ScrollTrigger)

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const split = new SplitText(headingRef.current, {
      type: 'chars',
      smartWrap: true,
      charsClass: 'char++',
    })

    split.chars.forEach((char) => {
      const el = char as HTMLElement
      const x = gsap.utils.random(-200, 200)
      const y = gsap.utils.random(-200, 200)
      const z = gsap.utils.random(-2000, 0)
      const rotateX = gsap.utils.random(-180, 180)
      const rotateY = gsap.utils.random(-180, 180)
      const rotateZ = gsap.utils.random(-180, 180)
      el.style.willChange = 'transform'
      gsap.set(el, {x, y, z, rotateX, rotateY, rotateZ, transformPerspective: 1000})
    })

    gsap.to(split.chars, {
      x: 0,
      y: 0,
      z: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.002,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 30%',
        markers: true,
      },
    })
  })

  return (
    <>
      <section ref={sectionRef} className="h-screen w-full flex justify-center items-center">
        <div className="px-[4%] py-12 max-w-[1920px] w-full mx-auto">
          <div className="max-w-420 mx-auto">
            <h4 ref={headingRef} className="text-[10rem] text-white leading-none tracking-tighter">
              Success is not final, failure is not fatal — it is the courage to continue that
              counts.
            </h4>
          </div>
        </div>
      </section>
    </>
  )
}
