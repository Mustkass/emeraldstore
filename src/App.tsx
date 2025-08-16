// import { useState } from 'react'
import storeLogo from './assets/EmeraldstoreLogo.jpg'
import './App.css'

function App() {

  return (
    <>
      <div>
          <img src={storeLogo} alt="EmeraldStore.eu logo" className='emeraldStoreLogo'></img>
          <h1>The store website is in progress... </h1>
          <p>Now you can:</p>
          <ul className='toDoList'>
            <li className='listItem'>Visit our <a href="https://www.instagram.com/emeraldstore.eu/">Instagram</a></li>
            <li className='listItem'>Find us on <a href="https://www.etsy.com/shop/EmeraldDreads">Etsy</a></li>
            <li className='listItem'>Subscribe to our <a href="https://t.me/emeraldstore_eu">Telegram</a></li>
            <li className='listItem'>Contact us by <a href="mailto:k.vlkv.93@gmail.com">email</a></li>
          </ul>
      </div>
    </>
  )
}

export default App
