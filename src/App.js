import { useEffect, useState } from 'react'
import './App.css'
import Body from './app/components/body'
import Header from './app/components/header'
import SideNavbar from './app/components/side_navbar'
import { data } from './assets/ebike_data'

function App () {
  const [ebikes, setEbikes] = useState([])
  const [singleEbike, setSingleEbike] = useState([])
  const [showSingleEbikeView, setShowSingleEbikeView] = useState(false)

  useEffect(() => {
    setEbikes(data.ebikes)
  }, [])

  return (
    <div className="App">
      <Header />
      <Body
      ebikeState={ebikes}
      singleEbike={singleEbike}
      setSingleEbike={setSingleEbike}
      showSingleEbikeView={showSingleEbikeView}
      setShowSingleEbikeView={setShowSingleEbikeView}
      />
      <SideNavbar
        setEbikes={setEbikes}
        setShowSingleEbikeView={setShowSingleEbikeView}
      />
    </div>
  )
}

export default App
