import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./home.css";
import { AiFillPlayCircle } from "react-icons/ai";
import ProductDetails from "../components/ProductDetails";
import { BsFillCartPlusFill } from "react-icons/bs";
import axios from "axios";

function Home() {

  const [foods, setFoods] = useState([])
  const [trending, setTrending] = useState(null)

useEffect(() =>{

  let randomFood = Math.floor(Math.random() * foods.length)

  setTrending(foods[randomFood]);

}, [foods])
  
useEffect(() =>{
  axios.get("http://localhost:8000/allfood/")
  .then((response) => setFoods(response.data))
  .catch((err) => console.log(err))
}, [])

  return (
    <div class="Home">
      <Navbar />
      <section className="Banner p-5">
        <div className="container ">
          <div className="row align-items-center ">
            <div className="col-md-6 text left">
              <div className="d-flex align-items-center gap-1 ">
                <h4>Fast </h4>
                <h6>
                  Food <br />
                  Delivery
                </h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, corrupti.
              </p>

              <div className="d-flex align-items-center">
                <button className="btn btn-dark rounded-5 fw-bold p-3 ">
                  Order Now
                </button>
                <p className="fw-bold ">
                  <span className="bg-white p-3 rounded-circle">
                    <AiFillPlayCircle size={24} />
                  </span>
                  Watch Now
                </p>
              </div>
            </div>
            <div className="col-md-6 right">
              <img
                className="image-fluid"
                src="./../../banner.png.png"
                alt="banner"
              />

              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trending mt-5  container ">
        <h6 className="h2">Todays Trending Food </h6>
        <small className="d-block mb-4 h3">
          Peoples loves it most the past week...
        </small>

        <ProductDetails items={trending}/>
      </section>

      <section className="popular container">
        <h4>Popular Items</h4>
        <p>Lorem ipsum dolor sit amet.</p>

        <div className="row mt-4">

          

        {
          foods.map((food) => (
            <div key={food?.id}className="col-md-3">
            <div className="card">
              <img src={`http://localhost:8000/${food?.Photo}`} alt="" className="card-img-top" />
              <div className="card-body">
                <h5>{food?.title}</h5>
                <p>{food?.description}</p>
                <h6>{food?.amount}</h6>

                <button className="btn btn-outline-success p-2 rounded-3">
                  <BsFillCartPlusFill />
                  ADD
                </button>
              </div>
            </div>
          </div>
          ))
        }
  
          
        </div>
       
      </section>
    </div>
  );
}

export default Home;
