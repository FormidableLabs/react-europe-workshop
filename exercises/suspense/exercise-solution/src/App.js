/**
 * SUSPENSE EXERCISE!
 *
 * Dog pics are adorable, but having half-rendered images
 * on the page is not adorable at all.
 *
 * Using simple-cache-provider, implement an Image component
 * that will delay rendering until the image loads. Make sure
 * you also use React.Timeout to render a placeholder if the
 * image takes too long.
 *
 * If you don't remember how to wait for an image load, check
 * out this SO question:
 *
 * https://stackoverflow.com/questions/2342132/waiting-for-image-to-load-in-javascript
 *
 */

import React, { Component } from "react";
import { createCache, createResource } from "simple-cache-provider";
import Spinner from "./Spinner";
import "./App.css";

// Returns a Promise that resolves when
// the image is loaded.
const loadImage = src => {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = resolve;
    img.src = src;
  });
};

// Cache that will store all the cached images
const cache = createCache();

// Resource for reading from the cache
const ImageResource = createResource(loadImage);

const Img = ({ src, ...props }) => {
  // Suspends if the image isn't loaded
  ImageResource.read(cache, src);
  return <img src={src} {...props} />;
};

// A list of images inside a container
const ImageList = ({ images }) => (
  <div className="container">
    {images.map(image => <Img key={image} className="dog-pic" src={image} />)}
  </div>
);

export default class App extends Component {
  state = {
    breed: "dachshund",
    images: []
  };

  fetchImagesForBreed(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`).then(res =>
      res.json()
    );
  }

  componentDidMount() {
    const { breed } = this.state;
    this.fetchImagesForBreed(breed).then(({ message }) => {
      this.setState({
        loading: false,
        images: message
      });
    });
  }

  setActiveBreed = breed => {
    this.setState({
      breed,
      loading: true
    });
    this.fetchImagesForBreed(breed).then(({ message }) => {
      this.setState({
        loading: false,
        images: message
      });
    });
  };

  render() {
    const { images, loading, breed } = this.state;
    return (
      <div className="App container">
        <DogBreedButtons active={breed} setActive={this.setActiveBreed} />
        <React.Timeout ms={1000}>
          {didExpire =>
            didExpire ? <Spinner /> : <ImageList images={images} />
          }
        </React.Timeout>
      </div>
    );
  }
}

// You can ignore everything past here....

function DogBreedButtons({ setActive, active }) {
  return (
    <div style={{ marginBottom: 50 }} className="btn-group">
      {["pug", "boxer", "dachshund"].map(breed => {
        const isActive = breed === active;
        return (
          <button
            key={breed}
            onClick={() => setActive(breed)}
            className={`btn btn-outline-primary ${isActive && "active"}`}
          >
            {breed}
          </button>
        );
      })}
    </div>
  );
}
