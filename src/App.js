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
    this.handleRemove = this.handleRemove.bind(this);
  }

  reloadData() {
    http: axios.get("http://localhost:3000/posts").then((res) => {
      // console.log(res);
      // console.log(res.data);
      this.setState({
        dataApi: res.data,
      });
    });
  }
  handleRemove(e) {
    console.log(e.target.value);
    fetch(`http://localhost:3000/posts/${e.target.value}`, {
      method: "DELETE",
      // }).then((res) => console.log(res));
    }).then((res) => this.reloadData());
  }
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts");
    // .then((response) => response.json())
    // .then((json) => console.log(json));

    // menyipan datanya
    // .then((response) => response.json())
    // .then((res) => {
    //   this.setState({ dataApi: res });
    // });
    //localhost:3000/posts
    //menggunkan axios
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    // http: axios.get("http://localhost:3000/posts").then((res) => {
    //   // console.log(res);
    //   // console.log(res.data);
    //   this.setState({
    //     dataApi: res.data,
    //   });
    // });

    this.reloadData();
  }

  render() {
    return (
      <div>
        <p>Hello Api</p>
        {this.state.dataApi.map((dat, index) => {
          return (
            <div key={index}>
              <p>{dat.title}</p>
              <button value={dat.id} onClick={this.handleRemove}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
