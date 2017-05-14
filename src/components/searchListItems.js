import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import iTunesLogo from '../images/iTunesLogo.png';
import spotifyLogo from '../images/spotifyLogo.png';
import {List} from 'material-ui/List';
import SearchListItem from './searchListItem';

class SearchListItems extends Component {
  render () {

    return (
      <div>
        {
          this.props.albums.length > 0 ?
            <List>
              {
                this.props.albums.map((album) =>
                  <SearchListItem
                    album={album}
                    key={album.url}
                  />
                )
              }
            </List>
          :
            <span>No search results</span>
        }
      </div>
    )
  }
}

export default SearchListItems;