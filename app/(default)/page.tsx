export const metadata = {
  title: "Proxi Protocol",
  description: "Proxi Protocol",
}

import Features from "@/components/features"
import Hero from "@/components/hero"
import Newsletter from "@/components/newsletter"
import Zigzag from "@/components/zigzag"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  )
}
