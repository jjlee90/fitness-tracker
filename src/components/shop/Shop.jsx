import React from "react"
import "./Shop.css"
import { shopMockData } from "./ShopMockData"
import { Link } from "react-router-dom"

export default function Shop() {
  let mapData = shopMockData.map((eachData) => {
    return (
      <div key={eachData.name}>
        <ul>
          <li>
            <img className="shopImg" src={eachData.image} />
          </li>
          <div>
            <li>{eachData.name}</li>
            <li>${eachData.price}</li>
            <li>Reviews: {eachData.rating}</li>
          </div>
        </ul>
      </div>
    )
  })
  return (
    <div>
      <Link to="/nav">Home</Link>
      <h1>Shop</h1>
      <nav className="shopNav">
        <ul>
          <li>Apparel</li>
          <li>Equipment</li>
          <li>Shoes</li>
        </ul>
      </nav>

      <h2>New Gear</h2>
      <div className="shopContainer"> {mapData}</div>
    </div>
  )
}
