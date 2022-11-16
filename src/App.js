import './App.css'
import Header from './app/components/header'
import SideNavbar from './app/components/side_navbar'
import { data } from './assets/ebike_data'

function App () {
  const fucareGemini = data.ebikes[0]
  return (
    <div className="App">
      <Header />
      <SideNavbar />
      Brand: {fucareGemini.brand}
      Model: {fucareGemini.model}
      Price: {fucareGemini.price}
    </div>
  )
}

export default App
