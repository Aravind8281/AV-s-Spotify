/*
Hey there this Component is used to get the current playing song in spotify 
*/

import {useEffect} from "react";
import axios from "axios";
import { reducerCases } from "./Constants";
import { StateProvider, useStateProvider } from "./StateProvider";
export default function CurrentTrack() {
  const [{token},dispatch]=useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing ",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response",response) 
      //console.log("playlists",playlists)
      //dispatch({type:reducerCases.SET_PLAYLISTS,playlists})
    };
    getCurrentTrack();
  }, [token, dispatch]);
  return(
    <div>
      Hey there
    </div>
  )
}
