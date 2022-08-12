import axios from 'axios'
import React,{useEffect,useRef,useState} from 'react'
import styled from 'styled-components'
import Body from './Body'
import { reducerCases } from './Constants'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useStateProvider } from './StateProvider'
const Spotify = () => {
  const [{token},dispatch]=useStateProvider();
  const bodyRef=useRef()
  const [navBackground,setNavBackground]=useState(false)
  const [headerBackground,setHeaderBackground]=useState(false)
  const Bodyscrolled=()=>{
    bodyRef.current.scrollTop>=30 
    ? setNavBackground(true)
    :setNavBackground(false)
    bodyRef.current.scrollTop>=268 
    ? setHeaderBackground(true)
    :setHeaderBackground(false)
  }
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        userUrl: data.external_urls.spotify,
        name: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo()
  },[token, dispatch]);
  return (
    <Container>
      <div className='spotify__body'>
        <Sidebar />
         <div className='body' ref={bodyRef} onScroll={Bodyscrolled}>
            <Navbar navBackground={navBackground}/>
            <div className="body__contents">
                <Body headerBackground={headerBackground}/>
            </div>
         </div>
      </div>
      <div className="spotify__footer">
        <Footer/>
      </div>
    </Container>
  )
}

export default Spotify
const Container=styled.div`
    max-width:100vw;
    max-height:100vh;
    overflow:hidden;
    display:grid;
    grid-template-rows:85vh 15vh;
    .spotify__body{
        display:grid;
        grid-template-columns:15vw 85vw;
        height:100%;
        width:100%;
        background:linear-gradient(transparent,rgba(0,0,0,1));
        background-color:rgb(32,87,100);
    .body{
        height:100%;
        width:100%;
        overflow:auto;
    }
    }
`