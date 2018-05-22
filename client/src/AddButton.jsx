import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal(state) {
    this.setState({
      modalIsOpen: state
    })
  }

  render() {
  	return (
			<div className="col-md-3">
			<div class="btn btn-primary" onClick={() => this.openModal(true)}>Add Item</div>
			  <Modal
          isOpen={this.state.modalIsOpen}
        >
        <button onClick={() => this.openModal(false)}>Close</button>
        <Dropzone>
        </Dropzone>
        </Modal>
			</div>
  	);
  }
};

export default AddButton;