import React from 'react'

const Characters = ({items}) => {
  return (
        <div className="grid grid-rows-4 grid-cols-5 gap-5">
            {items.map((character) => 
            <div key={character.id} className="grid gap-1">
                <h3 >Name: {character.name}</h3>
                <h3 >Gender: {character.gender}</h3>
                <h3 >Age: {character.age}</h3>
                <p>Eye/Hair Color:{character.eye_color}</p>
            </div>
            )}
        </div>
      )  
}

export default Characters