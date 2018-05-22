import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import AddButton from './AddButton.jsx';
import ProgressBar from './ProgressBar.jsx'
import List from './List.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>

      <div>
        <div classname="row">
          <SearchBar />
          <AddButton />
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <List />
                  <div className="balloon">
          <span>Bye</span>
          <img src="heart.svg" />
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
