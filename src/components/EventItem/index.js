// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, getStatus, isActive} = props
  const {imageUrl, id, name, location} = eventDetails

  const onImageClick = () => {
    getStatus(id)
  }

  const activeStyle = isActive ? 'img-btn active' : 'img-btn'

  return (
    <li className="event-card">
      <button onClick={onImageClick} className={activeStyle} type="button">
        <img className="image" src={imageUrl} alt="event" />
      </button>
      <div className="desc-container">
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </div>
    </li>
  )
}

export default EventItem
