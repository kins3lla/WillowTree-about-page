import React, { Component } from "react";
import "./DivisionTextCarousel.css";

var img1 = (
  <img
    src={}
  />
);

var img2 = <img
  src={} />;

var img3 = (
  <img
    src={}
  />
);
var img4 = (
  <img
    src={}
  />
);
var img5 = (
  <img
    src={}
  />
);
var img6 = (
  <img
    src={}
  />
);

var img7 = (
  <img
    src={}
  />
);

var img8 = (
  <img
    src={}
  />
);

var images = [img1, img2, img3, img4, img5, img6, img7, img8];

var length = images.length;

class TextCarousel extends Component {


  constructor(props) {
    super(props);
    this.state = { imageIndex: 0 };
  }

  changeImage = () => {
    if (this.state.imageIndex === length - 1) {
      this.setState({
        imageIndex: 0
      });
    } else {
      this.setState({
        imageIndex: this.state.imageIndex + 1
      });
    }
  };

  changeImageBack = () => {
    if (this.state.imageIndex === 0) {
      this.setState({
        imageIndex: length - 1
      });
    } else {
      this.setState({
        imageIndex: this.state.imageIndex - 1
      });
    }
  };

  render() {
    return (
      <div className="Carousel">

        <h1 className="Images" onMouseOver={this.changeImage}>
          {images[this.state.imageIndex]}
        </h1>
        <div className="loader">

        </div>



      </div>
    );
  }
}

export default TextCarousel;