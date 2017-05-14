import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper/Paper';
import TextField from 'material-ui/TextField/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import SearchListItems from './searchListItems';
import CircularProgress from 'material-ui/CircularProgress';
import { fetchSearch, isLoading } from '../actions';
import { grey400 } from 'material-ui/styles/colors';

class MusicSearch extends Component {
  render () {
    const { search, setIsLoading } = this.props;

    return (
      <div>
        <Paper>
          <div style={{textAlign: 'center'}}>
            <TextField
              autoFocus
              hintText={<SearchIcon color={grey400} />}
              type="search"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  search(e.target.value);
                  setIsLoading(true);
                }}
              }
              id="search-input" />
          </div>
        </Paper>
        <div>
          { this.props.isLoading ? 
              <CircularProgress style={{ display: 'block', margin: 'auto', padding: 10 }} />
            :
              this.props.albums ?
                <SearchListItems
                  albums={this.props.albums}
                />
              :
                ''
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    albums: state.searchResults,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search (searchQuery) {
      const action = fetchSearch(searchQuery, true);
      dispatch(action);
    },

    setIsLoading () {
      const action = isLoading(true);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicSearch);
