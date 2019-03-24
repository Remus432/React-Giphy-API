import React from "react";


const Gifs = ({gifs}) => {
  return (
    <div className="gif--container">
      {
        gifs.map(gif => {
          return <div className="gif-wrap"><img src={gif} alt="Image"/></div>
        })
      }
    </div>
  )
}


export default Gifs;