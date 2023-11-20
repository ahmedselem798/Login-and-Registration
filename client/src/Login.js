import { Link } from "react-router-dom";
import { Component } from "react";
// import axios from "axios";

class Login extends Component {
  // const [password, SetPassword] = useState();
  // const [email, SetEmail] = useState();

  // const navigate = useNavigate();
  // axios.defaults.withCredentials = true;
  // const handelSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await axios.post("http://localhost:5000/login", {
  //       email,
  //       password,
  //     });
  //     console.log(result.data);
  //     if (result.data.status === "Success") {
  //       if (result.data.role === "admin") {
  //         navigate('/dashboard')
  //       }else{
  //         navigate('/home')
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:8080/", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRigester");
        if (data.status === "ok") {
          alert("Login Successful");
          window.localStorage.setItem("token", data.data);
          window.location.href='/home';
        }
      });
  }
  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <div class="card text-bg-dark mb-3">
          <div class="card-body">
            <form onSubmit={this.handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  // value={email}
                  // onChange={(e) => SetEmail(e.target.value)}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  // value={password}
                  // onChange={(e) => SetPassword(e.target.value)}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </form>
            <Link to="/register" type="submit" class="btn btn-primary">
              Register
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
