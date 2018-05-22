import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      activities: [],
    }
  }

  componentDidMount() {
    axios.get(`/api/categories`)
      .then(response => {
        console.log('category', response.data)
        this.setState({
          categories: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(`/api/activities`)
      .then(response => {
        console.log('activity', response.data)
        this.setState({
          activities: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
  	return (
      <div>
        <div classname="row">
          {this.state.categories.map(item =>
            <div className="col-md-2">{item}</div>
          )}
        </div>
          <div classname="row">
          {this.state.activities.map(item =>
            <div className="col-md-2">{item}</div>
          )}
        </div>
      </div>
  	);
  }
};

export default Categories;