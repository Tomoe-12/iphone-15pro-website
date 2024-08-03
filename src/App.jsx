import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Highlight from './components/HighLights.jsx'
import Model from './components/Model.jsx'
const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model/>
    </main>
  )
}

export default App
