import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import AddButton from './AddButton.jsx';
import ProgressBar from './ProgressBar.jsx'
import List from './List.jsx'
import Categories from './Categories.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <SearchBar />
        <AddButton />
        <div>100</div>
        <ProgressBar />
        <Categories />
        <List />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
