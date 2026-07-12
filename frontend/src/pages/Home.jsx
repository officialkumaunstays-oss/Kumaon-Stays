import { useEffect, useState } from "react";
import API from "../services/api";

function Home() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const res = await API.get("/hotels");
      setHotels(res.data.hotels);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🏔 Kumaon Stays</h1>

      <div className="row">
        {hotels.length === 0 ? (
          <h3 className="text-center">No Hotels Found</h3>
        ) : (
          hotels.map((hotel) => (
            <div className="col-md-4 mb-4" key={hotel._id}>
              <div className="card shadow h-100">

                <img
                  src={hotel.image}
                  className="card-img-top"
                  alt={hotel.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body">

                  <h4 className="card-title">{hotel.title}</h4>

                  <p className="text-muted">📍 {hotel.location}</p>

                  <h5 className="text-success">₹ {hotel.price} / Night</h5>

                  <p>{hotel.description}</p>

                  <button className="btn btn-primary w-100">
                    View Details
                  </button>

                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;