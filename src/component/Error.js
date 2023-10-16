import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Error = () => {
    const error = useRouteError();
  
  return (
    <div style={{fontSize: "2rem" , backgroundColor : "red" , textAlign : "center"}}>
      <div>{error.status}</div>
      <div>{error.statusText}</div>
      <div>{error.data}</div>
    <div style={{border : "1px solid white ", margin: '1rem'}}> <Link to="/">go to Home page </Link></div> 
    </div> 
  )
}

export default Error
