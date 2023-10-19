import { Navbar } from './Components'
import './App.css'

export default function App() {

  return (
    <>
      <Navbar />
      <form>
        <input type="text" placeholder="City" />
        <br></br>
        <br></br>
        <button>Go</button>
      </form>
    </>
  )
}
