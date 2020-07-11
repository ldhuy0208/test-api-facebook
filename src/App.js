import React, { Fragment } from "react";
import "./App.css";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  onChange = (e) => {
    this.setState({ message: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const params = {
      message: this.state.message,
      access_token:
        "EAAH8ll3xGecBAJ9umr2Uz4RwjnHjSo7fpleeg8hiILUqIZBoqg7DOUsiznq2DP6HvJ0eDRxBuPSTAkbZByMNocmmbXv1TQoqodCDJB5Q6FaiHesHymperFFpRSCnfUKkCG3mG0lLS0pXhxwsUbM0mq5dQkw1DZBXrJubWYPeT52ZATDMu2b1IXPGEaBEkkwZD",
    };

    console.log(params);

    try {
      const res = await Axios.post(
        "https://graph.facebook.com/1213620598825676/feed?",
        params
      );
      console.log(res);
      alert(res);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  render() {
    return (
      <div>
        <h1>Đăng bài facebook</h1>
        <form onSubmit={this.onSubmit}>
          <textarea value={this.state.message} onChange={this.onChange} />
          <button>Đăng bài</button>
        </form>
      </div>
    );
  }
}

export default App;
