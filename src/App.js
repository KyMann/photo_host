import './App.css';
import Changer from './components/SliderChanger'
import { SliderData } from './components/SliderData'

function App() {
  const CaroselDataArray = [SliderData]
  
  return <div>
      <Changer NestedPhotoArray={CaroselDataArray}/>
      
    </div>
} //TODO: add a way to send messages, upload more pictures

export default App;
