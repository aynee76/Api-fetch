import axios from "axios"
import { useEffect, useState } from 'react'
import './App.css'
import MemeCard from "./components/MemeCard"

function App() {
  const url = "https://api.imgflip.com/get_memes"
  const [memes, setMemes] = useState([])
  // const [btns, setBtns] = useState(false)
  const [memeToShow, setmemeToShow] = useState(0)
  const meme = memes[memeToShow]

  const fetchMeme = () => {
    axios
      .get(url)
      .then((res) => setMemes(res.data.data.memes))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchMeme();
  }, [])

  const handleButtonClick = (type) => {
    if (type === 'next') { setmemeToShow(memeToShow + 1) }
    else {
      setmemeToShow(memeToShow - 1)
    }
  }

  // const handleFetch = () => {
  //   setmemeToShow(memeToShow + 1)
  // }

  // const handleBack = () => {
  //   setmemeToShow(memeToShow - 1)
  // }

  return (
    <div className="App">
      {
        memes.length &&
        <>
          <img src={meme.url} />
          <p>{meme.name}</p>
        </>
      }

      <button disabled={memeToShow === 0} onClick={() => handleButtonClick("previous")}>Previous</button>
      <button disabled={memeToShow === memes.length - 1} onClick={() => handleButtonClick("next")}>Next</button>

    </div>
  )
}

export default App
