import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import iTunesLogo from '../images/iTunesLogo.png';
import spotifyLogo from '../images/spotifyLogo.png';
import {ListItem} from 'material-ui/List';

class SearchListItem extends Component {
  render () {

    return (
      <div>
        <a
          href={this.props.album.url}
          target="_blank"
          style={{textDecoration: 'none', color: 'black'}}>
          <ListItem
            primaryText={this.props.album.artistName}
            leftAvatar={<Avatar src={this.props.album.albumImage} />}
            rightAvatar={<Avatar src={this.props.album.sourceType === 'iTunes' ? iTunesLogo : spotifyLogo} />}
            secondaryText={
              <p>
                {this.props.album.albumName}
              </p>
            }
          />
        </a>
      </div>
    );
  }
}

export default SearchListItem;