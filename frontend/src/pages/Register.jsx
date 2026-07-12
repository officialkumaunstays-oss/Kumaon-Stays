import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4"
        style={{ width: "450px", borderRadius: "15px" }}
      >
        <h2 className="text-center mb-4">📝 Register</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <button className="btn btn-success w-100">
            Register
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;