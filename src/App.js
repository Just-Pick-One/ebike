import './App.css'
import SideNavbar from './app/components/side_navbar'
import { data } from './assets/ebike_data'

function App () {
  const fucareGemini = data.ebikes[0]
  return (
    <div className="App">
      <SideNavbar />
      Brand: {fucareGemini.brand}
      Model: {fucareGemini.model}
      Price: {fucareGemini.price}
    </div>
  )
}

export default App
