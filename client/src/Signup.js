import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, SetName] = useState();
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();

  const handelSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((result) => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <div class="card text-bg-dark mb-3">
        <div class="card-body">
          <form onSubmit={handelSubmit}>
            <div class="mb-3">
              <label for="exampleInputText1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputText1"
                value={name}
                onChange={(e) => SetName(e.target.value)}
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
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
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
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Register
            </button>
          </form>
          <Link to="/login" type="submit" class="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
