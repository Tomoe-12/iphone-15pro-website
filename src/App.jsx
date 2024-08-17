import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Highlight from './components/HighLights.jsx';
import Model from './components/Model.jsx';
import Features from './components/Features.jsx'
const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model/>
      <Features/>
    </main>
  )
}

export default App
