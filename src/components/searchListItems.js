import React, { Component } from 'react';
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