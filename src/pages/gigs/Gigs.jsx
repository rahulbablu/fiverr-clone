import React, { useState } from "react";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";
import "./Gigs.scss";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">{"FIVERR > GRAPHICS & DESIGN >"}</span>
        <h1 className="heading">AI Artists</h1>
        <p className="desc">
          Explore the boundaries of art and technology with Fiverr&#39;s AI
          artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}{" "}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="cards">
        {gigs.map((item) => (
          <GigCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Gigs;
