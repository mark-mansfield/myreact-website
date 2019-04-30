import React from 'react'
import PropTypes from 'prop-types'
import Scroll from './Scroll'
const Header = props => (
  <header
    id="header"
    style={
      props.timeout
        ? { display: 'none' }
        : { marginTop: '20vh', height: '100vh' }
    }
  >
    <div className="logo">
      <span className="icon fa-code" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Mark Mansfield</h1>
        <p>Web Developer - Sydney</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </a>
        </li>
        <li>
          <Scroll type="id" element="about_me">
            <a>About</a>
          </Scroll>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
