import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
  	return (
			<div>
        <div>
          <span>Dress</span>
          <span>4/2018</span>
          <button>x</button>
        </div>
        <div>
          <span>Dress</span>
          <span>4/2018</span>
          <button>x</button>
        </div>
			</div>
  	);
  }
};

export default List;

        // {props.showcase_photos.map(item =>
        //   <img className='showcasePhotos' src={`https://s3-us-west-1.amazonaws.com/foodeesphotos/${item.photo_id}.jpg`}/>
        // )}