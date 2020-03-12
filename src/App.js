import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    // variables maintain state
    this.state={
      current: '',
      previous: []
    }
  }

  render() {
    return (
      <div className="App">
        <div className="result" type="text" value={this.state.current} />
      </div>

    );
  }


}

export default App;
