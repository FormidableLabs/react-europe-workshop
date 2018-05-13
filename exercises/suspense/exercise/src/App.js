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
 * STRETCH GOAL
 *
 * We show a spinner waiting for the initial API response. Sometimes
 * the API is really fast, though. Use simple-cache-provider
 * and Suspense to only show the Spinner if rendering takes
 * more than 2 seconds.
 */

import React, { Component } from "react";
import Spinner from "./Spinner";
import "./App.css";

// A list of images inside a container
const ImageList = ({ images }) => (
  <div className="container">
    {images.map(image => <img className="dog-pic" src={image} />)}
  </div>
);

export default class App extends Component {
  state = {
    loading: true,
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
        {loading ? <Spinner /> : <ImageList images={images} />}
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
