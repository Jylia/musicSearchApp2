import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import iTunesLogo from '../images/iTunesLogo.png';
import spotifyLogo from '../images/spotifyLogo.png';
import {List, ListItem} from 'material-ui/List';

class SearchListItems extends Component {
  render () {
    let listItems;

    if (this.props.albums.length) {
      listItems = this.props.albums.map((album) => 
        <ListItem key={album.url} 
          primaryText={<a href={album.url} target="_blank" style={{textDecoration: 'none', color: 'black'}}>{album.artistName}</a>}
          leftAvatar={<Avatar src={album.albumImage} />}
          rightAvatar={<Avatar src={album.sourceType === 'iTunes' ? iTunesLogo : spotifyLogo} />}
          secondaryText={
            <p>
              <a href={album.url} target="_blank" style={{textDecoration: 'none', color: 'black'}}>{album.albumName}</a>
            </p>
          }
        />
      );
    } else {
      listItems = <ListItem
        primaryText='No search results'
      />
    }

    return (
      <div>
        <List>{listItems}</List>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListItems);
