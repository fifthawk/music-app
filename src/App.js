import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Videos from './videos'
import './App.css'

const App = () => {
  const [video, setVideo] = useState([])

  useEffect(() => {
    axios.get('https://theaudiodb.com/api/v1/json/1/mvid.php?i=111305')
    .then(res => {
      setVideo(res.data.mvids)
    }).catch(err => alert('error'))
  }, [])

  return (
    <div>
    <div className ='header-container'>
    <h1>Rihanna's Music Videos</h1>
    </div>
      {video.map(object => {
        return (
          <Videos
          key={object.idTrack}
          track={object.strTrack}
          url={object.strMusicVid}
          />
        )
      })}
    </div>
  )
}
export default App
