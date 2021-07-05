import React from "react"
import NavBar from "../navbar"

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return(
    <React.Fragment>
      <NavBar />
      <div className="container">{children}</div>
    </React.Fragment>
  )
}

export default Layout
