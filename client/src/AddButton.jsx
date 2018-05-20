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
			<div>
			  <Modal
          isOpen={this.state.modalIsOpen}
        >
        <div>sfwefef</div>
        </Modal>
			</div>
  	);
  }
};

export default AddButton;