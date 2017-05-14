import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper/Paper';
import TextField from 'material-ui/TextField/TextField';
import SearchListItems from './searchListItems';
import CircularProgress from 'material-ui/CircularProgress';
import { fetchSearch, setSearchText, clearSearch } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';

class MusicSearch extends Component {
  render () {
    const { search, setText, clear } = this.props;

    const style = {
      margin: 12
    };

    return (
      <div>
        <Paper>
          <div style={{textAlign: 'center'}}>
            <form
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                search(this.props.searchText);
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
                id="search-input" />
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
            </form>
          </div>
        </Paper>
        <div>
          { this.props.isLoading ? 
              <CircularProgress style={{ display: 'block', margin: 'auto', padding: 10 }} />
            :
              this.props.albums &&
                <SearchListItems
                  albums={this.props.albums}
                />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    albums: state.results.searchResults,
    isLoading: state.results.isLoading,
    searchText: state.params.searchText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search (searchQuery) {
      const action = fetchSearch(searchQuery);
      dispatch(action);
    },

    setText (text) {
      const action = setSearchText(text);
      dispatch(action);
    },

    clear (text) {
      const action = clearSearch();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicSearch);
