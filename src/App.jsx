import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/Navbar';
import  ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <NavBar/>
       <ItemListContainer greeting={'BIENVENIDOS'}/>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
       
      </div>
      <p className="read-the-docs">
      
      </p>
    </>
  )
}

export default App
