import React, { Component } from 'react';
import LazyImage from './react-preload-image/LazyImage';

const source = 'https://st4.depositphotos.com/1001024/20154/i/1600/depositphotos_201545540-stock-photo-renaissance-lute-tablature-large-image.jpg';
const source2 = 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Large_Scaled_Forest_Lizard.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{width: '300px', height: '300px', backgroundColor: 'red', textAlign: 'center'}}>
          <LazyImage src={source}/>
        </div>
        <LazyImage src={source2}/>
      </div>
    );
  }
}

export default App;
