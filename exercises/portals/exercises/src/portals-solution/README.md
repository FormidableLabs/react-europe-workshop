resources:
* accessibility
* positioning libraries/tools
* react docs
https://github.com/reactjs/react-modal

Positioning libs
https://github.com/RobertMenke/react-popover
popper.js
https://github.com/HubSpot/tether


Portals Lecture w/ Slides - keep to about 10 minutes
* Intro to portals
* Overview of the API in React 16
* Positioning libraries?
* Drawbacks/pitfalls

* you can append to document.body.appendChild can get more control potentially by appending to a specific document element

* Take the class from an info menu that can't break out of its parent container to one built with a portal
* visually show in dev tools that it's outside of the DOM tree but within the React tree
* start with the method on the form in the modal, slowly move it up the component tree and demonstrate that it still works

* Slide for free-form exercise continuation
  * create a tooltip that can hover and show details about what it's hovering/create an event in the parent container
