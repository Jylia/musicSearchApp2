import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper/Paper';
import SearchListItems from './searchListItems';
import CircularProgress from 'material-ui/CircularProgress';
import SearchForm from './searchForm';

class MusicSearch extends Component {
  render () {
    return (
      <div>
        <Paper>
          <SearchForm />
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
    isLoading: state.results.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicSearch);
