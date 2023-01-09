import './App.css'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
    <Navigation/>

    <div className='mainContentWrapper'>
      <Sidebar/>
      <MainContent/>
      </div>
    

 
    </div>
  )
}

export default App
