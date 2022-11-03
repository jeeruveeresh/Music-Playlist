import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const VideoItem = props => {
  const {eachItemDetails, onClickDelete} = props
  const {id, name, imageUrl, genre, duration} = eachItemDetails

  const onDeleteItem = () => {
    onClickDelete(id)
  }
  return (
    <li className="song-item">
      <div className="card">
        <img src={imageUrl} alt="track" className="image" />
        <div className="card-1">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete">
        <p className="name">{duration}</p>
        <button
          type="button"
          className="del-btn"
          testid="delete"
          onClick={onDeleteItem}
        >
          <AiOutlineDelete className="font" />
        </button>
      </div>
    </li>
  )
}

export default VideoItem
