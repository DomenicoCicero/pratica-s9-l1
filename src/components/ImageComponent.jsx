import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <img
        src={this.props.src}
        alt={this.props.alt}
        style={{ display: this.props.display, margin: this.props.margin }}
      />
    );
  }
}

export default ImageComponent;
