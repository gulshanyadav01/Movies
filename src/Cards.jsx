import React from "react"


function Card(props){
    return (
        <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic"/>
          <div className="card_info">
            <span className="card_title">{props.title}</span>
            <h3>{props.sname}</h3>
            <a 
            href={props.link}
            target="_blank">
            <button>Watch Now</button>
            </a>
    
          </div>
        </div>
      </div>
      </>
    
      );
}

export default Card;