import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Viewcard() {
  const [state, setState] = useState({});
  const { view } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3222/cart/` + view)
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setState(data);
        console.log(data);
      });
  }, [view]);
  return (
    <div>
      <div style={{ height: "100px" }}></div>

      {/* <img src={state.image}></img>
<h6>{state.title}</h6> */}

      <div className="col-lg-4 col-md-6">
        <div className="single-product">
          <img className="img-fluid" src={state.image} alt />
          <div className="product-details">
            <h6>{state.title}</h6>
            <div className="price">
              <h6>{state.price}</h6>
              <h6 className="l-through">{state.price2}</h6>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewcard;
