import React,{useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
import audioFile from "./c h e r r y-202895115.mp3"
const audio= new Audio();
const socket = io.connect('http://localhost:3001');

function App() {
  const [role,setRole]= useState("");
  const [playing, setPlaying] = useState("")
  useEffect(()=> {
    function receiveMesage(m) {
      console.log(m);
      if( role === 'DJ'){
        audio.src =m.path;
        audio.play();
      }
      setPlaying(m.name)
    }
    socket.on('play', receiveMesage);
    
    return () => {
      socket.off('play', receiveMesage);
    }
  }, [role]);

  function handlePlaySound(){
    socket.emit("play", {name : ' Test Sounf 1' , path :audioFile})
  }
  return (
    <div className="App">
      <h1>DANCE PARTY !!! *)_(_)(*</h1>
      <div>
        <h4>select role pls</h4>
        <button onClick={() => setRole("DJ")}>DJ</button>
        
        <button onClick={() => setRole("DJ")}>party hoe</button>
      </div>

      <div>
        <h4>
          play sounds
        </h4>
        <button onClick={handlePlaySound}>Play</button>
      </div>
      <div>
      <h4> Now playing {playing}</h4>
      </div>
    </div>
  );
}

export default App;
