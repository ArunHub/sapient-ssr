import React, { Component } from "react";
import { connect } from "react-redux";
import SpaceHome from "./SpaceHome.jsx";

class App extends Component {
  render() {
    return <SpaceHome json={this.props.state.json} developer="Arun" />;
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {
    state,
  };
}

export default connect(mapStateToProps)(App);
