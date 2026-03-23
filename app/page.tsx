import {AppShell} from '@/components/layout/AppShell'
import {QuoteSection} from '@/components/sections/QuoteSection'

export default function Home() {
  return (
    <AppShell>
      <main className="flex flex-1 flex-col">
        <QuoteSection
          sectionId="section-1"
          nextSectionId="section-2"
          quote="Success is not final, failure is not fatal — it is the courage to continue that counts. Every setback is a setup for a comeback."
          bgColor="#111111"
          textColor="#f97316"
        />
        <QuoteSection
          sectionId="section-2"
          nextSectionId="section-3"
          quote="The secret of getting ahead is getting started. Break your complex overwhelming tasks into small manageable ones and take that first step."
          bgColor="#ff0000"
          textColor="#dfcfcc"
        />
        <QuoteSection
          sectionId="section-3"
          nextSectionId="section-4"
          quote="It does not matter how slowly you go as long as you do not stop. Perseverance is the hard work you do after you get tired of the hard work you already did."
          bgColor="#1c0f08"
          textColor="#fb923c"
        />
        <QuoteSection
          sectionId="section-4"
          nextSectionId="section-5"
          quote="Believe you can and you are halfway there. Your only limit is your mind — push beyond what you think is possible and the world will reshape itself around your ambition."
          bgColor="#0f172a"
          textColor="#34d399"
        />
        <QuoteSection
          sectionId="section-5"
          nextSectionId="section-6"
          quote="The only way to do great work is to love what you do. If you have not found it yet, keep looking. Do not settle — as with all matters of the heart, you will know when you find it."
          bgColor="#09090b"
          textColor="#f0abfc"
        />
        {/* Thanks screen — click anywhere on the above sections to reach here */}
        <section
          id="section-6"
          className="h-screen w-full flex flex-col justify-center items-center select-none"
          style={{backgroundColor: '#ffffff'}}
        >
          <div className="px-[4%] text-center max-w-6xl mx-auto flex flex-col gap-8">
            <h2 className="text-[12rem] font-bold leading-none tracking-tighter text-black">
              Thanks.
            </h2>
            <p className="text-[4rem] text-neutral-900 tracking-tight leading-[1.2]">
              Enjoyed the animation? Comment &lsquo;text&lsquo; to get the full source code.
            </p>
            <p className="text-3xl text-neutral-600 tracking-widest uppercase">
              Built with Next.js · GSAP SplitText · Lenis
            </p>
          </div>
        </section>
      </main>
    </AppShell>
  )
}
