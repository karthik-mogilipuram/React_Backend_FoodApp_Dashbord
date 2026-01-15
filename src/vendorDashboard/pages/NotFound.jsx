import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className="errorSection">
        <Link to="/"
        style = {{fontSize: "20px", textDecoration: "none", marginBottom: "20px", display: "inline-block", color: "dark blue"}}
        >Go to Home</Link>
        <h1>404</h1>
        <div>Page not found</div>
    </div>
    </>
  )
}

export default NotFound