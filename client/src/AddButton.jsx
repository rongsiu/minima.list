import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  render() {
  	return (
			<div className="col-md-3">
			<div class="btn btn-primary">Add Item</div>
			  <Modal
          isOpen={this.state.modalIsOpen}
        >
        </Modal>
			</div>
  	);
  }
};

export default AddButton;