import { useState } from 'react'
import './City.css'

export default function City() {

  const [city, setCity] = useState('');
  const [experiences, setExperiences] = useState('');

  function handleCity(e) {
    setCity(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const promiseGpt = fetch('http://localhost:5000/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ city })
      })

      const responseGpt = await promiseGpt;

      if (responseGpt.ok) {
        const reponseGptJSON = await responseGpt.json();
        setExperiences(reponseGptJSON.choices[0]);
      } else {
        console.error(responseGpt)
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className='city-input' type='text' placeholder='City' onChange={handleCity} />
        <br></br>
        <br></br>
        <button>Go</button>
      </form>
      {experiences ? experiences : null}
    </>
  )
}
