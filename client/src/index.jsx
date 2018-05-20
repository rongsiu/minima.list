import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import AddButton from './AddButton.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <SearchBar />
        <AddButton />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
