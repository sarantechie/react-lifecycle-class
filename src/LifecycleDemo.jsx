import React from 'react';

class LifecycleDemo extends React.Component {
  // Constructor: Initialize state
  constructor(props) {
    super(props);
    console.log('Constructor: Component is being created');
    this.state = {
      count: 0,
    };
  }

  // Static method to derive state from props
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Syncing state with props if needed');
    return null; // Return new state if needed; otherwise return null
  }

  // Component has been mounted
  componentDidMount() {
    console.log('componentDidMount: Component is mounted');
    // Example: Fetch data or set up subscriptions
  }

  // Determine if the component should re-render
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should component re-render?');
    return true; // Return true to allow re-rendering
  }

  // Get snapshot before updating the DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capture information before DOM update');
    return null; // Return snapshot value (e.g., scroll position)
  }

  // Component has been updated
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component updated');
  }

  // Component is about to be unmounted
  componentWillUnmount() {
    console.log('componentWillUnmount: Component will be removed');
    // Example: Clean up subscriptions or listeners
  }

  // Render method: Define the UI
  render() {
    console.log('Render: Rendering component');
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>React Lifecycle Methods</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;
