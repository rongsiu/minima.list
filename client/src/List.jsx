import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      categories: [],
      activities: [],
    }
  }

  componentDidMount() {
    axios.get(`/api/items`)
      .then(response => {
        this.setState({
          items: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });

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

    displayItems(query, type) {
    axios.get(`/api/items/${query}/${type}`)
    .then(response => {
      this.setState({
        items: response.data
        })
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
            <div className="col-md-2" onClick={() => this.displayItems(item, 'category')}>{`#${item}`}</div>
          )}
        </div>
          <div classname="row">
          {this.state.activities.map(item =>
            <div className="col-md-2" onClick={() => this.displayItems(item, 'activities')}>{`#${item}`}</div>
          )}
        </div>
       <br/>
       <br/>
       <br/>
       <br/>
        {this.state.items.map(item =>
          <div classname="row">
            <div className="col-md-4"><span>x </span>{item.item}</div>
          </div>
        )}
			</div>
  	);
  }
};

export default List;

        // {props.showcase_photos.map(item =>
        //   <img className='showcasePhotos' src={`https://s3-us-west-1.amazonaws.com/foodeesphotos/${item.photo_id}.jpg`}/>
        // )}