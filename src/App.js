import './App.css'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <h1 className="title">eCommerce</h1>
      <Navigation/>
      <Sidebar/>
    </div>
  )
}

export default App
