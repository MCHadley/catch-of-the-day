import React from 'react';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object
  }

  goToStore = (event) => {
    // Stop submitting the form
    event.preventDefault()
    // Grab the next from the store input
    const storeName = this.myInput.current.value;
    // Change the URL to whatever store is entered
    this.props.history.push(`/store/${storeName}`)
  }

  render(){
    return (
    <form className="store-selector" onSubmit={this.goToStore}>
      <h2>Please enter a store</h2>
      <input 
        type="text" 
        placeholder="Store Name" 
        required 
        ref={this.myInput} />
      <button type="submit">Visit Store</button>
    </form>
    );
  }
}

export default StorePicker;