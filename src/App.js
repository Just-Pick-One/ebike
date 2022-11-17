import { useEffect, useState } from 'react'
import './App.css'
import Body from './app/components/body'
import Header from './app/components/header'
import SideNavbar from './app/components/side_navbar'
import { data } from './assets/ebike_data'

function App () {
  const [ebikes, setEbikes] = useState([])
  useEffect(() => {
    setEbikes(data.ebikes)
  }, [])

  return (
    <div className="App">
      <Header />
      <Body
      ebikeState={ebikes}
      />
      <SideNavbar
        setEbikes={setEbikes}
      />
    </div>
  )
}

export default App
