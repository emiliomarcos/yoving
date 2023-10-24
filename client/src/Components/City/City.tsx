import { useState } from 'react'
import './City.css'

export default function City() {

  const [city, setCity] = useState('')

  function handleCity(e) {
    setCity(e.target.value)
  }

  function handleSubmit() {

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className='city-input' type='text' placeholder='City' onChange={handleCity} />
        <br></br>
        <br></br>
        <button>Go</button>
      </form>
    </>
  )
}
