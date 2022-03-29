
import React from 'react';
import { Link } from 'react-router-dom'
import PlayButton from '../play_button/play_button_container'

class DiscoverIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="content-list-item">
        <div className="content-list-item-wrapper">

          <div className="content-list-item-img-link">
            <div className="content-list-item-img-wrapper">
              <div className="content-list-item-playbtn-container">
                <PlayButton track={this.props.track}/>
              </div>
              <Link to={`/tracks/${this.props.track.id}`}>
                <img className="content-list-item-img" src={this.props.track.image}/>
                <div className="content-list-item-img-footer"></div>
              </Link>
            </div>
          </div>

          <div className="content-list-item-description">
            <div className="content-list-item-title">
              <Link to={`/tracks/${this.props.track.id}`} className="content-list-item-title-link">
                {this.props.track.title}
              </Link>
            </div>
            <div className="content-list-item-uploader">
              <Link to={`/users/${this.props.track.uploader_id}`} className="comment-item-username-link">
                By: {this.props.track.email}
              </Link>
            </div>


            <div className="content-list-item-genre">Genre: {this.props.track.genre}</div>
          </div>
        </div>
        {/* </Link> */}
      </li>
    )
  }
}

export default DiscoverIndexItem;