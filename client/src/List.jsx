import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
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
  }

  render() {
  	return (
			<div>
        {this.state.items.map(item =>
          <div>
            <span>{item.item}</span>
            <span>{item.date_acquired}</span>
            <button>x</button>
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