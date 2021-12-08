// function App() {
//   return (
//     <div className="App">
//       <header className="App-header"></header>
//     </div>
//   );
// }
// export default App;

import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts");
    // .then((response) => response.json())
    // .then((json) => console.log(json));

    // menyipan datanya
    // .then((response) => response.json())
    // .then((res) => {
    //   this.setState({ dataApi: res });
    // });

    //menggunkan axios
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      // console.log(res);
      // console.log(res.data);
      this.setState({
        dataApi: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <p>Hello Api</p>
        {this.state.dataApi.map((dat, index) => {
          return (
            <div key={index}>
              <p>{dat.title}</p>
              <p>{dat.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
