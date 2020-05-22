import React from 'react';
import SearchTwicks from './components/SearchTwicks';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render(){
    return (
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
            <SearchTwicks />
        </div>
      );
  }
}

export default App;
