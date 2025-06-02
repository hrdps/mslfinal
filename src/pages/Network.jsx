import { VStack } from '@chakra-ui/react';
import React from 'react';

class Network extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Mounted');
  }
  componentDidUpdate() {
    console.log('updated');
  }
  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    return (
      <>
        <VStack mt={'120px'}></VStack>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count: {this.state.count}
        </button>
      </>
    );
  }
}

export default Network;
