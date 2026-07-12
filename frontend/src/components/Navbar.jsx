import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#222",
      }}
    >
      <h2 style={{ color: "white" }}>🏔 Kumaon Stays</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/listing" style={{ color: "white" }}>
          Listings
        </Link>

        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>

        <Link to="/register" style={{ color: "white" }}>
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;