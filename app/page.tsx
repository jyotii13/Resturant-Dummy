import Slider from './components/Slider'
import Offer from './components/Offer'
import Featured from './components/Featured'

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>

  )
   
  
}
