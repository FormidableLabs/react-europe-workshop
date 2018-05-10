// @format
import React, { Component } from "react";

export default React.forwardRef((props, ref) => (
  <input className="search-bar" ref={ref} {...props} />
));
