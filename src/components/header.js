import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Button } from '@mui/material';

const Header = ({ menuLinks }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      background: `#2196F3`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className="NavBox"
    >
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
      <div>
          <nav>
            <ul>
              {menuLinks.map(link => (
                <li
                  key={link.name}                
                >
                  <Link to={link.link} key={link.name}>
                    {/* {link.name} */}
                    <Button 
                      // variant="contained"  
                    variant="text"
                      sx={{
                        // borderRadius: 50,
                        color: 'white',
                        backgroundColor: 'none',
                        height: '88px'
                      }}>
                      {link.name}</Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
