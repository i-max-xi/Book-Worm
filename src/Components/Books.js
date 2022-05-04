import React from 'react';
import BookList from './BookList';
import InputBook from './InputBook';

class Books extends React.Component {
  constructor(props) {
    super(props);
    state = {
      book: [
        {
          id: 1,
          title: 'The Hunger Games',
          author: 'Author1',
        },
        {
          id: 2,
          title: 'Dune',
          author: 'Author1',
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <BookList book={this.state.book} />
        <InputBook />
      </Fragment>
    );
  }
}

export default Books;
