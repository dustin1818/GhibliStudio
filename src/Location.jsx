import React from 'react'

const Location = ({items}) => {
  return (
        <div className="grid grid-cols-2 gap-5">
            {items.map((place) => 
            <div key={place.id} className="grid gap-1">
                <h3> Climate: {place.climate}</h3>
                <h3 >Name: {place.name}</h3>
                <h3 >Terrain: {place.terrain}</h3>
                <h3 >Residents: <br></br> {place?.residents > 1 ? <ul> <li>place?.residents</li></ul> : place?.residents}</h3>
                <p>What Movie/s:<br></br> <a target='_blank' href={place.url}>{place.url} </a></p>
            </div>
            )}
        </div>
      )  
}

export default Location