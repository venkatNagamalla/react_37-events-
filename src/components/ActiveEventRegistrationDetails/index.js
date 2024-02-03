// Write your code here
import {Component} from 'react'
import './index.css'

const registrationConstants = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderNotViewSection = () => (
    <div className="not-view-container">
      <p className="not-view-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderYetToTogether = () => (
    <div className="yet-to-register-container">
      <img
        className="yet-to-register-img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yet-to-register-desc">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button className="register-btn" type="button">
        Register Here
      </button>
    </div>
  )

  renderRegistered = () => (
    <div className="yet-to-register-container">
      <img
        className="registered-img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="desc">You have already registered for the event</h1>
    </div>
  )

  renderRegistrationClosed = () => (
    <div className="yet-to-register-container">
      <img
        className="not-regis-img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registration-desc">Registrations Are Closed Now!</h1>
      <p className="soon-desc">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {eventStatus} = this.props
    switch (eventStatus) {
      case registrationConstants.yetToRegister:
        return this.renderYetToTogether()
      case registrationConstants.registered:
        return this.renderRegistered()
      case registrationConstants.registrationsClosed:
        return this.renderRegistrationClosed()
      default:
        return this.renderNotViewSection()
    }
  }
}

export default ActiveEventRegistrationDetails
