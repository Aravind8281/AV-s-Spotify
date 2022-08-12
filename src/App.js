import React,{useEffect} from "react";
import './App.css';
import Login from './Login';
import {reducerCases} from './Constants';
import {useStateProvider} from './StateProvider';
import Spotify from './Spotify';
//import {getTokenFromResponse} from './Spotify';
//import SpotifyWebApi from "spotify-web-api-js";
//import Player from "./Player";
//import { useDataLayerValue } from "./Datalayer";
//const spotify=new SpotifyWebApi();
function App() {
  const [{token},dispatch]=useStateProvider()
  useEffect(()=>{
    const hash=window.location.hash;
    if(hash){
      const token=hash.substring(1).split("&")[0].split("=")[1];
      console.log(token);
      dispatch({type:reducerCases.SET_TOKEN,token})
    }
  },[token,dispatch]);
  return (
    <div className="App">
      {token ?<Spotify/> :<Login />}      
    </div>
  );
}

export default App;











  /*const [token,setToken] = useState(null);
  const [{user},dispatch]=useDataLayerValue();
  useEffect(()=>{
    const hash=getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token);
    
      spotify.getMe().then(user=>{
      dispatch({
        type:'SET_USER',
        user: user,
      });
      });
    }
    
  },[])*/