import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PanResponder,
} from 'react-native';

import './index.css';

class App extends React.Component {
  state = {
    x: 0,
    y: 0,
    background: 'red',
  };
  _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderGrant: (evt, gestureState) => {
      this.setState({
        background: 'blue',
      });
    },
    onPanResponderMove: (evt, gestureState) => {
      this.setState(state => ({
        x: gestureState.dx,
        y: gestureState.dy,
      }));
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      this.setState({
        background: 'red',
        x: 0,
        y: 0,
      });
    },
    onPanResponderTerminate: (evt, gestureState) => {},
    onShouldBlockNativeResponder: (evt, gestureState) => {
      return true;
    },
  });
  render() {
    return (
      <View style={styles.container}>
        <View
          ref={this.ref}
          style={[
            styles.box,
            {
              backgroundColor: this.state.background,
              transform: [
                { translateX: this.state.x },
                { translateY: this.state.y },
              ],
            },
          ]}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: { height: 100, width: 100, backgroundColor: 'red' },
});

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
