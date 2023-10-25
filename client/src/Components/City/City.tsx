import { useState, ChangeEvent, FormEvent } from 'react'
import './City.css'

export default function City() {

  const [city, setCity] = useState('');
  const [gptPrompt, setGptPrompt] = useState('');
  const [experiences, setExperiences] = useState('');

  function handleCity(e: ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
    setGptPrompt(`I am someone that values nature, sunsets, cool buildings and my main hobby is yoga, I am going to ${city}`)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const promiseGpt = fetch('http://localhost:5000/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ gptPrompt })
      })

      const responseGpt = await promiseGpt;

      if (responseGpt.ok) {
        const responseGptJSON = await responseGpt.json();
        setExperiences(responseGptJSON.choices[0].message.content);
      } else {
        console.error(responseGpt);
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
