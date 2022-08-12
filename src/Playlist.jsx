import React,{useEffect} from 'react'
import { useStateProvider } from './StateProvider'
import axios from 'axios'
import { reducerCases } from './Constants';
import styled from 'styled-components';
const Playlist = () => {
    const [{ token,playlists}, dispatch] = useStateProvider();
    useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      //console.log("response",response) 
      const {items}=response.data;
      const playlists=items.map(({name,id})=>{
        return {name,id}
      })
      //console.log("playlists",playlists)
      dispatch({type:reducerCases.SET_PLAYLISTS,playlists})
    };
    getPlaylistData();
  }, [token, dispatch]);
  return (
    <Container>
      <U>
      {
        playlists.map(({name,id})=>{
          return (
            <L key={id}>{name}</L>
          )
        })
      }
      </U>
    </Container>
  )
}

export default Playlist
const Container=styled.div`
  height:100%;
  overflow:hidden;
`
const U=styled.ul`
    height:52vh;
    max-height:100%;
    overflow:auto;
    list-style-type:none;
    display:flex;
    flex-direction:column;
    gap:1rem;
    
    %::webkit-scrollbar{
      width:0.7rem;
      &-thumb{
        background-color:rgba(255,255,255,0.6);
      }
    }
`
const L=styled.li`
    display:flex;
    gap:1rem;
    
    cursor:pointer;
    transition:0.3s ease-in-out;
    &:hover{
        color:white;
    }
`