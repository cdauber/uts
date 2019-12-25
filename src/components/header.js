import React from "react"
import { Link } from "gatsby"

export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="getInvolved" activeClassName="active">
          Get Involved
        </Link>
      </li>
      <li>
        <Link to="currentSeason" activeClassName="active">
          Current Season
        </Link>
      </li>
      <li>
        <Link to="about" activeClassName="active">
          About
        </Link>
      </li>
    </ul>
  </nav>
)
