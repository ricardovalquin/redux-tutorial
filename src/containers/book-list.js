import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  renderList() {
    return this.props.books.map( (book) => {
      return(
        <li 
          key={book.title}
          onClick={ () => this.props.selectBook(book) }
          className="list-group-item">
          { book.title }
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //takes the app state and wrap up inside the BookList props
  // when the app state changes this container is automatically re-rendered
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it avaliable
// as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
