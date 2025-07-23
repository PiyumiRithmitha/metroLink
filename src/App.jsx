import { useState } from 'react'
import './App.css'
import CommunicationPage from './CommunicationPage.jsx'
import Bot from './components/ChatBot.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bot />
      <CommunicationPage />

    </>
  )
}

export default App
