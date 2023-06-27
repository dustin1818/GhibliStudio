import React from "react"

const Button = ({reqType, setReqType, items, setItems}) => {

    const loadFilms = (e) => {
        const btnValue = e.target.innerText;
        setReqType(btnValue)
    }
  return (
    <>
    <button 
    className="bg-zinc-700 text-white mb-10 ml-3"
    type = "button"
    onClick={loadFilms}>
        films
    </button>
    <button 
    className="bg-zinc-700 text-white mb-10 ml-3"
    type = "button"
    onClick={loadFilms}>
        people
    </button>
    <button 
    className="bg-zinc-700 text-white mb-10 ml-3"
    type = "button"
    onClick={loadFilms}>
        locations
    </button>
    </>
  )
}

export default Button