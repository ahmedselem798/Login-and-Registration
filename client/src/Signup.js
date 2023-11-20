import { Link } from "react-router-dom";
import { Component} from "react";
// import axios from "axios";

class Signup extends Component {
  // const [name, SetName] = useState();
  // const [email, SetEmail] = useState();
  // const [password, SetPassword] = useState();
  // const navigate = useNavigate();
  // const handelSubmit = async (e) => {
  //   const result = await axios.post("http://localhost:8080/register", {
  //     name,
  //     email,
  //     password,
  //   });
  //   e.preventDefault();
  //   try {
  //     console.log(result.data);
  //     // navigate("/login");
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state;
    console.log(name, email, password);
    fetch("http://localhost:8080/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRigester");
      });
  }
  render() {
    return (
      <div>
        <h2>Registration Form</h2>
        <div class="card text-bg-dark mb-3">
          <div class="card-body">
            <form onSubmit={this.handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputText1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputText1"
                  // value={name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
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
                Register
              </button>
            </form>
            <Link to="/" type="submit" class="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
