import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField/TextField';
import { fetchSearch, setSearchText, clearSearch, setResourceType } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import iTunesLogo from '../images/iTunesLogo.png';
import spotifyLogo from '../images/spotifyLogo.png';
import { grey300, white } from 'material-ui/styles/colors';

class SearchForm extends Component {
  render () {
    const { search, setText, clear, setResource } = this.props;

    const style = {
      margin: 12
    };

    const flatButtonStyle = {
      height: 50,
      margin: 12
    };

    return (
      <div style={{textAlign: 'center'}}>
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            search(this.props.searchText, {iTunes: this.props.iTunes, spotify: this.props.spotify});
          }}
          >
          <TextField
            autoFocus
            hintText="Enter artist name"
            type="search"
            value={this.props.searchText}
            onChange={(e) => {
              setText(e.target.value);
            }}
            id="search-input"
          />
          <RaisedButton label="Search"
            primary={true}
            style={style}
            type="submit"
          />
          <RaisedButton
            label="Clear"
            secondary={true}
            style={style}
            onTouchTap={clear}
          />
          <div>
            <RaisedButton label="iTunes"
              primary={false}
              style={flatButtonStyle}
              icon={<Avatar src={iTunesLogo} />}
              backgroundColor={ this.props.iTunes ? grey300 : white }
              onTouchTap={() => {
                setResource({
                  name: 'iTunes',
                  isActive: !this.props.iTunes
                })
              }}
            />
            <RaisedButton label="Spotify"
              primary={false}
              style={flatButtonStyle}
              icon={<Avatar src={spotifyLogo} />}
              backgroundColor={ this.props.spotify ? grey300 : white }
              onTouchTap={() => {
                setResource({
                  name: 'spotify',
                  isActive: !this.props.spotify
                })
              }}
            />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    searchText: state.params.searchText,
    iTunes: state.params.iTunes,
    spotify: state.params.spotify
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search (searchQuery, searchParams) {
      const action = fetchSearch(searchQuery, searchParams);
      dispatch(action);
    },

    setText (text) {
      const action = setSearchText(text);
      dispatch(action);
    },

    clear (text) {
      const action = clearSearch();
      dispatch(action);
    },

    setResource(resource) {
      const action = setResourceType(resource);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
