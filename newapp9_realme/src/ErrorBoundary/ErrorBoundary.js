import React, { Component } from "react";
import Fallbackui from "./Fallbackui";
export default class ErrorBoundary extends Component {
  state = { Flag: false };
  componentDidCatch() {
    this.setState({ Flag: true });
  }
  render() {
    if (this.state.Flag) {
      return <Fallbackui />;
    }
    return this.props.children;
  }
}
