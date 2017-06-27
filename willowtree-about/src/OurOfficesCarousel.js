import React, { Component } from "react";
import "./OurOfficesCarousel.css";

var img1 = (
  <img
    src={
      "https://images.contentful.com/3cttzl4i3k1h/6pPsoRVyMwAO4g6wYEuei2/37cc5bafa67cbf424c3848ee445412f8/IMG_3787-47.jpg?w=1400&h=600&q=80&fm=&fit=fill"
    }
  />
);

var img2 = <img
  src={
    "https://images.contentful.com/3cttzl4i3k1h/6eD0n0TRTO4k8q2WagqAa8/a61a9112c65e7bb6e359a0426044a69d/IMG_6496.jpg?w=1400&h=600&q=80&fm=&fit=fill"
  } />;

var img3 = (
  <img
    src={
      "https://images.contentful.com/3cttzl4i3k1h/5DdRtzV1EQCYIEgy4iukIE/fecbd65fa8e8bdb83a5f5701a23144ab/IMG_3805-56.jpg?w=1400&h=600&q=80&fm=&fit=fill"
    }
  />
);
var img4 = (
  <img
    src={
      "https://images.contentful.com/3cttzl4i3k1h/nzecRHQwfISoC6gcQG2CC/2d759916fba3d43013c51d19ebc5e8db/bitmap.png?w=1400&h=600&q=80&fm=&fit=fill"
    }
  />
);
var img5 = (
  <img
    src={
      "https://images.contentful.com/3cttzl4i3k1h/5TUNGyQozCS2Ks0oAQuQAQ/2e5a58387b73f81d490e490eb76e1f0a/IMG_4166-197.jpg?w=1400&h=600&q=80&fm=&fit=fill"
    }
  />
);
var img6 = (
  <img
    src={
      "https://images.contentful.com/3cttzl4i3k1h/6Hi74fvuDKA2AGomEwMi8U/dc043b195b54e7d944932931e5cba308/IMG_4111-172.jpg?w=1400&h=600&q=80&fm=&fit=fill"
    }
  />
);

var img7 = (
  <img
    src={
      "https://images.contentful.com/3cttzl4i3k1h/4xrTxJ1o9i8uKye6Aqi0Wu/a1c0362043db981efe48348944e9a8f0/IMG_4277-244.jpg?w=1400&h=600&q=80&fm=&fit=fill"
    }
  />
);

var img8 = (
  <img
    src={
      "https://images.contentful.com/3cttzl4i3k1h/2AnZ0Sat6sAg8MAyiGoOm2/99ea37eba8da22f0e5cc4f577fbd0b94/IMG_3874-89.jpg?w=1400&h=600&q=80&fm=&fit=fill"
    }
  />
);

var images = [img1, img2, img3, img4, img5, img6, img7, img8];

var length = images.length;

class ImageCarousel extends Component {


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
        <div className="text">
          <h1> Our Offices </h1>
          <p>We collaborate closely in shared team spaces in Charlottesville, Virginia and</p>
          <p>Durham, North Carolina. We love where we work and love what we do.</p>
        </div>
        <div>
          <h1 className="Images" onMouseOver={this.changeImage}>
            {images[this.state.imageIndex]}
          </h1>
          <div className="Numbers">
            <div>
              <a> 1 </a>
              <a> 2 </a>
              <a> 3 </a>
              <a> 4 </a>
              <a> 5 </a>
              <a> 6 </a>
              <a> 7 </a>
              <a> 8 </a>
            </div>
          </div>

        </div>


      </div>
    );
  }
}

export default ImageCarousel;