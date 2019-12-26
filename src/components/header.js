import React from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"

export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/" activeClassName="active">
          <Typography variant="body1" gutterBottom>
            Home
          </Typography>
        </Link>
      </li>
      <li>
        <Link to="/getInvolved" activeClassName="active">
          <Typography variant="body1" gutterBottom>
            Get Involved
          </Typography>
        </Link>
      </li>
      <li>
        <Link to="/currentSeason" activeClassName="active">
          <Typography variant="body1" gutterBottom>
            Current Season
          </Typography>
        </Link>
      </li>
      <li>
        <Link to="/about" activeClassName="active">
          <Typography variant="body1" gutterBottom>
            About
          </Typography>
        </Link>
      </li>
    </ul>
  </nav>
)
