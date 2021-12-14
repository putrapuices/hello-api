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
      dataPost: {
        id: 0,
        title: "",
        body: "",
      },
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.inputChange = this.inputChange.bind(this);
    // this.onSubmitForm = this.onSubmitForm.bind(this);
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

  inputChange(e) {
    // console.log(e.target.value);
    //srit operator ES6 (...)
    let newdataPost = { ...this.state.dataPost };
    newdataPost["id"] = new Date().getTime();
    newdataPost[e.target.name] = e.target.value;
    this.setState(
      {
        // dataPost: e.target.value,
        dataPost: newdataPost,
      },
      () => console.log(this.state.dataPost)
    );
  }
  // kalau dbuat dengan arrowfunction tdkperlu kita bind functionnya
  onSubmitForm = () => {
    axios
      .post(`http://localhost:3000/posts`, this.state.dataPost)
      // .then((res) => this.reloadData);  //reloadData tdk halan
      .then(() => {
        this.reloadData();
      });
  };

  // onSubmitForm() {
  //   axios
  //     .post(`http://localhost:3000/posts`, this.state.dataPost)
  //     // .then((res) => this.reloadData);  //reloadData tdk halan
  //     .then(() => {
  //       this.reloadData();
  //     });
  // }

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
        <input
          type="text"
          name="body"
          placeholder="Masukkan Body"
          onChange={this.inputChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Masukkan Title"
          onChange={this.inputChange}
        />
        <button type="submit" onClick={this.onSubmitForm}>
          Add Data
        </button>
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
