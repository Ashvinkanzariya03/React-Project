import React, { useEffect, useState } from 'react'

function AdminEdite() {
  const [state,setState]= useState()
    useEffect(()=>{
        fetch("http://localhost:3210/users")
        .then((Response)=>{
            return Response.json();
        })
        .then((data)=>{
            console.log(data);
            setState(data)
            
        })
    },[])
  return (
    <div>
      <h1>admin panel</h1>
      <h1>admin panel</h1>
      <h1>admin panel</h1>
      <h1>admin panel</h1>
      <h1>admin panel</h1>
      <h1>admin panel</h1>
      <section className="lattest-product-area pb-40 category-list">
                <div className="row">
                  {/* single product */}
                  {
                    state && state.map((v)=>(
                      
                      <div className="col-lg-4 col-md-6">
                    <div className="single-product">
                      <img className="img-fluid" src={v.image} alt />
                      <div className="product-details">
                        <h6>
                          <input type='text'/>
                        </h6>
                        <div className="price">
                          <h6><input type='text'/></h6>
                          <h6 className="l-through">{v.price2}</h6>
                        </div>
                        <div className="prd-bottom">
                          <a href className="social-info">
                            <span className="ti-bag" />
                            <p className="hover-text">add to bag</p>
                          </a>
                          <a href className="social-info">
                            <span className="lnr lnr-heart" />
                            <p className="hover-text">Wishlist</p>
                          </a>
                         
                          <a href className="social-info">
                            <span className="lnr lnr-move" />
                            <p className="hover-text">view more</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                    ))
                  }
                  
                </div>
              </section>
    </div>
  )
}

export default AdminEdite
