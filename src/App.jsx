import { useState } from 'react'
import Navbar from './component/screens/Navbar'
import First from './component/screens/First'
import About from './component/screens/About'
import Skill from './component/screens/Skill'
import Work from './component/screens/Work'
import Contact from './component/screens/Contact'
import Footer from './component/screens/Footer'
import { Toaster } from 'react-hot-toast';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Toaster />
      <div className=' flex flex-col item-center justify-center  text-black '>
       <Navbar/> 
       <First/>
       <About/>
       <Skill/>
       <Work/>
       <Contact/>
       <Footer/>     
      </div>
    </>
  )
}

export default App
