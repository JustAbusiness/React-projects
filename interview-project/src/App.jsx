// import { useState } from 'react'
import './App.css'
// import Counter from './components/active-user/Counter'
import HackerNews from './components/active-user/HackerNews'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='p-10'>
      {/* <Counter></Counter> */}
      <HackerNews></HackerNews>
    </div>
  )
}

export default App
