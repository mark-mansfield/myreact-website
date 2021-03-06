import React from 'react'
class SimpleBanner extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    return (
      <section
        id="section"
        className={this.props.scrollTarget + ' container-full-width'}
      >
        <div className="simple-banner">
          <h1>{this.props.title}</h1>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default SimpleBanner
