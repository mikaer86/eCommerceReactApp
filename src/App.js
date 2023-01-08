import './App.css'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className='mainContentWrapper'>
    
      <Sidebar/>

      </div>
    </div>
  )
}

export default App
