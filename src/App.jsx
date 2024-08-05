
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className='main-app shadow-xl relative bg-clip-border rounded-xl space-y-4'>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}

export default App
