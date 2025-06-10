import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8967/users")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setstate(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>hello admin</h1>
      <h1>hello admin</h1>
      <h1>hello admin</h1>
      <h1>hello admin</h1>
      <h1>hello admin</h1>
      <h1>hello admin</h1>
      <h1>hello admin</h1>

      {state &&
        state.map((v) => (
          <div className="col-lg-4 col-md-5 mx-auto">
            <div className="single-product ">
              <img className="img-fluid" src={v.image} />
              <div className="product-details">
                <h6>{v.title}</h6>
                <div className="price">
                  <h6>$150.00</h6>
                  <h6 className="l-through">$210.00</h6>
                </div>
                <div className="prd-bottom">
                <Link to="/adminadd" className="btn btn-primary">
                    Add
                  </Link>
                  <Link to="/adminedit" className="btn btn-info mx-2">
                    Edit
                  </Link>
                  <Link to="/admindelete" className="btn btn-success ">
                    Delete
                  </Link>
                  {/* <a href className="social-info">
                    <span className="lnr lnr-move" />
                    <p className="hover-text">view more</p>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Admin;
