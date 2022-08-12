import React from 'react'
import styled from 'styled-components'

const Login = () => {
  const handleclick=()=>{
    const apiUrl = "https://accounts.spotify.com/authorize";
    const clientId = "d0c1294b45734e2c85bc0aed655885bb";
    const redirectUri = "http://localhost:3000/";
    const scopes = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-position",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-top-read",
      "user-modify-playback-state",
    ];
    window.location.href=`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true`;
  }
  return (
    <Container>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify"
      />
      <button onClick={handleclick}>Click me </button>
    </Container>
  )
}

export default Login


const Container=styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  height:100vh;
  width;100vh;
  background-color:black;
  button{
    padding: 1rem 5rem;
    border-radius: 5rem;
    border:none;
    background-color:#1db954;
    font-size:1.4rem;
    cursor:pointer
  }
`;


