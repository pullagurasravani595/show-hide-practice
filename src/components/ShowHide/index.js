// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {display: true}

  displayModeFirstName = () => {
    const {display} = this.state

    if (display === true) {
      return <p className="card-heading">Joe</p>
    }
  }

  displayModeLastName = () => {
    const {display} = this.state

    if (display === true) {
      return <p className="card-heading">Jonas</p>
    }
  }

  render() {
    const {display} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.displayModeFirstName}
          >
            Show/Hide Firstname
          </button>
          <button
            type="button"
            className="button"
            onClick={this.displayModeLastName}
          >
            Show/Hide Lastname
          </button>
        </div>
      </div>
    )
  }
}

export default ShowHide
