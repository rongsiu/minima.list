import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import AddButton from './AddButton.jsx';
import ProgressBar from './ProgressBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <SearchBar />
        <div>100</div>
        <AddButton />
        <ProgressBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
