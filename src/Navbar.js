import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import { useStateProvider } from './StateProvider'
const Navbar = ({navBackground}) => {
  const [{userInfo}]=useStateProvider()
  return (
    <Container navBackground={navBackground}>
      <div className="search__bar">
        <FaSearch />
        <input type="text" placeholder=' Artists, Songs or Podcasts'/>
      </div>
      <D1>
        <A href='#'>
          <CgProfile />
          <span>{userInfo?.name}</span>
        </A>
      </D1>
    </Container>
  )
}

export default Navbar
const Container=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:2rem;
  height:15vh;
  position:sticky;
  top:0;
  transition:0.3s ease-in-out;
  background-color: ${({ navBackground }) =>
    navBackground ? "rgba(0,0,0,0.7)" : "none"};
  .search__bar{
    background-color:white;
    width:60%;
    padding:0.4rem 1rem;
    border-radius:2rem;
    display:flex;
    align-items:center;
    gap:1rem;
    input{
      border:none;
      height:2rem;
      width:100%;
      cursor:pointer;
      &:focus{
        outline:none;
      }
    }
    
  }
`
const A=styled.a`
  display:flex;
  padding:2px;
  justify-center:center;
  align-items:center;
  gap:0.5rem;
  text-decoration:none;
  color:white;
  font-weight:bold;
  svg{
    font-size1.3rem;
    background-color:#282828;
    padding:0.2rem;
    border-radius:1rem;
    color:#c7c5c5;}
`
const D1=styled.div`
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`