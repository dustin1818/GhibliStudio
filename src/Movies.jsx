import React from "react";
import Characters from "./Characters";
import Location from "./Location";

const Movies = ({ items, reqType }) => {
  console.log(reqType);
  return (
    <div className="flex flex-wrap justify-between" style={{rowGap:"100px", gap:"10px"}}>
      {reqType === "films" ? (
        items.map((movie) => (
          <div key={movie.id} className="w-1/6">
            <img src={movie.image}></img>
            <h3>Title: {movie.title}</h3>
            <h3>Released Date: {movie.release_date}</h3>
            <p>
              Description:<br></br> {movie.description}
            </p>
          </div>
        ))
      ) : reqType === "people" ? (
        <Characters items={items} />
      ) : reqType === "locations" ?  <Location items={items}/> : null}
    </div>
  );
};

export default Movies;
