import React from 'react'
import styled from 'styled-components'
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled,MdSearch} from 'react-icons/md'
import Playlist from './Playlist'
const Sidebar = () => {
  return (
    <Container>
      <div className="sidebar_links">
        <div className="logo">
        <Image
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify"
        />
        </div>
        <U>
            <L><MdHomeFilled/><span>Home</span></L>
            <L><MdSearch/><span>Search</span></L>
            <L><IoLibrary /><span>Your Library</span></L>
        </U>
        <Play>
          <b>Playlist</b>
          <hr/>
        </Play>
      </div>
      <Playlist />
    </Container>
  )
}

export default Sidebar
const Container=styled.div`
    background-color:black;
    color:#b3b3b3;
    display:flex;
    flex-direction:column;
    height:100%;
    width:100%;
    .sidebar__links{
        display:flex;
        flex-direction:column;
        .logo{
            text-slign:center;
            margin:1rem 0;
            
        }
    }

`
const Image=styled.img`
    max-inline-size:80%;
    block-size:auto;
`
const U=styled.ul`
    list-style-type:none;
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:1rem;
`
const L=styled.li`
    display:flex;
    gap:2rem;
    padding:2 rem;
    cursor:pointer;
    transition:0.3s ease-in-out;
    &:hover{
        color:white;
    }

`
const Play=styled.div`
    padding:25px 3 0 0;
    b{
      padding:35px;
      align-items:center;
    }
    hr{}
`