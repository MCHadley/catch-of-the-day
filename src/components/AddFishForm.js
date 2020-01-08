import React from "react";
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
  };

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    }
    this.props.addFish(fish)
    // clear the form after submit
    event.currentTarget.reset();
  } 
 
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef}  type="text" placeholder="name" />
        <input name="price" type="text" ref={this.priceRef} placeholder="price" />
        <select name="status" type="text" ref={this.statusRef} placeholder="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" type="text" ref={this.descRef} placeholder="desc"></textarea>
        <input name="image" type="text" ref={this.imageRef} placeholder="image" />
        <button type="submit">Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm;