import { useState } from 'react'
import Introduction from './components/Introduction'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Contacts from './components/Contacts'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
        <Introduction />
        <Contacts />
        <MainContent />
        <Footer />

    </div>
  )
}

export default App