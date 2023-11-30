import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/home", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ token: window.localStorage.getItem("token") }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
        if (data.data === "Token Expierd") {
          alert("Token Expierd");
          window.localStorage.clear();
          window.location.href = "/login";
        }
      });
  }

  logout = () => {
    window.localStorage.clear();
    window.location.href = "/login";
  };
  render() {
    return (
      <div>
        <div class="card text-bg-dark mb-3">
          <div class="card-body">
            <h1>{this.state.userData.name}</h1>
            <h3>{this.state.userData.email}</h3>
            <br></br>
            <button onClick={this.logout} type="submit" class="btn btn-primary">
              logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
