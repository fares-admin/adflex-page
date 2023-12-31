import React from 'react'
import Hero from './Hero'
import Solution from './Solution'
import WhyUs from './WhyUs'
import Effective from './Effective'
import Roadmap from './Roadmap'
import Leader from './Leader'
import FAQs from './FAQs'
import Partner from './Partner'
import Address from '../Contact/Address'

function Home() {
  return (
    <div className="overflow-hidden">
      <div
        style={{
          backgroundImage: 'url(/images/top-bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="pb-10 bg-black md:pb-36"
      >
        <Hero />
        <Solution />
      </div>
      <WhyUs />
      <Partner />
      <Effective />
      <Roadmap />
      <Leader />
      <FAQs />
      <div className="mt-16 md:mt-20">
        <Address />
      </div>
    </div>
  )
}

export default Home
