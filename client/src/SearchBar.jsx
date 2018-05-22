import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	return (
  		<div className="col-md-9">
		  <form class="navbar-form" role="search">
		    <div class="input-group add-on">
		      <input class="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" />
		      <div class="input-group-btn">
		        <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
		      </div>
		    </div>
			</form>
			</div>
  	);
  }
};

export default SearchBar;